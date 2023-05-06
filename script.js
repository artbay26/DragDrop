const firstPoligon = document.querySelector('.firstPoligon');
const secondPoligon = document.querySelector('.secondPoligon');
const bird = document.querySelector('.bird');

firstPoligon.addEventListener('dragover', prevent);
secondPoligon.addEventListener('dragover', prevent);

firstPoligon.addEventListener('drop', dropPlace);
secondPoligon.addEventListener('drop', dropPlace);

firstPoligon.addEventListener('touchmove', moveTouch);
secondPoligon.addEventListener('touchmove', moveTouch);

function prevent(e) {
    e.preventDefault();
};

bird.style.position = 'absolute';

function dropPlace(e) {
    bird.style.left = e.clientX - bird.offsetWidth / 2 + 'px';
    bird.style.top = e.clientY - bird.offsetHeight / 2 + 'px';
};

function moveTouch(e) {
    e.preventDefault();
    var touch = e.targetTouches[0];
    bird.style.left = touch.pageX - bird.offsetWidth / 2 + 'px';
    bird.style.top = touch.pageY - bird.offsetHeight / 2 + 'px';
};