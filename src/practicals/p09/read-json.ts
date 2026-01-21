export function readJson(fileName: string): unknown[] {
    let data
    try {
        data = require(fileName)
        if (!data) throw "Invalid file"
    }catch{
        throw "Invalid file"
    }
    if (typeof data == 'object') return data

    try {
        return JSON.parse(data);
    } catch {
        throw "Invalid JSON format"
    }
}