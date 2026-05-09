import type {TranslatedText} from "./utils/translate-text";

export interface TranslatedTextWindowProps {
    translatedText: TranslatedText[];
    translateEnglishToDovahzul: boolean;
}