import englishToDovahzulJson from '../../../data/english-dovahzul.json';
import dovahzulToEnglishJson from '../../../data/dovahzul-english.json';

const MATCH_PUNCTUATION_AT_END_OF_STRING = /[^\w\s]$/;

export interface TranslatedText {
	dovahzul: string[] | null;
	english: string | null;
	translated: boolean;
}

// TODO: out of scope multip word phrases e.g.
// Dragon of the north -> dovahsebrom
// possible look for substrings in the inputText
/*
- build a regex that matches all translatable words
- run match all on the string with ignore case
- break up the string by the match points
- for each substring, replace if you can (matching case where possible)
- join the string back together again
 */
export const translateText: (inputText: string, isEnglishToDovahzul: boolean) => TranslatedText[] = (inputText: string, isEnglishToDovahzul: boolean) => {
	const dictionary = isEnglishToDovahzul ? englishToDovahzulJson as Record<string, string[]>: dovahzulToEnglishJson as Record<string, string>;
	const inputWords = inputText.split(' ');

	return inputWords.map((rawString) => {
		// does string have punctuation at the end?
		const testString = rawString.toLowerCase();
		const punctuationEnd = testString.match(MATCH_PUNCTUATION_AT_END_OF_STRING);

		// remove punctuation from string
		const punctuationless = testString.replace(MATCH_PUNCTUATION_AT_END_OF_STRING, '');
		const key = punctuationless.replace(/\s{2,}/g, ' ');

		if (isEnglishToDovahzul) {
			if (dictionary[key] && Array.isArray(dictionary[key])) {
				const translationWithPunctuation = dictionary[key].map(
					(translation) => `${translation}${punctuationEnd !== null ? punctuationEnd[0] : ''}`
				);
				return { english: rawString, dovahzul: translationWithPunctuation, translated: true };
			}
		} else if (dictionary[key]) {
			const translationWithPunctuation =  [`${dictionary[key]}${punctuationEnd !== null ? punctuationEnd[0] : ''}`];
			return { english: translationWithPunctuation[0], dovahzul: [rawString], translated: true };
		}


		if (isEnglishToDovahzul) {
			return { english: rawString, dovahzul: null, translated: false };
		} else {
			return { english: null, dovahzul: [rawString], translated: false };
		}

	});
};
