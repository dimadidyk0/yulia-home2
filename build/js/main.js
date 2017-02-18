var cubeHelpLinkText = document.querySelector('.cube-reg-content__help-question');
var cubeHelpLinkImg = document.querySelector('.cube-reg-content__help-img');
var cubeHelpContact = document.querySelector('.cube-reg-content__help-contact');
cubeHelpLinkText.onclick = function() {
    if (cubeHelpContact.style.display == "block") {
        cubeHelpContact.style.display = "none";
    } else {
        cubeHelpContact.style.display = "block";
    }
}
cubeHelpLinkImg.onclick = function() {
        if (cubeHelpContact.style.display == "block") {
            cubeHelpContact.style.display = "none";
        } else {
            cubeHelpContact.style.display = "block";
        }
    }
    // разворачивание и сворачивание кнопки "Нужна помощь?"



var risksBlock = document.querySelector('.cube-reg-content__risks');
// risks-block
var cubeRisksColorArray = chroma.scale(['#199B07', '#FF4A00', '#E80008']).colors(101);
// made array of colors
var num = document.querySelector('.cube-reg-content__risks-value').innerHTML;
// variable for color determiation
var cubeRisksColor = cubeRisksColorArray[num];
// variable of risks-block's color
function changeRisksColor() {
    var risksBlock = document.querySelector('.cube-reg-content__risks');
    var cubeRisksColorArray = chroma.scale(['#199B07', '#FF4A00', '#E80008']).colors(101);
    var num = document.querySelector('.cube-reg-content__risks-value').innerHTML;
    var cubeRisksColor = cubeRisksColorArray[num];
    // rewrited data
    risksBlock.style.color = cubeRisksColor;
    risksBlock.style.borderColor = cubeRisksColor;
    // define risks-block's color
}
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
            taskTotalTime();
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
                taskTotalTime();
            }
        }
    }
}

addBottomBlock();



function taskTotalTime() {

    var taskArray = document.querySelectorAll('.cube-tasks__block-bottom-line');
    for (var i = 0; i < taskArray.length; i++) {
        var totalTime = "0ч";
        var totalTimeSpan = taskArray[i].querySelector('.cube-tasks__total-time-value');
        var timeValueArray = taskArray[i].querySelectorAll('.cube-tasks__select-time');
        for (var y = 0; y < timeValueArray.length; y++) {
            var executionTime = timeValueArray[y].value;
            var totalTime = (parseInt(totalTime) + parseInt(executionTime)) + " ч";
            timeValueArray[y].addEventListener('change', function() {
                taskTotalTime();
            });
        }
        totalTimeSpan.innerHTML = totalTime;
    }
}
taskTotalTime();
// при нажатии на плюс добавляется блок требований
var requirementPlusButton = document.querySelectorAll('.cube-requirements__plus-img');
for (var i = 0; i < requirementPlusButton.length; i++) {
    requirementPlusButton[i].style.backgroundColor = getComputedStyle(requirementPlusButton[i].parentNode.parentNode.querySelector('.cube-requirements__item-label')).backgroundColor;
    // задаем цвет каждой кнопке в зависимости от цвета левого блока
    requirementPlusButton[i].addEventListener('click', function() {

        var item = this.parentNode.querySelector('.cube-requirements__task-box').cloneNode(true);
        item.querySelector('input').value = "";
        item.querySelector('textarea').value = "";
        // клонируется блок с очищенными полями
        item.classList.add("cube-requirements__task-box--animate");
        this.parentNode.insertBefore(item, this.parentNode.querySelector('.cube-requirements__plus-img'));
        // вставлен блок

        var leftLabel = this.parentNode.parentNode.querySelector('.cube-requirements__item-label');
        var blockHeight = this.parentNode.parentNode;
        blockHeight = getComputedStyle(blockHeight);
        leftLabel.style.height = blockHeight.height;
        this.parentNode.parentNode.querySelector('.cube-requirements__item-span').style.width = (parseInt(blockHeight.height) + 280) + "px";
        this.parentNode.parentNode.querySelector('.cube-requirements__item-span').style.height = (parseInt(blockHeight.height) + 280) + "px";
        this.parentNode.parentNode.querySelector('.cube-requirements__item-label').style.height = (parseInt(blockHeight.height) + 280) + "px";
        this.parentNode.parentNode.querySelector('.cube-requirements__item-content').style.height = (parseInt(blockHeight.height) + 280) + "px";
        // установка высоты левого блока с названием 
        // var val = parseInt(getComputedStyle(item).height) + 13;
        // console.log(val);
        // window.scrollBy(0, val);
        // скроллится на высоту добавленного элемента
        document.querySelector('.cube-reg-content__risks-value').innerHTML -= 1;
        // меняем значение рисков
        changeRisksColor();
        // change color of risks-block
    });
}
if (document.querySelector('.cube-new-project form')) {
    this.onchange = newprojectCalculateRisks;
}

