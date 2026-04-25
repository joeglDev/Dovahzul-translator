<script lang="ts">
	import PrintButton from './PrintButton.svelte';
	import type { TranslatorButtonsProps } from './TranslatorButtons.types';

	const { inputText, translatedText, onClearText, onChangeMode }: TranslatorButtonsProps = $props();
</script>

<div>
	<button onclick={onChangeMode}>Click to reverse translation</button>
	<div class="container">
		<button onclick={onClearText}>Clear text</button>
		<PrintButton {inputText} {translatedText} />
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: row;
		gap: 1rem;
		justify-content: center;
	}

	button {
		margin: 1rem 0;
	}
</style>
