const marquees = [...document.querySelectorAll('.marquee')];
marquees.forEach((marquee) => {
    marquee.innerHTML = marquee.innerHTML + '&nbsp;'.repeat(5);
    marquee.i = 0;
    marquee.step = .2;
    marquee.width = marquee.clientWidth + 1;
    marquee.style.position = '';
    marquee.innerHTML = `${marquee.innerHTML}&nbsp;`.repeat(50);
    marquee.addEventListener('mouseenter', () => (marquee.step = 0), false);
    marquee.addEventListener('mouseleave', () => (marquee.step = .2), false);
});

requestAnimationFrame(move);

function move() {
    marquees.forEach((marquee) => {
        marquee.style.marginLeft = `-${marquee.i}px`;
        marquee.i = marquee.i < marquee.width ? marquee.i + marquee.step : 1;
    });

    requestAnimationFrame(move);
}
