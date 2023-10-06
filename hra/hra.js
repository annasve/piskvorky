let currentPlayer = 'circle';

const playerMove = (evt) => {
  if (currentPlayer === 'circle') {
    evt.target.classList.add('playing-board__button--circle');
    evt.target.classList.remove(
      'playing-board__button:hover',
      'playing-board__button:focus',
    );
    currentPlayer = 'cross';
    document.querySelector('.player-symbol').src = '../obrazky/cross.svg';
  } else {
    evt.target.classList.add('playing-board__button--cross');
    evt.target.classList.remove(
      'playing-board__button:hover',
      'playing-board__button:focus',
    );
    currentPlayer = 'circle';
    document.querySelector('.player-symbol').src = '../obrazky/circle.svg';
  }
  evt.target.disabled = true; //(zamezení akce při kliknutí na již vybrané políčko)
};

//eventlisteners na herní políčka (button x 10)
document
  .querySelector('.playing-board__button:nth-child(1)')
  .addEventListener('click', playerMove);
document
  .querySelector('.playing-board__button:nth-child(2)')
  .addEventListener('click', playerMove);
document
  .querySelector('.playing-board__button:nth-child(3)')
  .addEventListener('click', playerMove);
document
  .querySelector('.playing-board__button:nth-child(4)')
  .addEventListener('click', playerMove);
document
  .querySelector('.playing-board__button:nth-child(5)')
  .addEventListener('click', playerMove);
document
  .querySelector('.playing-board__button:nth-child(6)')
  .addEventListener('click', playerMove);
document
  .querySelector('.playing-board__button:nth-child(7)')
  .addEventListener('click', playerMove);
document
  .querySelector('.playing-board__button:nth-child(8)')
  .addEventListener('click', playerMove);
document
  .querySelector('.playing-board__button:nth-child(9)')
  .addEventListener('click', playerMove);
document
  .querySelector('.playing-board__button:nth-child(10)')
  .addEventListener('click', playerMove);
