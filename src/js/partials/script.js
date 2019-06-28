document.addEventListener('DOMContentLoaded', function() {
    initPopUps();
});

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