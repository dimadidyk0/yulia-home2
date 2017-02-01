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