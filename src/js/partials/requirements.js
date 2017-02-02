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