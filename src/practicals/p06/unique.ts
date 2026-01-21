export function getUniqueNumbers(arr1: number[], arr2: number[]): number[] {
  // Write your code below
  const unq1 = arr1.filter(val => arr2.indexOf(val) == -1)
  const unq2 = arr2.filter(val => arr1.indexOf(val) == -1)
  return unq1.concat(unq2)
}

const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];

console.log(getUniqueNumbers(arr1,arr2))