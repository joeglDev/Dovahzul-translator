import type { TranslatedText } from '../utils/translate-text';

export interface TranslatorButtonsProps {
	inputText: string;
	translatedText: TranslatedText[];
	onClearText: () => void;
	onChangeMode: () => void;
}

export type PrintButtonProps = Omit<TranslatorButtonsProps, 'onClearText' | 'onChangeMode'>;
