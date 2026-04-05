import json from '../../../data/english-dovahzul.json';

const MATCH_PUNCTUATION_AT_END_OF_STRING = /[^\w\s]$/;

export interface TranslatedText {
    dovahzul: string[] | null;
    english: string;
    translated: boolean
}

// TODO: out of scope multip word phrases e.g.
// Dragon of the north -> dragon of the north
// possible look for substrings in the inputText
export const translateText: (inputText: string) => TranslatedText[] = (inputText: string) => {
    const dictionary = json as Record<string, string[]>;
    const inputWords = inputText.split(' ');

    return inputWords.map((rawString, index) => {
        // does string have punctuation at the end?
        const testString = rawString.toLowerCase()
        const punctuationEnd = testString.match(MATCH_PUNCTUATION_AT_END_OF_STRING);

        // remove punctuation from string
        const punctuationless = testString.replace(MATCH_PUNCTUATION_AT_END_OF_STRING,"");
        const key = punctuationless.replace(/\s{2,}/g," ");

        if (dictionary[key]) {
            const translationWithPunctuation = dictionary[key].map((translation) => `${translation}${punctuationEnd !== null ? punctuationEnd[0] : ''}`)
            return {english: rawString, dovahzul: translationWithPunctuation, translated: true, };
        }

        return {english: rawString, dovahzul: null, translated: false} });
};