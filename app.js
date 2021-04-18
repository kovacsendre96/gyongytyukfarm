

let h2 = document.querySelectorAll('h1');
let logo = document.querySelector('.logo');
let h2Container = document.querySelector('.header__text');

setTimeout(function () {
    h2[0].style.opacity = "1";
}, 500);
setTimeout(function () {
    h2[1].style.opacity = "1";
}, 1000);

setTimeout(function () {
    h2[2].style.opacity = "1";
}, 1500);



setTimeout(function () {
    h2Container.style.transform = "translateX(0%)"
}, 2000);

setTimeout(function () {
    logo.style.transform = "translateX(0%)"
}, 2000);


window.addEventListener('scroll', () => {

    let screenPosition = window.innerHeight;




    let introduction = document.querySelectorAll('.introduction__block');
    for (let i = 0; i < introduction.length; i++) {
        let contentPosition = introduction[i].getBoundingClientRect().top;

        if (contentPosition < screenPosition) {
            introduction[i].classList = "introduction__block active";


        }

        else {
            introduction[i].classList.remove('active');

        }
    };




    let card = document.querySelectorAll('.product__card');
    for (let j = 0; j < card.length; j++) {
        let contentPosition = card[j].getBoundingClientRect().top;

        if (contentPosition < screenPosition) {
            setTimeout(function () {
                card[j].classList = "col-md-3 product__card active"
            }, 500);

        }
        else {
            card[j].classList.remove('active')
        }
    }





    function formAnim() {
        let form = document.querySelector('.form');
        let contentPosition = form.getBoundingClientRect().top;

        if (contentPosition < screenPosition) {
            setTimeout(function () {
                form.classList = "form active";
            }, 500);

        }
        else {
            form.classList.remove('active');
        }

    }

    function contactAnim() {
        let contact = document.querySelector('.contact__right');
        let contentPosition = contact.getBoundingClientRect().top;
        if (contentPosition < screenPosition) {
            setTimeout(function () {
                contact.classList = "col-md-6 flex-container-centerized-items contact__right active";
            }, 500);

        }
        else { contact.classList.remove('active') }
    }

    formAnim()
    contactAnim()

    function reward() {
        let rewardContainer = document.querySelectorAll('.reward');

        for (let k = 0; k <= rewardContainer.length; k++) {

            let contentPosition = rewardContainer[k].getBoundingClientRect().top;

            if (contentPosition < screenPosition) {
                setTimeout(function () {
                    rewardContainer[k].classList = "col-md-6 flex-container-centerized-items column-flex reward active";
                }, 300);

            }
            else { rewardContainer[k].classList.remove('active') }
        }
    }
    reward();


});




function navLink() {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.querySelector("nav").style.top = "0";
        } else {
            document.querySelector("nav").style.top = "-80px";
        }
        prevScrollpos = currentScrollPos;
    }

}
navLink()