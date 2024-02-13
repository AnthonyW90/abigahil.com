const yesBtn = document.getElementById('yes');
const noBtn = document.getElementById('no');
const boundingBox = document.getElementById('bounding-box');

var myCanvas = document.createElement('canvas');
document.body.appendChild(myCanvas);



yesBtn.addEventListener('click', () => {
    const myConfetti = window.confetti.create(myCanvas, {
        resize: true,
        useWorker: true
      });
      myConfetti({
        particleCount: 500,
        startVelocity: 50,
        spread: 360,
        origin: {
            x: Math.random(),
            // since they fall down, start a bit higher than random
            y: Math.random() - 0.2
        }
      });

      setTimeout(() => {
        myConfetti.reset();
      }, 2000);
});

noBtn.addEventListener('click', () => {
    boundingBox.classList.add('wiggle');
    yesBtn.disabled = true;

    setTimeout(() => {
        boundingBox.classList.remove('wiggle');
        yesBtn.disabled = false;
    }, 1000);
});