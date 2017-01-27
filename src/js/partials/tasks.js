var plusTaskButton = document.querySelectorAll('.cube-tasks__plus--bottom');
for (var i = 0; i < plusTaskButton.length; i++) {
    plusTaskButton[i].addEventListener('click', function() {
        var cloneTask = document.querySelector('.cube-tasks__block-bottom-line').cloneNode(true);
        document.querySelector('.cube-tasks__box').insertBefore(cloneTask, document.querySelector('.cube-tasks__button'));
        var plusTaskButton
    });
    plusTaskButton = document.querySelectorAll('.cube-tasks__plus--bottom');
}