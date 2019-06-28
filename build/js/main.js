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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcbiAgICBpbml0UG9wVXBzKCk7XG59KTtcblxuZnVuY3Rpb24gaW5pdFBvcFVwcygpIHtcbiAgICBjb25zdCBsZWF2ZU1lc3NhZ2VCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVhdmVNZXNzYWdlQnRuJyk7XG4gICAgaWYgKGxlYXZlTWVzc2FnZUJ0bikge1xuICAgICAgICBsZWF2ZU1lc3NhZ2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuUG9wVXAuYmluZChudWxsLCAnY29udGFjdFBvcFVwJykpO1xuICAgIH1cblxuICAgIGNvbnN0IHBvcFVwQ29sbGVjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wb3AtdXAnKSB8fCBbXTtcbiAgICBwb3BVcENvbGxlY3Rpb24uZm9yRWFjaChwb3BVcCA9PiB7XG4gICAgICAgIGNvbnN0IGlkID0gcG9wVXAgJiYgcG9wVXAuaWQ7XG5cbiAgICAgICAgY29uc3QgaGFuZGxlQ2xvc2VQb3BVcCA9IGNsb3NlUG9wVXAuYmluZChudWxsLCBpZClcbiAgICAgICAgY29uc3QgY2xvc2VCdG4gPSBwb3BVcC5xdWVyeVNlbGVjdG9yKCcucG9wLXVwX19jbG9zZScpO1xuICAgICAgICBjb25zdCBsYXlvdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wLXVwX19sYXlvdXQnKTtcblxuICAgICAgICBbY2xvc2VCdG4sIGxheW91dF0uZm9yRWFjaChcbiAgICAgICAgICAgIGVsID0+IGVsXG4gICAgICAgICAgICAgICAgPyBlbC5vbmNsaWNrID0gaGFuZGxlQ2xvc2VQb3BVcFxuICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICApXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gb3BlblBvcFVwKGlkKSB7XG4gICAgY29uc3QgcG9wVXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgaWYgKHBvcFVwKSB7XG4gICAgICAgIHBvcFVwLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjbG9zZVBvcFVwKGlkKSB7XG4gICAgY29uc3QgcG9wVXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgaWYgKHBvcFVwKSB7XG4gICAgICAgIHBvcFVwLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnYXV0byc7XG4gICAgfVxufSJdLCJmaWxlIjoibWFpbi5qcyJ9
