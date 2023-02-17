import { getRandomColor } from './utils';

export default function initApp() {
  const button = document.createElement('button');
  button.className = 'button';
  button.textContent = 'Change page color';

  button.addEventListener('click', () => {
    document.body.style.backgroundColor = getRandomColor();
  });

  document.body.append(button);
  return button;
}
