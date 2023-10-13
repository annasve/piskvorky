import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';

let currentPlayer = 'circle';

let currentBoard = [];

for (let i = 0; i <= 99; i++) {
  currentBoard[i] = '_';
}

const nodeList = document.querySelectorAll('.playing-board__button');

const playerMove = (evt) => {
  let buttonsArray = Array.from(nodeList);
  let nodeItemIndex = buttonsArray.indexOf(evt.target);

  if (currentPlayer === 'circle') {
    evt.target.classList.add('playing-board__button--circle');

    currentBoard[nodeItemIndex] = 'o';

    currentPlayer = 'cross';
    document.querySelector('.player-symbol').src = '../obrazky/cross.svg';
  } else {
    evt.target.classList.add('playing-board__button--cross');

    currentBoard[nodeItemIndex] = 'x';

    currentPlayer = 'circle';
    document.querySelector('.player-symbol').src = '../obrazky/circle.svg';
  }

  evt.target.classList.remove(
    'playing-board__button:hover',
    'playing-board__button:focus',
  );

  evt.target.disabled = true;

  const whoWon = findWinner(currentBoard);

  const delayAlertWin = () => {
    if (whoWon === 'o' || whoWon === 'x') {
      alert(`Vyhrál hráč se symbolem ${whoWon}.`);
      location.reload();
    } else if (whoWon === 'tie') {
      alert('Hra skončila nerozhodně.');
      location.reload();
    }
  };
  setTimeout(delayAlertWin, 100);
};

nodeList.forEach((item) => {
  item.addEventListener('click', playerMove);
});
