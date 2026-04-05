import json from '../../../data/english-dovahzul.json';

export interface TranslatedText {
    dovahzul: string | null;
    eng: string;
    translated: boolean
}

// todo test cases:
// a: b
// a: b,c,d
// a b : c
export const translateText = (inputText: string) => {
    const dictionary = json as Record<string, string[]>;
    const inputWords = inputText.split(' ');
    return inputWords.map((key) => {
        if (dictionary[key]) {
            return {eng: key, dovahzul: dictionary[key][0], translated: true, };
        }

        return {eng: key, dovahzul: null, translated: false} });
};