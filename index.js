
const run = () => {
  const rotationEl = document.querySelector('.rotation-object');
  const originalEl = document.querySelector('.original-object');
  const centerEl = document.querySelector('.rotation-center');
  const position = {
    x: 0,
    y: 0
  };

  const rotationPosition = {
    deg: 0,
    x: 0,
    y: 0,
  };

  const update = () => {
    rotationEl.setAttribute('y', position.y);
    rotationEl.setAttribute('x', position.x);
    originalEl.setAttribute('y', position.y);
    originalEl.setAttribute('x', position.x);
    centerEl.setAttribute('cx', rotationPosition.x);
    centerEl.setAttribute('cy', rotationPosition.y);
  };

  const xPositionControl = document.querySelector('.x-position');
  const yPositionControl = document.querySelector('.y-position');
  const xRotationCenterControl = document.querySelector('.x-rotation-center');
  const yRotationCenterControl = document.querySelector('.y-rotation-center');

  xPositionControl.addEventListener('input', (event) => {
    position.x = event.target.value;
    update();
  });

  yPositionControl.addEventListener('input', (event) => {
    position.y = event.target.value;
    update();
  });

  xRotationCenterControl.addEventListener('input', (event) => {
    rotationPosition.x = event.target.value;
    update();
  });

  yRotationCenterControl.addEventListener('input', (event) => {
    rotationPosition.y = event.target.value;
    update();
  });

  const rotate = () => {
    rotationEl.setAttribute('transform', `rotate(${rotationPosition.deg} ${rotationPosition.x} ${rotationPosition.y})`);
    rotationPosition.deg = rotationPosition.deg === 360 ? 0 : rotationPosition.deg + 1;
    setTimeout(rotate, 5);
  };

  rotate();
};

document.addEventListener('DOMContentLoaded', run);
