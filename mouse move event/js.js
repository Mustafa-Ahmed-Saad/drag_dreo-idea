let c0;
let c1;
let c2;
let c3;
document.querySelector('.cards').onmousemove = function (event) {
   c0 = 190;
   c1 = 170;
   c2 = 150;
   c3 = 130;
   document.querySelectorAll('.card').forEach(function (ele, index) {
      let string = 'c' + index;

      function convertToVarName(mystring) {
         var myVar = eval(mystring);
         ele.style.cssText = `left: ${event.clientX - myVar}px;
         top: ${event.clientY - myVar + 100}px;`;
      }
      convertToVarName(string);
   });
};