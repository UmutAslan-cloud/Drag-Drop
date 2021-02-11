let boxes = document.querySelectorAll('.box');

function handleDragStart(e) {
    this.style.opacity = '0.4';
    dragEl = this;

    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDrop(e) {
    if (dragEl != this) {
        dragEl.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData('text/html');
    }

    dragEl.style.opacity = '1';

    return false;
}

function handleDragOver(e) {
    if (e.preventDefault) {
        e.preventDefault();
    }

    e.dataTransfer.dropEffect = 'move';

    return false;
}

function handleDragEnter(e) {
    this.classList.add('dragging');
}

function handleDragLeave(e) {
    this.classList.remove('dragging');
}


function handleDragEnd(e) {
    boxes.forEach(
        function (box) {
            box.classList.remove('dragging');
        }
    )
}
const init = () => {
    boxes.forEach(
        function (box) {
            box.addEventListener('dragstart', handleDragStart, false);
            box.addEventListener('dragenter', handleDragEnter, false);
            box.addEventListener('dragover', handleDragOver, false);
            box.addEventListener('dragleave', handleDragLeave, false);
            box.addEventListener('dragend', handleDragEnd, false);
            box.addEventListener('drop', handleDrop, false);
        }
    );
}
init()