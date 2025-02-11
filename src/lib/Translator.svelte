<script lang="ts">
    import PrintButton from "./PrintButton.svelte";
    import TranslatedTextWindow from "./TranslatedTextWindow.svelte";
    import {translateText} from "../utils";

    let inputText = $state("");
    let translatedText = $derived.by(() => translateText(inputText));

    // TODO: hover above each translated word for a details tooltip
    /*TODO: english <-> Dovahzul toggle switch class in .translated-text and function used to translate will need to reverse */
</script>

<section>
    <TranslatedTextWindow translatedText={translatedText} />
    <input bind:value={inputText} placeholder="Enter test to translate here..." class="text-input"/>
    <PrintButton inputText={inputText} translatedText={translatedText} />
</section>

<style>
    @font-face {
        font-family: 'Dovahzul';
        font-style: normal;
        font-weight: 400;
        src: url("../../fonts/dragon_alphabet.woff") format('woff');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }

    .text-input {
        width: 60vw;
        height: 10vh;
        text-align: center;
        font-size: 1.5rem;
    }
</style>