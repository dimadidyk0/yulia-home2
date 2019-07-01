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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcbiAgICBpbml0TWFpblNpZGVzKCk7XG4gICAgaW5pdFBvcFVwcygpO1xufSk7XG5cbmZ1bmN0aW9uIGluaXRNYWluU2lkZXMoKSB7XG4gICAgY29uc3Qgc2lkZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWFpbl9fc2lkZScpO1xuICAgIGlmIChzaWRlcykge1xuICAgICAgICBzaWRlcy5mb3JFYWNoKHNpZGUgPT4ge1xuICAgICAgICAgICAgc2lkZS5vbm1vdXNlb3ZlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFjdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluX19zaWRlLm1haW4tLWFjdGl2ZScpO1xuICAgICAgICAgICAgICAgIGlmIChhY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlLmNsYXNzTGlzdC5yZW1vdmUoJ21haW4tLWFjdGl2ZScpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNpZGUuY2xhc3NMaXN0LmFkZCgnbWFpbi0tYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5sZXQgdGltZW91dDtcblxuZnVuY3Rpb24gaW5pdFBvcFVwcygpIHtcbiAgICBjb25zdCBsZWF2ZU1lc3NhZ2VCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVhdmVNZXNzYWdlQnRuJyk7XG4gICAgaWYgKGxlYXZlTWVzc2FnZUJ0bikge1xuICAgICAgICBsZWF2ZU1lc3NhZ2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuUG9wVXAuYmluZChudWxsLCAnY29udGFjdFBvcFVwJykpO1xuICAgIH1cblxuICAgIGNvbnN0IHBvcFVwQ29sbGVjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wb3AtdXAnKSB8fCBbXTtcbiAgICBwb3BVcENvbGxlY3Rpb24uZm9yRWFjaChwb3BVcCA9PiB7XG4gICAgICAgIGNvbnN0IGlkID0gcG9wVXAgJiYgcG9wVXAuaWQ7XG5cbiAgICAgICAgY29uc3QgaGFuZGxlQ2xvc2VQb3BVcCA9IGNsb3NlUG9wVXAuYmluZChudWxsLCBpZClcbiAgICAgICAgY29uc3QgY2xvc2VCdG4gPSBwb3BVcC5xdWVyeVNlbGVjdG9yKCcucG9wLXVwX19jbG9zZScpO1xuICAgICAgICBjb25zdCBsYXlvdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wLXVwX19sYXlvdXQnKTtcblxuICAgICAgICBbY2xvc2VCdG4sIGxheW91dF0uZm9yRWFjaChcbiAgICAgICAgICAgIGVsID0+IGVsXG4gICAgICAgICAgICAgICAgPyBlbC5vbmNsaWNrID0gaGFuZGxlQ2xvc2VQb3BVcFxuICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICApXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gb3BlblBvcFVwKGlkKSB7XG4gICAgY29uc3QgcG9wVXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgaWYgKHBvcFVwKSB7XG4gICAgICAgIHBvcFVwLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjbG9zZVBvcFVwKGlkKSB7XG4gICAgY29uc3QgcG9wVXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgaWYgKHBvcFVwKSB7XG4gICAgICAgIHBvcFVwLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnYXV0byc7XG4gICAgfVxufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGNvbnN0IGhvdXNlRWxlbWVudCA9IGdldEhvdXNlRWxlbWVudCgpO1xuICAgIGlmIChob3VzZUVsZW1lbnQpIHtcbiAgICAgICAgaW5pdEhvdXNlU2xpZGVyKCk7XG4gICAgfVxuXG4gICAgLy8gc2VuZE1haWwoKTtcbn0pO1xuXG5mdW5jdGlvbiBnZXRIb3VzZUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob3VzZScpO1xufVxuXG5mdW5jdGlvbiBpbml0SG91c2VTbGlkZXIoKSB7XG4gICAgcmVsb2FkQnV0dG9uQ291bnRlcigpO1xuXG4gICAgY29uc3QgaG91c2VFbGVtZW50ID0gZ2V0SG91c2VFbGVtZW50KCk7XG4gICAgY29uc3QgYnV0dG9uID0gaG91c2VFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpO1xuICAgIFxuICAgIGJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHNldE5leHRTbGlkZSgpO1xuICAgICAgICByZWxvYWRCdXR0b25Db3VudGVyKCk7XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gc2V0TmV4dFNsaWRlKCkge1xuICAgIGNvbnN0IHNsaWRlc0NvdW50ID0gZ2V0U2xpZGVzQ291bnQoKTtcbiAgICBjb25zdCBjdXJyZW50SWQgPSBnZXRDdXJyZW50SWQoKTtcbiAgICBjb25zdCBuZXh0U2xpZGVJZCA9IChwYXJzZUludChjdXJyZW50SWQpICsgMSkgJSAoc2xpZGVzQ291bnQgKyAxKSB8fCAxO1xuXG4gICAgc2V0U2xpZGUobmV4dFNsaWRlSWQpO1xufVxuXG5mdW5jdGlvbiBzZXRTbGlkZShpZCkge1xuICAgIGNoYW5nZUFjdGl2ZUVsZW0oJy5ob3VzZV9faW1nJywgaWQpO1xuICAgIGNoYW5nZUFjdGl2ZUVsZW0oJy5ob3VzZV9faW5mbycsIGlkKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG91c2VfX2N1cnJlbnQtaW5kZXgnKS5pbm5lckhUTUwgPSBpZDtcbn1cblxuZnVuY3Rpb24gZ2V0Q3VycmVudElkKCkge1xuICAgIGNvbnN0IGFjdGl2ZVNsaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvdXNlX19pbWcuYWN0aXZlJyk7XG4gICAgY29uc3QgY3VycmVudElkID0gYWN0aXZlU2xpZGUgJiYgYWN0aXZlU2xpZGUuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG5cbiAgICByZXR1cm4gY3VycmVudElkO1xufVxuXG5mdW5jdGlvbiBnZXRTbGlkZXNDb3VudCgpIHtcbiAgICBjb25zdCBjb2xsZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhvdXNlX19pbWcnKTtcbiAgICByZXR1cm4gY29sbGVjdGlvbiAmJiBjb2xsZWN0aW9uLmxlbmd0aCB8fCAwO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VBY3RpdmVFbGVtKHNlbGVjdG9yLCBpZCkge1xuICAgIGNvbnN0IGFjdGl2ZUVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAke3NlbGVjdG9yfS5hY3RpdmVgKTtcbiAgICBpZiAoYWN0aXZlRWxlbSkge1xuICAgICAgICBhY3RpdmVFbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlcXVpcmVkRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCR7c2VsZWN0b3J9W2RhdGEtaWQ9XCIke2lkfVwiXWApO1xuXG4gICAgaWYgKHJlcXVpcmVkRWxlbSkge1xuICAgICAgICByZXF1aXJlZEVsZW0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZWxvYWRCdXR0b25Db3VudGVyKCkge1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblxuICAgIGNvbnN0IGNvdW50ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYW5pbWF0aW9uLXdyYXBwZXInKTtcbiAgICBjb3VudGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb3VudGVyLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuXG4gICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uIHRpbWVvdXRGdW5jKCkge1xuICAgICAgICAgICAgc2V0TmV4dFNsaWRlKCk7XG4gICAgICAgICAgICByZWxvYWRCdXR0b25Db3VudGVyKCk7XG4gICAgICAgIH0sIDYwMDApXG4gICAgfSwgMTAwKTtcbn1cblxuZnVuY3Rpb24gc2VuZE1haWwoKSB7XG4gICAgdmFyIGxpbmsgPSBcIm1haWx0bzpkaW1hZGlkeWswQGdtYWlsLmNvbVwiXG4gICAgICAgICAgICAgKyBcIj9jYz1teUNDYWRkcmVzc0BleGFtcGxlLmNvbVwiXG4gICAgICAgICAgICAgKyBcIiZzdWJqZWN0PVwiICsgZXNjYXBlKFwiVGhpcyBpcyBteSBzdWJqZWN0XCIpXG4gICAgICAgICAgICAgKyBcIiZib2R5PVwiICsgJ2FzZGFzJ1xuICAgIDtcblxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gbGluaztcbn0iXSwiZmlsZSI6Im1haW4uanMifQ==
