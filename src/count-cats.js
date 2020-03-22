module.exports = function countCats(matrix) {
  let number = 0;
  for (item of matrix) {
   for (elem of item) {
     if (elem == '^^') {
        number++;
     }
   }
  }
return number;
};
