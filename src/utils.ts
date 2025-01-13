import {TRANSLATION_DICTIONARY} from "./utils.constants";

export interface TranslatedText {
    dovahzul: string | null;
    eng: string;
    translated: boolean
}

export const translateText = (inputText: string) => {
    const inputWords = inputText.split(' ');
    return inputWords.map((word) => {
        console.log(word)
        const key = word.toLowerCase();
        if (TRANSLATION_DICTIONARY[key]) {
            return {eng: word, dovahzul: TRANSLATION_DICTIONARY[key], translated: true, };
        }

        return {eng: word, dovahzul: null, translated: false} });
};