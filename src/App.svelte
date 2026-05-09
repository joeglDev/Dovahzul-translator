<script lang="ts">
	import Translator from './lib/Translator.svelte';
</script>

<main>
	<h1>Dovahzul language translator</h1>

	<p>
		Hover over a translated word to learn more. If a word has a <span class="green-line"
			>green line</span
		> underneath it then a translation was found.
	</p>

	<Translator />

	<section>
		<p>
			A translator app to convert english into Dovahzul language from Bethesda's Elder Scrolls V:
			Skyrim video game.
		</p>
		<p>
			Based on the existing work by <a
				href="https://www.thuum.org/"
				target="_blank"
				rel="noreferrer">Thuum.org</a
			>, the Dovahzul language community.
		</p>
	</section>

	<footer>
		<p>
			This application is a passion project of mine and was coded by hand. Generative Ai such as
			large language models (LLMs) were not used to generate code within this application.
		</p>
	</footer>
</main>

<style>
	.green-line {
		border-bottom: green 4px solid;
	}
</style>
