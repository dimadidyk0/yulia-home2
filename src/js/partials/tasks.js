function addBottomBlock() {

    var plusTaskButton = document.querySelectorAll('.cube-tasks__plus--bottom');
    for (var i = 0; i < plusTaskButton.length; i++) {
        plusTaskButton[i].onclick = function() {
            var thisBlock = this.parentNode.parentNode.parentNode.parentNode;
            var cloneTask = thisBlock.querySelector('.cube-tasks__block-bottom-line').cloneNode(false);
            var item = thisBlock.querySelector(".cube-tasks__task-container").cloneNode(true);
            item.querySelector('input').value = "";
            item.querySelector('textarea').value = "";
            cloneTask.appendChild(item);
            cloneTask.appendChild(thisBlock.querySelector('.cube-tasks__subtask-container').cloneNode(false));
            thisBlock.querySelector('.cube-tasks__plus--bottom').addEventListener('click', function a() {});
            cloneTask.querySelector('.cube-tasks__plus--right').style.display = "block";
            cloneTask.classList.add('cube-tasks__block-bottom-line--animated');
            document.querySelector('.cube-tasks__box').insertBefore(cloneTask, document.querySelector('.cube-tasks__button'));
            plusTaskButton = document.querySelectorAll('.cube-tasks__plus--bottom');
            addBottomBlock();
            document.querySelector('.cube-tasks__box').style.height = parseInt(getComputedStyle(document.querySelector('.cube-tasks__box')).height) + 746 + "px";

            document.querySelector('.cube-reg-content__risks-value').innerHTML -= 1;
            // меняем значение рисков
            changeRisksColor();
            // change color of risks-block
        }

    }
    var plusSubTaskButton = document.querySelectorAll('.cube-tasks__plus--right');
    for (var i = 0; i < plusSubTaskButton.length; i++) {
        var subTasks = plusSubTaskButton[i].parentNode.parentNode.parentNode.querySelectorAll('.cube-tasks__subtask');
        if (subTasks.length >= 2) {
            plusSubTaskButton[i].style.display = "none";
        } else {
            plusSubTaskButton[i].onclick = function() {
                var thisBlock = this.parentNode.parentNode.parentNode;
                var cloneSubtask = document.querySelector('.cube-tasks__subtask').cloneNode(true);
                cloneSubtask.querySelector('input').value = "";
                cloneSubtask.querySelector('textarea').value = "";
                cloneSubtask.classList.add('cube-tasks__subtask--animated');
                thisBlock.querySelector('.cube-tasks__subtask-container').appendChild(cloneSubtask);
                addBottomBlock();

                document.querySelector('.cube-reg-content__risks-value').innerHTML -= 1;
                // меняем значение рисков
                changeRisksColor();
                // change color of risks-block
            }
        }
    }
}

addBottomBlock();