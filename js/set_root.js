/**
 * Created by 123 on 2017/7/12.
 */
var calc = function(){
    var docElement = document.documentElement;
    var clientWidthValue = docElement.clientWidth > 750 ? 750 : docElement.clientWidth;
    docElement.style.fontSize = 20*(clientWidthValue/375) + 'px';
};
calc();
window.addEventListener('resize',calc);