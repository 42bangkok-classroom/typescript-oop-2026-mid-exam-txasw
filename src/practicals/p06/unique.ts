export function getUniqueNumbers(arr1: number[], arr2: number[]): number[] {
  // Write your code below
  const unq1 = arr1.filter(val => arr2.indexOf(val) == -1)
  const unq2 = arr2.filter(val => arr1.indexOf(val) == -1)
  const merge = unq1.concat(unq2)
  const dup = merge.filter((v, i) => merge.indexOf(v) !== i && merge.lastIndexOf(v) === i)
  const removedDup = merge.filter(val => dup.indexOf(val) == -1)
  return removedDup
}

const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];