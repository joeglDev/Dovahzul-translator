<script lang="ts">
	import type { TranslatedText } from './utils/translate-text';

    interface TranslatedWordProps {
        translatedWord: TranslatedText;
        translateEnglishToDovahzul: boolean;
    }

	const { translatedWord, translateEnglishToDovahzul }: TranslatedWordProps = $props();

	const getTranslatedWordToDisplay = (obj: TranslatedText) => {
		if (translateEnglishToDovahzul) {
			return obj.dovahzul !== null ? `${obj.dovahzul[0]} ` : `${obj.english} `;
		}

		return obj.english !== null ? `${obj.english} ` : `${obj.dovahzul?.[0]} `;
	};
</script>


	<div class={translatedWord.translated ? 'translated-word' : 'untranslated-word'}>
		{getTranslatedWordToDisplay(translatedWord)}
	</div>

<style>
	.translated-word {
		border-bottom: green 4px solid;
		text-align: center;
		font-size: 2rem;
		margin: auto 0.3vw auto 0.3vw;
	}

	.untranslated-word {
		text-align: center;
		font-size: 2rem;
		margin: auto 0.5vw auto 0.5vw;
	}
</style>
