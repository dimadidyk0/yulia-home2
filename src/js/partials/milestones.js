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