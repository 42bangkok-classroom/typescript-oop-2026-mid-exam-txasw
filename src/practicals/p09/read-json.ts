import fs from 'fs';
export function readJson(fileName: string): unknown[] {
    let data;
    try {
        fileName = "datasets/" + fileName;
        data = fs.readFileSync(fileName, { encoding: 'utf8', flag: 'r' });
    } catch {
        throw "Invalid file";
    }

    let parsed;
    try {
        parsed = JSON.parse(data);
    } catch {
        throw "Invalid JSON format";
    }
    if (!Array.isArray(parsed)) {
        throw "Invalid JSON format";
    }
    return parsed as unknown[];
}