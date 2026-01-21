import fs from 'fs';
export function readJson(fileName: string): unknown[] {
    let data
    try {
        data = fs.readFileSync(fileName, { encoding: 'utf8', flag: 'r' })
    }catch{
        throw "Invalid file"
    }
    
    try {
        return JSON.parse(data);
    } catch {
        throw "Invalid JSON format"
    }
}