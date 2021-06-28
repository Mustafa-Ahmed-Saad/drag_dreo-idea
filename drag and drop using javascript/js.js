let isDown = true;
let mousePosition;
let offset = [0, 0];
let currentElement;
document.querySelectorAll('.card').forEach(function (element) {
   element.addEventListener(
      'mousedown',
      function (e) {
         isDown = true;
         offset = [this.offsetLeft - e.clientX, this.offsetTop - e.clientY];
         currentElement = this;
      },
      true
   );
});

document.addEventListener(
   'mouseup',
   function () {
      isDown = false;
   },
   true
);

document.addEventListener(
   'mousemove',
   function (event) {
      event.preventDefault();
      if (isDown) {
         mousePosition = {
            x: event.clientX,
            y: event.clientY,
         };
         if (currentElement != undefined) {
            currentElement.style.left = mousePosition.x + offset[0] + 'px';
            currentElement.style.top = mousePosition.y + offset[1] + 'px';
         }
      }
   },
   true
);
