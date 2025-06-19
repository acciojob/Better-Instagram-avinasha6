//your code here
const boxes = document.querySelectorAll('.image');
  let draggedBox = null;

  boxes.forEach(box => {
    image.addEventListener('dragstart', () => {
      draggedBox = image;
    });

    image.addEventListener('dragover', e => {
      e.preventDefault(); // Necessary to allow drop
    });

    image.addEventListener('drop', () => {
      if (draggedBox && draggedBox !== image) {
        // Swap the image sources
        const draggedImg = draggedBox.querySelector('.image');
        const targetImg = box.querySelector('.image');

        const tempSrc = draggedImg.src;
        draggedImg.src = targetImg.src;
        targetImg.src = tempSrc;
      }
    });
  });