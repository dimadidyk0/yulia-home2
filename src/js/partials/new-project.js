var a = document.querySelector('.cube-reg-content__risks-value').innerHTML;

document.querySelector('select[name="test"]').onchange = x;
document.querySelector('select[name="test2"]').onchange = x;



function x() {
    var arrayOfValues = document.querySelectorAll('option:checked');
    var s = parseInt(arrayOfValues[0].getAttribute('name'));
    var f = parseInt(arrayOfValues[1].getAttribute('name'));
    var b = a - s - f;
    document.querySelector('.cube-reg-content__risks-value').innerHTML = b;
    changeRisksColor();
};