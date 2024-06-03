function transformToObjects(numberArray) {
    return numberArray.map(item => ({val: item}));
   // should return an array of objects
   }
const myarray = [1, 2, 3, 4, 5,];
const mappedVal = transformToObjects(myarray);
console.log(mappedVal);