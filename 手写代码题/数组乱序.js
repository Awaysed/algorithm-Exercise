const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const shuffleArray = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j],arr[i]]
  }
};

shuffleArray(arr);

console.log(arr);
