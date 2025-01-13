export interface TranslatedText {
    word: string;
    translated: boolean
};

export const translateText = (inputText: string) => {
    /*
    Return Array<{word: string, translated: boolean}> // false vs true get diff css
     */
    const inputWords = inputText.split('\n');
    const translatedWords = inputWords.map((word) => { return {word: word, translated: true} }); // TODO: translate on hashmap here
    return translatedWords;
};