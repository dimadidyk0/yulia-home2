if (document.querySelector('.cube-new-project form')) {
    this.onchange = newprojectCalculateRisks;
}

var newprojectRisksValue = document.querySelector(' .cube-reg-content__risks-value').innerHTML;

function newprojectCalculateRisks() {

    // get risks value
    var arrayOfValues = document.querySelectorAll('.cube-new-project__box option:checked');
    // find all checked select-items
    var s = parseInt(arrayOfValues[0].getAttribute('name'));
    var f = parseInt(arrayOfValues[1].getAttribute('name'));
    var b = newprojectRisksValue - s - f;
    // calculate difference
    document.querySelector('.cube-reg-content__risks-value').innerHTML = b;
    // set risks value 
    changeRisksColor();
    // change color of risks-block
};