const forms = document.querySelectorAll('form[method="post"]');

forms.forEach(form => {
    form.addEventListener('submit', function(event) {
        const submitButton = event.target.querySelector('button[type="submit"]');
        
        // Disable the button to prevent multiple clicks
        submitButton.disabled = true;

        // Change button text and add a loading indicator
        submitButton.innerHTML = 'Submitting <span class="spinner-border spinner-border-sm text-light ms-2" role="status" aria-hidden="true"></span>';
    });
});

new Swiper('.review-card-wrapper', {
    loop: true,
    spaceBetween: 30,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
});

const createOrderSpearCard = document.querySelectorAll('.create-order-form-body.spear .create-order-spear-card')
const createOrderAddressCard = document.querySelectorAll('.create-order-form-body.address .create-order-address-card')

const goToSelectAddress = document.getElementById('go-to-select-address')
const backToSelectSpear = document.getElementById('back-to-select-spear')
const finishOrderButton = document.getElementById('finish-order');

const stepIndex = document.getElementsByClassName('create-order-step')
const spearForm = document.getElementById('select-spear-form')
const addressForm = document.getElementById('select-address-form')
const paymentForm = document.getElementById('select-payment-form')

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// Event listeners
goToSelectAddress.addEventListener('click', () => {
    // Tambah class active pada stepIndex[0] dan stepIndex[1]
    stepIndex[0].classList.add('active');
    stepIndex[1].classList.add('active');
    
    // Hapus class active dari spearForm dan tambahkan pada addressForm
    spearForm.classList.remove('active');
    addressForm.classList.add('active');
});

backToSelectSpear.addEventListener('click', () => {
    // Hanya stepIndex[0] yang punya class active
    stepIndex[0].classList.add('active');
    stepIndex[1].classList.remove('active');
    
    // Hanya spearForm yang punya class active
    spearForm.classList.add('active');
    addressForm.classList.remove('active');
});

function checkRadioSelection() {
    let isAnyRadioSelected = false;
    for (let radio of createOrderSpearCard) {
        if (document.getElementById(radio.htmlFor).checked) {
            isAnyRadioSelected = true;
            break;
        }
    }
    goToSelectAddress.disabled = !isAnyRadioSelected;
}
function checkRadioSelection1() {
    let isAnyRadioSelected = false;
    for (let radio of createOrderAddressCard) {
        if (document.getElementById(radio.htmlFor).checked) {
            isAnyRadioSelected = true;
            break;
        }
    }
    finishOrderButton.disabled = !isAnyRadioSelected;
}

// Set awal: tombol goToSelectAddress dalam keadaan disabled
goToSelectAddress.disabled = true;
finishOrderButton.disabled = true;

// Tambahkan event listener ke setiap input radio
for (let radio of createOrderSpearCard) {
    document.getElementById(radio.htmlFor).addEventListener('change', checkRadioSelection);
}
for (let radio of createOrderAddressCard) {
    document.getElementById(radio.htmlFor).addEventListener('change', checkRadioSelection1);
}