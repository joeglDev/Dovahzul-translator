import { readFile, writeFile } from 'node:fs';
import * as path from 'node:path';
import { reverseObject } from './reverse-object';

// Converts csv file of english dovahzul translations into a json file.
// This function should not be required once the json has been created.
// Pass shouldReverse true to create a dictionary of Dovahzul to English translations and false for English to Dovahzul translations
const translateCsvDictToJson = (shouldReverse: boolean) => {
	console.log('Converting csv to a json file.');
	const writeFilePath = path.resolve(
		`../../../data/${shouldReverse ? 'dovahzul-english' : 'english-dovahzul'}.json`
	);

	const filepath = path.resolve('../../../data/english-dovahzul.csv');

	readFile(filepath, 'utf-8', (err, data) => {
		if (err) {
			console.error(`An error occurred reading the csv: ${err}`);
		} else {
			const translationRows = data.split('\n').slice(1);
			const translationObj: Record<string, string[]> = {};

			translationRows.forEach((row) => {
				const values = row.split('@');
				const key = values[0].trim().toLowerCase(); // row 0 is English
				const value = values[values.length - 1].replace(/\s/g, '').split(','); // row 2 is Dovahzul

				translationObj[key] = value;
			});

			// Dovahzul to english dictionary
			if (shouldReverse) {
				const reverseTranslationObj = reverseObject(translationObj);
				console.log(writeFilePath);
				console.log(JSON.stringify(reverseTranslationObj));
				writeFile(writeFilePath, JSON.stringify(reverseTranslationObj, null, 2), 'utf8', (err) => {
					if (err)
						console.error(
							`An error occurred writing the translation object to a json file: ${err}`
						);
				});
			}
			// English to Dovahzul dictionary
			else {
				writeFile(writeFilePath, JSON.stringify(translationObj, null, 2), 'utf8', (err) => {
					if (err)
						console.error(
							`An error occurred writing the translation object to a json file: ${err}`
						);
				});
			}
		}

		console.log('Finished!');
	});
};

translateCsvDictToJson(false);
translateCsvDictToJson(true);
