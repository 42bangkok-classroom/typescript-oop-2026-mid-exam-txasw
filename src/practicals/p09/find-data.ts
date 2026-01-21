import { readJson } from "./read-json";
import fs from 'fs';

export function findData(fileName: string, key: string, value: string | number): void {
  const data = readJson(fileName)
  const findkey = data.filter((val: any) => val[key])
  if (findkey.length === 0) throw "Invalid Key"

  const foundPair = data.filter((val: any) => val[key] == value)
  fs.writeFile(
    "output.json",
    JSON.stringify(foundPair),
    err => {},
    ); 

}