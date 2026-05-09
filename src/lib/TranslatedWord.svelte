<script lang="ts">
	import type { TranslatedText } from './utils/translate-text';

	interface TranslatedWordProps {
		translatedWord: TranslatedText;
		translateEnglishToDovahzul: boolean;
	}

	const { translatedWord, translateEnglishToDovahzul }: TranslatedWordProps = $props();

	let isUserHovering = $state(false);
	const showPopup = $derived(
		isUserHovering && translateEnglishToDovahzul && translatedWord.translated
	);

	const getTranslatedWordToDisplay = (obj: TranslatedText) => {
		if (translateEnglishToDovahzul) {
			return obj.dovahzul !== null ? `${obj.dovahzul[0]} ` : `${obj.english} `;
		}

		return obj.english !== null ? `${obj.english} ` : `${obj.dovahzul?.[0]} `;
	};

	const userFocusOnTooltip = () => (isUserHovering = true);
	const userBlueOnTooltip = () => (isUserHovering = false);
</script>

<article>
	{#if showPopup}
		<!-- Has blur and focus events -->
		<!-- svelte-ignore a11y_click_events_have_key_events-->
		<div id="tooltip" tabindex="0" role="dialog" onclick={userBlueOnTooltip}>
			<p class="tooltip-title">{translatedWord.dovahzul?.[0] ?? ''}</p>

			<span>{`English: ${translatedWord.english}`}</span>

			{#if translatedWord.translated && translatedWord.dovahzul?.length}
				<span>{`Dovahzul: ${translatedWord.dovahzul.join(', ')}`}</span>
			{/if}
		</div>
	{/if}

	<!-- Has blur and focus events -->
	<!-- svelte-ignore a11y_click_events_have_key_events-->
	<div
		tabindex="0"
		aria-describedby="tooltip"
		id="anchor-ref"
		role="button"
		class={translatedWord.translated ? 'translated-word' : 'untranslated-word'}
		onclick={userFocusOnTooltip}
		onfocus={userFocusOnTooltip}
		onblur={userBlueOnTooltip}
	>
		{getTranslatedWordToDisplay(translatedWord)}
	</div>
</article>

<style>
	#anchor-ref {
		anchor-name: --word;
	}

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

	#tooltip {
		position: absolute;
		position-anchor: --word;
		position-area: top;
		padding: 16px;
		display: flex;
		flex-direction: column;
		gap: 16px;
		z-index: 1000;
		border: white solid 4px;
		font-family: serif;
		background-color: #696969;
	}

	.tooltip-title {
		font-weight: bold;
		font-family: 'Dovahzul', serif;
	}
</style>
