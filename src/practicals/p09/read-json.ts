import fs from 'fs';
export function readJson(fileName: string): unknown[] {
    let data
    throw fileName
    try {
        data = fs.readFileSync(fileName, { encoding: 'utf8', flag: 'r' })
    }catch{
        throw "Invalid file"
    }
    
    try {
        return JSON.parse(data) as unknown[];
    } catch {
        throw "Invalid JSON format"
    }
}