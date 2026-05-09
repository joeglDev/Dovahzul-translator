<script lang="ts">
	import TranslatedWord from "./TranslatedWord.svelte";
	import type {TranslatedTextWindowProps} from "./translated-text-window-props.types";

	// Caveat: If an English word translates to more than one Dovahzul word then the first translation in the array is returned
	const {translatedText, translateEnglishToDovahzul }: TranslatedTextWindowProps = $props();

	const displayAreaClass = $derived(
		translateEnglishToDovahzul ? 'english-dovahzul-translation' : 'dovahzul-english-translation'
	);
</script>

<div aria-label="translated text" class={displayAreaClass}>
<TranslatedWord translatedText={translatedText} translateEnglishToDovahzul={translateEnglishToDovahzul}/>
</div>

<style>
	.english-dovahzul-translation {
		width: 60vw;
		height: 40vh;
		border: white 1px solid;
		margin: 5vh auto 5vh auto;
		font-family: 'Dovahzul', serif;
		text-align: center;
		font-size: 2rem;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		grid-gap: 2px;
	}

	.dovahzul-english-translation {
		width: 60vw;
		height: 40vh;
		border: white 1px solid;
		margin: 5vh auto 5vh auto;
		text-align: center;
		font-size: 2rem;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		grid-gap: 2px;
		font-family: serif;
	}
</style>
