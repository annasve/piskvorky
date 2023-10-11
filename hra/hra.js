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

const playingBoard = document.querySelectorAll('.playing-board__button');

playingBoard.forEach((item) => {
  item.addEventListener('click', playerMove);
});
