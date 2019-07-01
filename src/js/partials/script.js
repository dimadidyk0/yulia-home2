document.addEventListener('DOMContentLoaded', function() {
    initMainSides();
    initPopUps();
});

function initMainSides() {
    const sides = document.querySelectorAll('.main__side');
    if (sides) {
        sides.forEach(side => {
            side.onmouseover = function() {
                const active = document.querySelector('.main__side.main--active');
                if (active) {
                    active.classList.remove('main--active');
                }

                side.classList.add('main--active');
            }
        })
    }
}

let timeout;

function initPopUps() {
    const leaveMessageBtn = document.getElementById('leaveMessageBtn');
    if (leaveMessageBtn) {
        leaveMessageBtn.addEventListener('click', openPopUp.bind(null, 'contactPopUp'));
    }

    const popUpCollection = document.querySelectorAll('.pop-up') || [];
    popUpCollection.forEach(popUp => {
        const id = popUp && popUp.id;

        const handleClosePopUp = closePopUp.bind(null, id)
        const closeBtn = popUp.querySelector('.pop-up__close');
        const layout = document.querySelector('.pop-up__layout');

        [closeBtn, layout].forEach(
            el => el
                ? el.onclick = handleClosePopUp
                : null
        )
    })
}

function openPopUp(id) {
    const popUp = document.getElementById(id);
    if (popUp) {
        popUp.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closePopUp(id) {
    const popUp = document.getElementById(id);
    if (popUp) {
        popUp.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const houseElement = getHouseElement();
    if (houseElement) {
        initHouseSlider();
    }

    // sendMail();
});

function getHouseElement() {
    return document.getElementById('house');
}

function initHouseSlider() {
    reloadButtonCounter();

    const houseElement = getHouseElement();
    const button = houseElement.querySelector('button');
    
    button.onclick = function() {
        setNextSlide();
        reloadButtonCounter();
    };
}

function setNextSlide() {
    const slidesCount = getSlidesCount();
    const currentId = getCurrentId();
    const nextSlideId = (parseInt(currentId) + 1) % (slidesCount + 1) || 1;

    setSlide(nextSlideId);
}

function setSlide(id) {
    changeActiveElem('.house__img', id);
    changeActiveElem('.house__info', id);
    document.querySelector('.house__current-index').innerHTML = id;
}

function getCurrentId() {
    const activeSlide = document.querySelector('.house__img.active');
    const currentId = activeSlide && activeSlide.getAttribute('data-id');

    return currentId;
}

function getSlidesCount() {
    const collection = document.querySelectorAll('.house__img');
    return collection && collection.length || 0;
}

function changeActiveElem(selector, id) {
    const activeElem = document.querySelector(`${selector}.active`);
    if (activeElem) {
        activeElem.classList.remove('active');
    }

    const requiredElem = document.querySelector(`${selector}[data-id="${id}"]`);

    if (requiredElem) {
        requiredElem.classList.add('active');
    }
}

function reloadButtonCounter() {
    clearTimeout(timeout);

    const counter = document.querySelector('.animation-wrapper');
    counter.classList.remove('active');
    setTimeout(() => {
        counter.classList.add('active');

        timeout = setTimeout(function timeoutFunc() {
            setNextSlide();
            reloadButtonCounter();
        }, 6000)
    }, 100);
}

function sendMail() {
    var link = "mailto:dimadidyk0@gmail.com"
             + "?cc=myCCaddress@example.com"
             + "&subject=" + escape("This is my subject")
             + "&body=" + 'asdas'
    ;

    window.location.href = link;
}