var newprojectRisksValue = document.querySelector(' .cube-reg-content__risks-value').innerHTML;

function newprojectCalculateRisks() {

    // get risks value
    var arrayOfValues = document.querySelectorAll('.cube-new-project__box option:checked');
    // find all checked select-items
    if (arrayOfValues.length == 1) {
        var s = parseInt(arrayOfValues[0].getAttribute('name'));
        var b = newprojectRisksValue - s;
    } else if (arrayOfValues.length == 2) {
        var s = parseInt(arrayOfValues[0].getAttribute('name'));
        var f = parseInt(arrayOfValues[1].getAttribute('name'));
        var b = newprojectRisksValue - s - f;
    }
    // calculate difference
    document.querySelector('.cube-reg-content__risks-value').innerHTML = b;
    // set risks value 
    changeRisksColor();
    // change color of risks-block
};
if (document.querySelector('.cube-milestones form')) {
    this.onchange = milestonesCalculateRisks;
}
var milestonesRisksValue = parseInt(document.querySelector('.cube-reg-content__risks-value').innerHTML);

function milestonesCalculateRisks() {

    // get risks value
    var milestonesFormBlock = document.querySelector('.cube-milestones__form-block');
    var milestonesListItem = document.querySelectorAll('.cube-milestones__item');
    for (var i = 0; i < milestonesListItem.length; i++) {
        var input = milestonesListItem[i].querySelector('.cube-milestones__input');
        var date = milestonesListItem[i].querySelector('.cube-milestones__date-input');
        if (input) {
            if (input.value != "" && date.value != "") {
                date.setAttribute('name', '5');
            } else {
                date.setAttribute('name', '0');
            }
        } else if (date.value != "") {
            date.setAttribute('name', '5');
        } else {
            date.setAttribute('name', '0');
        }
    }
    // set values for form eleents
    var dateArray = milestonesFormBlock.querySelectorAll('.cube-milestones__date-input');
    var a = parseInt(dateArray[0].getAttribute('name'));
    var b = parseInt(dateArray[1].getAttribute('name'));
    var c = parseInt(dateArray[2].getAttribute('name'));
    var d = milestonesRisksValue - a - b - c;
    document.querySelector('.cube-reg-content__risks-value').innerHTML = d;
    // set risks value 
    changeRisksColor();
    // change color of risks-block
}
//
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBjdWJlSGVscExpbmtUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1YmUtcmVnLWNvbnRlbnRfX2hlbHAtcXVlc3Rpb24nKTtcbnZhciBjdWJlSGVscExpbmtJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3ViZS1yZWctY29udGVudF9faGVscC1pbWcnKTtcbnZhciBjdWJlSGVscENvbnRhY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3ViZS1yZWctY29udGVudF9faGVscC1jb250YWN0Jyk7XG5jdWJlSGVscExpbmtUZXh0Lm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoY3ViZUhlbHBDb250YWN0LnN0eWxlLmRpc3BsYXkgPT0gXCJibG9ja1wiKSB7XG4gICAgICAgIGN1YmVIZWxwQ29udGFjdC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY3ViZUhlbHBDb250YWN0LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgfVxufVxuY3ViZUhlbHBMaW5rSW1nLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKGN1YmVIZWxwQ29udGFjdC5zdHlsZS5kaXNwbGF5ID09IFwiYmxvY2tcIikge1xuICAgICAgICAgICAgY3ViZUhlbHBDb250YWN0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGN1YmVIZWxwQ29udGFjdC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vINGA0LDQt9Cy0L7RgNCw0YfQuNCy0LDQvdC40LUg0Lgg0YHQstC+0YDQsNGH0LjQstCw0L3QuNC1INC60L3QvtC/0LrQuCBcItCd0YPQttC90LAg0L/QvtC80L7RidGMP1wiXG5cblxuXG52YXIgcmlza3NCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdWJlLXJlZy1jb250ZW50X19yaXNrcycpO1xuLy8gcmlza3MtYmxvY2tcbnZhciBjdWJlUmlza3NDb2xvckFycmF5ID0gY2hyb21hLnNjYWxlKFsnIzE5OUIwNycsICcjRkY0QTAwJywgJyNFODAwMDgnXSkuY29sb3JzKDEwMSk7XG4vLyBtYWRlIGFycmF5IG9mIGNvbG9yc1xudmFyIG51bSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdWJlLXJlZy1jb250ZW50X19yaXNrcy12YWx1ZScpLmlubmVySFRNTDtcbi8vIHZhcmlhYmxlIGZvciBjb2xvciBkZXRlcm1pYXRpb25cbnZhciBjdWJlUmlza3NDb2xvciA9IGN1YmVSaXNrc0NvbG9yQXJyYXlbbnVtXTtcbi8vIHZhcmlhYmxlIG9mIHJpc2tzLWJsb2NrJ3MgY29sb3JcbmZ1bmN0aW9uIGNoYW5nZVJpc2tzQ29sb3IoKSB7XG4gICAgdmFyIHJpc2tzQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3ViZS1yZWctY29udGVudF9fcmlza3MnKTtcbiAgICB2YXIgY3ViZVJpc2tzQ29sb3JBcnJheSA9IGNocm9tYS5zY2FsZShbJyMxOTlCMDcnLCAnI0ZGNEEwMCcsICcjRTgwMDA4J10pLmNvbG9ycygxMDEpO1xuICAgIHZhciBudW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3ViZS1yZWctY29udGVudF9fcmlza3MtdmFsdWUnKS5pbm5lckhUTUw7XG4gICAgdmFyIGN1YmVSaXNrc0NvbG9yID0gY3ViZVJpc2tzQ29sb3JBcnJheVtudW1dO1xuICAgIC8vIHJld3JpdGVkIGRhdGFcbiAgICByaXNrc0Jsb2NrLnN0eWxlLmNvbG9yID0gY3ViZVJpc2tzQ29sb3I7XG4gICAgcmlza3NCbG9jay5zdHlsZS5ib3JkZXJDb2xvciA9IGN1YmVSaXNrc0NvbG9yO1xuICAgIC8vIGRlZmluZSByaXNrcy1ibG9jaydzIGNvbG9yXG59XG5mdW5jdGlvbiBhZGRCb3R0b21CbG9jaygpIHtcblxuICAgIHZhciBwbHVzVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jdWJlLXRhc2tzX19wbHVzLS1ib3R0b20nKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBsdXNUYXNrQnV0dG9uLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHBsdXNUYXNrQnV0dG9uW2ldLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciB0aGlzQmxvY2sgPSB0aGlzLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICAgICAgICB2YXIgY2xvbmVUYXNrID0gdGhpc0Jsb2NrLnF1ZXJ5U2VsZWN0b3IoJy5jdWJlLXRhc2tzX19ibG9jay1ib3R0b20tbGluZScpLmNsb25lTm9kZShmYWxzZSk7XG4gICAgICAgICAgICB2YXIgaXRlbSA9IHRoaXNCbG9jay5xdWVyeVNlbGVjdG9yKFwiLmN1YmUtdGFza3NfX3Rhc2stY29udGFpbmVyXCIpLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgICAgIGl0ZW0ucXVlcnlTZWxlY3RvcignaW5wdXQnKS52YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgICBpdGVtLnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhJykudmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgY2xvbmVUYXNrLmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgICAgICAgICAgY2xvbmVUYXNrLmFwcGVuZENoaWxkKHRoaXNCbG9jay5xdWVyeVNlbGVjdG9yKCcuY3ViZS10YXNrc19fc3VidGFzay1jb250YWluZXInKS5jbG9uZU5vZGUoZmFsc2UpKTtcbiAgICAgICAgICAgIHRoaXNCbG9jay5xdWVyeVNlbGVjdG9yKCcuY3ViZS10YXNrc19fcGx1cy0tYm90dG9tJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiBhKCkge30pO1xuICAgICAgICAgICAgY2xvbmVUYXNrLnF1ZXJ5U2VsZWN0b3IoJy5jdWJlLXRhc2tzX19wbHVzLS1yaWdodCcpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICBjbG9uZVRhc2suY2xhc3NMaXN0LmFkZCgnY3ViZS10YXNrc19fYmxvY2stYm90dG9tLWxpbmUtLWFuaW1hdGVkJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3ViZS10YXNrc19fYm94JykuaW5zZXJ0QmVmb3JlKGNsb25lVGFzaywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1YmUtdGFza3NfX2J1dHRvbicpKTtcbiAgICAgICAgICAgIHBsdXNUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmN1YmUtdGFza3NfX3BsdXMtLWJvdHRvbScpO1xuICAgICAgICAgICAgYWRkQm90dG9tQmxvY2soKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdWJlLXRhc2tzX19ib3gnKS5zdHlsZS5oZWlnaHQgPSBwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdWJlLXRhc2tzX19ib3gnKSkuaGVpZ2h0KSArIDc0NiArIFwicHhcIjtcblxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1YmUtcmVnLWNvbnRlbnRfX3Jpc2tzLXZhbHVlJykuaW5uZXJIVE1MIC09IDE7XG4gICAgICAgICAgICAvLyDQvNC10L3Rj9C10Lwg0LfQvdCw0YfQtdC90LjQtSDRgNC40YHQutC+0LJcbiAgICAgICAgICAgIGNoYW5nZVJpc2tzQ29sb3IoKTtcbiAgICAgICAgICAgIC8vIGNoYW5nZSBjb2xvciBvZiByaXNrcy1ibG9ja1xuICAgICAgICAgICAgdGFza1RvdGFsVGltZSgpO1xuICAgICAgICB9XG5cbiAgICB9XG4gICAgdmFyIHBsdXNTdWJUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmN1YmUtdGFza3NfX3BsdXMtLXJpZ2h0Jyk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwbHVzU3ViVGFza0J1dHRvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgc3ViVGFza3MgPSBwbHVzU3ViVGFza0J1dHRvbltpXS5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yQWxsKCcuY3ViZS10YXNrc19fc3VidGFzaycpO1xuICAgICAgICBpZiAoc3ViVGFza3MubGVuZ3RoID49IDIpIHtcbiAgICAgICAgICAgIHBsdXNTdWJUYXNrQnV0dG9uW2ldLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBsdXNTdWJUYXNrQnV0dG9uW2ldLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGhpc0Jsb2NrID0gdGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgICB2YXIgY2xvbmVTdWJ0YXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1YmUtdGFza3NfX3N1YnRhc2snKS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgY2xvbmVTdWJ0YXNrLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykudmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgICAgIGNsb25lU3VidGFzay5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYScpLnZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgICAgICBjbG9uZVN1YnRhc2suY2xhc3NMaXN0LmFkZCgnY3ViZS10YXNrc19fc3VidGFzay0tYW5pbWF0ZWQnKTtcbiAgICAgICAgICAgICAgICB0aGlzQmxvY2sucXVlcnlTZWxlY3RvcignLmN1YmUtdGFza3NfX3N1YnRhc2stY29udGFpbmVyJykuYXBwZW5kQ2hpbGQoY2xvbmVTdWJ0YXNrKTtcbiAgICAgICAgICAgICAgICBhZGRCb3R0b21CbG9jaygpO1xuXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1YmUtcmVnLWNvbnRlbnRfX3Jpc2tzLXZhbHVlJykuaW5uZXJIVE1MIC09IDE7XG4gICAgICAgICAgICAgICAgLy8g0LzQtdC90Y/QtdC8INC30L3QsNGH0LXQvdC40LUg0YDQuNGB0LrQvtCyXG4gICAgICAgICAgICAgICAgY2hhbmdlUmlza3NDb2xvcigpO1xuICAgICAgICAgICAgICAgIC8vIGNoYW5nZSBjb2xvciBvZiByaXNrcy1ibG9ja1xuICAgICAgICAgICAgICAgIHRhc2tUb3RhbFRpbWUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuYWRkQm90dG9tQmxvY2soKTtcblxuXG5cbmZ1bmN0aW9uIHRhc2tUb3RhbFRpbWUoKSB7XG5cbiAgICB2YXIgdGFza0FycmF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmN1YmUtdGFza3NfX2Jsb2NrLWJvdHRvbS1saW5lJyk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0YXNrQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHRvdGFsVGltZSA9IFwiMNGHXCI7XG4gICAgICAgIHZhciB0b3RhbFRpbWVTcGFuID0gdGFza0FycmF5W2ldLnF1ZXJ5U2VsZWN0b3IoJy5jdWJlLXRhc2tzX190b3RhbC10aW1lLXZhbHVlJyk7XG4gICAgICAgIHZhciB0aW1lVmFsdWVBcnJheSA9IHRhc2tBcnJheVtpXS5xdWVyeVNlbGVjdG9yQWxsKCcuY3ViZS10YXNrc19fc2VsZWN0LXRpbWUnKTtcbiAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCB0aW1lVmFsdWVBcnJheS5sZW5ndGg7IHkrKykge1xuICAgICAgICAgICAgdmFyIGV4ZWN1dGlvblRpbWUgPSB0aW1lVmFsdWVBcnJheVt5XS52YWx1ZTtcbiAgICAgICAgICAgIHZhciB0b3RhbFRpbWUgPSAocGFyc2VJbnQodG90YWxUaW1lKSArIHBhcnNlSW50KGV4ZWN1dGlvblRpbWUpKSArIFwiINGHXCI7XG4gICAgICAgICAgICB0aW1lVmFsdWVBcnJheVt5XS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB0YXNrVG90YWxUaW1lKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0b3RhbFRpbWVTcGFuLmlubmVySFRNTCA9IHRvdGFsVGltZTtcbiAgICB9XG59XG50YXNrVG90YWxUaW1lKCk7XG4vLyDQv9GA0Lgg0L3QsNC20LDRgtC40Lgg0L3QsCDQv9C70Y7RgSDQtNC+0LHQsNCy0LvRj9C10YLRgdGPINCx0LvQvtC6INGC0YDQtdCx0L7QstCw0L3QuNC5XG52YXIgcmVxdWlyZW1lbnRQbHVzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmN1YmUtcmVxdWlyZW1lbnRzX19wbHVzLWltZycpO1xuZm9yICh2YXIgaSA9IDA7IGkgPCByZXF1aXJlbWVudFBsdXNCdXR0b24ubGVuZ3RoOyBpKyspIHtcbiAgICByZXF1aXJlbWVudFBsdXNCdXR0b25baV0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gZ2V0Q29tcHV0ZWRTdHlsZShyZXF1aXJlbWVudFBsdXNCdXR0b25baV0ucGFyZW50Tm9kZS5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJy5jdWJlLXJlcXVpcmVtZW50c19faXRlbS1sYWJlbCcpKS5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgLy8g0LfQsNC00LDQtdC8INGG0LLQtdGCINC60LDQttC00L7QuSDQutC90L7Qv9C60LUg0LIg0LfQsNCy0LjRgdC40LzQvtGB0YLQuCDQvtGCINGG0LLQtdGC0LAg0LvQtdCy0L7Qs9C+INCx0LvQvtC60LBcbiAgICByZXF1aXJlbWVudFBsdXNCdXR0b25baV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgaXRlbSA9IHRoaXMucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCcuY3ViZS1yZXF1aXJlbWVudHNfX3Rhc2stYm94JykuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICBpdGVtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykudmFsdWUgPSBcIlwiO1xuICAgICAgICBpdGVtLnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhJykudmFsdWUgPSBcIlwiO1xuICAgICAgICAvLyDQutC70L7QvdC40YDRg9C10YLRgdGPINCx0LvQvtC6INGBINC+0YfQuNGJ0LXQvdC90YvQvNC4INC/0L7Qu9GP0LzQuFxuICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoXCJjdWJlLXJlcXVpcmVtZW50c19fdGFzay1ib3gtLWFuaW1hdGVcIik7XG4gICAgICAgIHRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoaXRlbSwgdGhpcy5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJy5jdWJlLXJlcXVpcmVtZW50c19fcGx1cy1pbWcnKSk7XG4gICAgICAgIC8vINCy0YHRgtCw0LLQu9C10L0g0LHQu9C+0LpcblxuICAgICAgICB2YXIgbGVmdExhYmVsID0gdGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignLmN1YmUtcmVxdWlyZW1lbnRzX19pdGVtLWxhYmVsJyk7XG4gICAgICAgIHZhciBibG9ja0hlaWdodCA9IHRoaXMucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgICBibG9ja0hlaWdodCA9IGdldENvbXB1dGVkU3R5bGUoYmxvY2tIZWlnaHQpO1xuICAgICAgICBsZWZ0TGFiZWwuc3R5bGUuaGVpZ2h0ID0gYmxvY2tIZWlnaHQuaGVpZ2h0O1xuICAgICAgICB0aGlzLnBhcmVudE5vZGUucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCcuY3ViZS1yZXF1aXJlbWVudHNfX2l0ZW0tc3BhbicpLnN0eWxlLndpZHRoID0gKHBhcnNlSW50KGJsb2NrSGVpZ2h0LmhlaWdodCkgKyAyODApICsgXCJweFwiO1xuICAgICAgICB0aGlzLnBhcmVudE5vZGUucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCcuY3ViZS1yZXF1aXJlbWVudHNfX2l0ZW0tc3BhbicpLnN0eWxlLmhlaWdodCA9IChwYXJzZUludChibG9ja0hlaWdodC5oZWlnaHQpICsgMjgwKSArIFwicHhcIjtcbiAgICAgICAgdGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignLmN1YmUtcmVxdWlyZW1lbnRzX19pdGVtLWxhYmVsJykuc3R5bGUuaGVpZ2h0ID0gKHBhcnNlSW50KGJsb2NrSGVpZ2h0LmhlaWdodCkgKyAyODApICsgXCJweFwiO1xuICAgICAgICB0aGlzLnBhcmVudE5vZGUucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCcuY3ViZS1yZXF1aXJlbWVudHNfX2l0ZW0tY29udGVudCcpLnN0eWxlLmhlaWdodCA9IChwYXJzZUludChibG9ja0hlaWdodC5oZWlnaHQpICsgMjgwKSArIFwicHhcIjtcbiAgICAgICAgLy8g0YPRgdGC0LDQvdC+0LLQutCwINCy0YvRgdC+0YLRiyDQu9C10LLQvtCz0L4g0LHQu9C+0LrQsCDRgSDQvdCw0LfQstCw0L3QuNC10LwgXG4gICAgICAgIC8vIHZhciB2YWwgPSBwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKGl0ZW0pLmhlaWdodCkgKyAxMztcbiAgICAgICAgLy8gY29uc29sZS5sb2codmFsKTtcbiAgICAgICAgLy8gd2luZG93LnNjcm9sbEJ5KDAsIHZhbCk7XG4gICAgICAgIC8vINGB0LrRgNC+0LvQu9C40YLRgdGPINC90LAg0LLRi9GB0L7RgtGDINC00L7QsdCw0LLQu9C10L3QvdC+0LPQviDRjdC70LXQvNC10L3RgtCwXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdWJlLXJlZy1jb250ZW50X19yaXNrcy12YWx1ZScpLmlubmVySFRNTCAtPSAxO1xuICAgICAgICAvLyDQvNC10L3Rj9C10Lwg0LfQvdCw0YfQtdC90LjQtSDRgNC40YHQutC+0LJcbiAgICAgICAgY2hhbmdlUmlza3NDb2xvcigpO1xuICAgICAgICAvLyBjaGFuZ2UgY29sb3Igb2Ygcmlza3MtYmxvY2tcbiAgICB9KTtcbn1cbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3ViZS1uZXctcHJvamVjdCBmb3JtJykpIHtcbiAgICB0aGlzLm9uY2hhbmdlID0gbmV3cHJvamVjdENhbGN1bGF0ZVJpc2tzO1xufVxuXG52YXIgbmV3cHJvamVjdFJpc2tzVmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcgLmN1YmUtcmVnLWNvbnRlbnRfX3Jpc2tzLXZhbHVlJykuaW5uZXJIVE1MO1xuXG5mdW5jdGlvbiBuZXdwcm9qZWN0Q2FsY3VsYXRlUmlza3MoKSB7XG5cbiAgICAvLyBnZXQgcmlza3MgdmFsdWVcbiAgICB2YXIgYXJyYXlPZlZhbHVlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jdWJlLW5ldy1wcm9qZWN0X19ib3ggb3B0aW9uOmNoZWNrZWQnKTtcbiAgICAvLyBmaW5kIGFsbCBjaGVja2VkIHNlbGVjdC1pdGVtc1xuICAgIGlmIChhcnJheU9mVmFsdWVzLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgIHZhciBzID0gcGFyc2VJbnQoYXJyYXlPZlZhbHVlc1swXS5nZXRBdHRyaWJ1dGUoJ25hbWUnKSk7XG4gICAgICAgIHZhciBiID0gbmV3cHJvamVjdFJpc2tzVmFsdWUgLSBzO1xuICAgIH0gZWxzZSBpZiAoYXJyYXlPZlZhbHVlcy5sZW5ndGggPT0gMikge1xuICAgICAgICB2YXIgcyA9IHBhcnNlSW50KGFycmF5T2ZWYWx1ZXNbMF0uZ2V0QXR0cmlidXRlKCduYW1lJykpO1xuICAgICAgICB2YXIgZiA9IHBhcnNlSW50KGFycmF5T2ZWYWx1ZXNbMV0uZ2V0QXR0cmlidXRlKCduYW1lJykpO1xuICAgICAgICB2YXIgYiA9IG5ld3Byb2plY3RSaXNrc1ZhbHVlIC0gcyAtIGY7XG4gICAgfVxuICAgIC8vIGNhbGN1bGF0ZSBkaWZmZXJlbmNlXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1YmUtcmVnLWNvbnRlbnRfX3Jpc2tzLXZhbHVlJykuaW5uZXJIVE1MID0gYjtcbiAgICAvLyBzZXQgcmlza3MgdmFsdWUgXG4gICAgY2hhbmdlUmlza3NDb2xvcigpO1xuICAgIC8vIGNoYW5nZSBjb2xvciBvZiByaXNrcy1ibG9ja1xufTtcbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3ViZS1taWxlc3RvbmVzIGZvcm0nKSkge1xuICAgIHRoaXMub25jaGFuZ2UgPSBtaWxlc3RvbmVzQ2FsY3VsYXRlUmlza3M7XG59XG52YXIgbWlsZXN0b25lc1Jpc2tzVmFsdWUgPSBwYXJzZUludChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3ViZS1yZWctY29udGVudF9fcmlza3MtdmFsdWUnKS5pbm5lckhUTUwpO1xuXG5mdW5jdGlvbiBtaWxlc3RvbmVzQ2FsY3VsYXRlUmlza3MoKSB7XG5cbiAgICAvLyBnZXQgcmlza3MgdmFsdWVcbiAgICB2YXIgbWlsZXN0b25lc0Zvcm1CbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdWJlLW1pbGVzdG9uZXNfX2Zvcm0tYmxvY2snKTtcbiAgICB2YXIgbWlsZXN0b25lc0xpc3RJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmN1YmUtbWlsZXN0b25lc19faXRlbScpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWlsZXN0b25lc0xpc3RJdGVtLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBpbnB1dCA9IG1pbGVzdG9uZXNMaXN0SXRlbVtpXS5xdWVyeVNlbGVjdG9yKCcuY3ViZS1taWxlc3RvbmVzX19pbnB1dCcpO1xuICAgICAgICB2YXIgZGF0ZSA9IG1pbGVzdG9uZXNMaXN0SXRlbVtpXS5xdWVyeVNlbGVjdG9yKCcuY3ViZS1taWxlc3RvbmVzX19kYXRlLWlucHV0Jyk7XG4gICAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICAgICAgaWYgKGlucHV0LnZhbHVlICE9IFwiXCIgJiYgZGF0ZS52YWx1ZSAhPSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnNScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkYXRlLnNldEF0dHJpYnV0ZSgnbmFtZScsICcwJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoZGF0ZS52YWx1ZSAhPSBcIlwiKSB7XG4gICAgICAgICAgICBkYXRlLnNldEF0dHJpYnV0ZSgnbmFtZScsICc1Jyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkYXRlLnNldEF0dHJpYnV0ZSgnbmFtZScsICcwJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gc2V0IHZhbHVlcyBmb3IgZm9ybSBlbGVlbnRzXG4gICAgdmFyIGRhdGVBcnJheSA9IG1pbGVzdG9uZXNGb3JtQmxvY2sucXVlcnlTZWxlY3RvckFsbCgnLmN1YmUtbWlsZXN0b25lc19fZGF0ZS1pbnB1dCcpO1xuICAgIHZhciBhID0gcGFyc2VJbnQoZGF0ZUFycmF5WzBdLmdldEF0dHJpYnV0ZSgnbmFtZScpKTtcbiAgICB2YXIgYiA9IHBhcnNlSW50KGRhdGVBcnJheVsxXS5nZXRBdHRyaWJ1dGUoJ25hbWUnKSk7XG4gICAgdmFyIGMgPSBwYXJzZUludChkYXRlQXJyYXlbMl0uZ2V0QXR0cmlidXRlKCduYW1lJykpO1xuICAgIHZhciBkID0gbWlsZXN0b25lc1Jpc2tzVmFsdWUgLSBhIC0gYiAtIGM7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1YmUtcmVnLWNvbnRlbnRfX3Jpc2tzLXZhbHVlJykuaW5uZXJIVE1MID0gZDtcbiAgICAvLyBzZXQgcmlza3MgdmFsdWUgXG4gICAgY2hhbmdlUmlza3NDb2xvcigpO1xuICAgIC8vIGNoYW5nZSBjb2xvciBvZiByaXNrcy1ibG9ja1xufVxuLy8iXSwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
