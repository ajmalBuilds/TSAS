document.addEventListener("DOMContentLoaded", () => {
    const pressReleasesContainer = document.querySelector(".press-releases-container");
    const searchInput = document.getElementById("pressSearchInput");
    const pressReleasesPerPage = 10;
    const pagination = document.getElementById("pagination");
    let currentPage = getCurrentPageFromURL();
    let pressReleases = [];
    let filteredPressReleases = [];

    fetch("press-releases.json")
        .then(response => response.json())
        .then(data => {
            pressReleases = data;
            filteredPressReleases = pressReleases;
            displayPressReleases();
            setupPagination();
        });

    window.addEventListener("popstate", () => {
        currentPage = getCurrentPageFromURL();
        displayPressReleases();
        setupPagination();
    });

    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase();
        filteredPressReleases = pressReleases.filter(pr => 
            pr.content.toLowerCase().includes(query) || 
            pr.date.toLowerCase().includes(query)
        );
        currentPage = 1;
        displayPressReleases();
        setupPagination();
    });

    function displayPressReleases() {
        pressReleasesContainer.innerHTML = "";
        const start = (currentPage - 1) * pressReleasesPerPage;
        const end = start + pressReleasesPerPage;
        const currentPressReleases = filteredPressReleases.slice(start, end);

        currentPressReleases.forEach(pressRelease => {
            const pressReleaseCard = document.createElement("div");
            pressReleaseCard.classList.add("press-card");
            pressReleaseCard.innerHTML = `
                <h4>${pressRelease.date}</h4>
                <p>${pressRelease.content}</p>
            `;
            pressReleaseCard.setAttribute('data-url', `${pressRelease.file}`);
            pressReleasesContainer.append(pressReleaseCard);
        });

        // Add event listeners for dynamically created cards
        document.querySelectorAll('.press-card').forEach(card => {
            card.addEventListener('click', () => {
                window.location.href = card.getAttribute('data-url');
            });
        });

        updateURL();
    }

    function setupPagination() {
        pagination.innerHTML = "";
        const pageCount = Math.ceil(filteredPressReleases.length / pressReleasesPerPage);

        for (let i = 1; i <= pageCount; i++) {
            const pageButton = document.createElement("button");
            pageButton.textContent = i;
            if (i === currentPage) {
                pageButton.classList.add("active");
            }
            pageButton.addEventListener("click", () => {
                currentPage = i;
                displayPressReleases();
                setupPagination();
            });
            pagination.appendChild(pageButton);
        }
    }

    function getCurrentPageFromURL() {
        const urlParams = new URLSearchParams(window.location.search);
        return parseInt(urlParams.get("page")) || 1;
    }

    function updateURL() {
        const url = new URL(window.location);
        url.searchParams.set("page", currentPage);
        window.history.pushState({}, "", url);
    }
});