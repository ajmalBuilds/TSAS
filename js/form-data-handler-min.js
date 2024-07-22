if(document.querySelector('#subscribe-form')) {
const scriptURL = 'https://script.google.com/macros/s/AKfycbzjmYnv6DHMIjDg52DC25msM-rEdNK-UlamdxZkmcE_1MgFE95lSJqmfu_b1TJqWAR7/exec';
    const form = document.forms['store-email'];
  
    form.addEventListener('submit', e => {
        e.preventDefault();
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => alert("Thanks for Subscribing! We will contact you soon."))
            .catch(error => console.error('Error!', error.message));
    });
    
}


if(document.querySelector('#volunteer-form')) {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwsUPGMnhadIqqhQczskDTvDXIW-UNv_V4xPiXxyovbfjN9tAvtePzTw6gvpMH0qDIF/exec';
    const form = document.forms['store-data'];
  
    form.addEventListener('submit', e => {
        e.preventDefault();
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => alert("Thanks for contacting us! We will contact you soon."))
            .catch(error => console.error('Error!', error.message));
    });
}