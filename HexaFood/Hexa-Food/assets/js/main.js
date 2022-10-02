document.addEventListener('DOMContentLoaded', function () {
    var bars = document.querySelector('.hamburger-menu');
    var headerMenu = document.querySelector('.header-menu')
    var cart = document.querySelector(".single-cart");
    var dropDownCart = document.querySelector('.drop-down-cart')

    bars.onclick = () => {
        headerMenu.classList.toggle('d-block');
    }



    cart.onclick = () => {
        dropDownCart.classList.toggle('d-block')

    }


    window.onscroll = () => {
        headerMenu.classList.remove('d-block');
        dropDownCart.classList.remove('d-block');

        var header = document.querySelector('.topbar')
        var x = window.scrollY
        if (x <= 50) {
            header.classList.remove("fixed-top")
        } else {
            header.classList.add("fixed-top")
        }
    }
})