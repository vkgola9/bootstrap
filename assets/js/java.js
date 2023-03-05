window.addEventListener('scroll', function () {

    let navi = document.querySelector('nav');
    let top = this.document.querySelector('.top');
    if (window.pageYOffset >= 110) {
        navi.classList.add('sticky');
        top.classList.add('stick');
    } else {
        navi.classList.remove('sticky');
        top.classList.remove('stick');
        document.getElementById('toggle1').classList.remove('search1');
        document.getElementById('toggle').classList.remove('search');
    }
});

function myFunction() {
    document.getElementById("toggle").classList.toggle("search");
}
function myFunction1() {
    document.getElementById("toggle1").classList.toggle("search1");
}
// Example starter JavaScript for disabling form submissions if there are invalid fields                                            
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()
const spinner = document.querySelector('.spin');
window.addEventListener('load', function () {
    spinner.classList.add('spin-not');
});
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))