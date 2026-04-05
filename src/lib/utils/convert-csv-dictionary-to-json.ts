import {readFile, writeFile} from "node:fs";
import * as path from "node:path";

// Converts csv file of english dovahzul translations into a json file.
// This function should not be required once the json has been created.
const translateCsvDictToJson = () => {
    console.log('Converting csv to a json file.')
    const filepath = path.resolve('../../../data/english-dovahzul.csv');

    readFile(filepath, "utf-8", (err, data) => {
        if (err) {
            console.error(`An error occurred reading the csv: ${err}`);
        } else {
            const translationRows = data
                .split("\n").slice(1);

            const translationObj: Record<string, string[]> = {};

            translationRows.forEach((row) => {
                const values = row.split("@");
                const key = values[0].trim().toLowerCase(); // row 0 is English
                const value = values[values.length - 1].replace(/\s/g, "").split(','); // row 2 is Dovahzul

                translationObj[key] = value;
            })

            const writeFilePath = path.resolve('../../../data/english-dovahzul.json');

            writeFile(writeFilePath, JSON.stringify(translationObj, null, 2), 'utf8', (err) => { if (err) console.error(`An error occurred writing the translation object to a json file: ${err}`)  });
        }
        console.log('Finished!')
    });
}
translateCsvDictToJson();