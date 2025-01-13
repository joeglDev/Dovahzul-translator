<script lang="ts">
    import PrintButton from "./PrintButton.svelte";
    import {translateText} from "../utils";

    let inputText = $state("");
    let translatedText = $derived.by(() => translateText(inputText));

    /* TODO: replace words in real time using a function*/
    /*TODO: english <-> Dovahzul toggle switch class in .translated-text and function used to translate will need to reverse */
</script>


<section>
    <div class="translated-text">
        {#each translatedText as wordObj}
        <div class={wordObj.translated ? 'translated-word' : 'untranslated-word'}>{wordObj.word}</div>
        {/each}
    </div>
    <input bind:value={inputText} placeholder="Enter test to translate here..." class="text-input"/>
    <PrintButton inputText={inputText} translatedText={translatedText} />
</section>

<style>
    @font-face {
        font-family: 'Dovahzul';
        font-style: normal;
        font-weight: 400;
        src: local('Dovahzul default'), local('Dovahzul-default'), url("assets/fonts/dragon_alphabet.woff") format('woff');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }

    .translated-text {
        width: 60vw;
        height: 40vh;
        border: white 1px solid;
        margin: 5vh auto 5vh auto;
        font-family: "Dovahzul", serif;
        text-align: center;
        font-size: 2rem;
        display: flex;
        flex-direction: row;
    }

    .text-input {
        width: 60vw;
        height: 10vh;
        text-align: center;
        font-size: 1.5rem;
    }

    .translated-word {
        background-color: green;
        font-family: "Dovahzul", serif;
        text-align: center;
        font-size: 2rem;
        margin: auto 0.3vw auto 0.3vw;
    }

    .untranslated-word {
        font-family: "Dovahzul", serif;
        text-align: center;
        font-size: 2rem;
        margin: auto 0.5vw auto 0.5vw;

    }
</style>