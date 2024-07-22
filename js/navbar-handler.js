 let prevScrollpos = window.pageYOffset;
const navbar = document.querySelector("nav");

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-100px"; // Adjust this value based on your navbar height
  }
  prevScrollpos = currentScrollPos;
}



document.addEventListener('DOMContentLoaded', () => {
    // Reset the checkbox and close the sidenav on page load
    document.getElementById("hamburgerCheckbox").checked = false;
    closeNav();
    
        /*  sidenav links handler */
    document.querySelectorAll('.sidenav-links').forEach(link => {
        link.addEventListener('click', () => {
            window.location.href = link.getAttribute('data-url');
        });
    });
    document.querySelectorAll('.card').forEach(cardLink => {
        cardLink.addEventListener('click', () => {
            window.location.href = cardLink.getAttribute('data-url');
        });
    });
});

document.querySelector('.hamburger input').addEventListener('mousedown', function(e) {
    e.preventDefault();
    this.blur();
});

function openNav() {
    document.getElementById("mySidenav").classList.add("open");
    document.getElementById("overlay").style.display = "block";
}

function closeNav() {
    document.getElementById("mySidenav").classList.remove("open");
    document.getElementById("overlay").style.display = "none";
    document.getElementById("hamburgerCheckbox").checked = false; // Uncheck the checkbox
}

function toggleNav() {
    var checkbox = document.getElementById("hamburgerCheckbox");
    if (checkbox.checked) {
        openNav();
    } else {
        closeNav();
    }
}

document.querySelectorAll('.has-treeview').forEach(item => {
    const link = item.querySelector('.item-expandable');
    link.addEventListener('click', function() {
        const treeView = item.querySelector('.treeview');
        if (treeView) {
            if (treeView.classList.contains('open-treeview')) {
                treeView.classList.remove('open-treeview');
            } else {
                treeView.classList.add('open-treeview');
            }
        } else {
            console.error('Treeview element not found inside:', item);
        }
    });
});
