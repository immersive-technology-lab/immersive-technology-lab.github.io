document.addEventListener('DOMContentLoaded', domReady);
function domReady() {
var x = document.getElementsByClassName("b-dics");
for (var i = 0; i < x.length; i++) {
  new Dics({
    container: document.querySelectorAll('.b-dics')[i],
    hideTexts: true,
    textPosition: 'center'
    });
  }
}