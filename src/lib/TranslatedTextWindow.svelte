<script lang="ts">
    import type {TranslatedText} from "../utils";

    interface TranslatedTextWindowProps {
        translatedText: TranslatedText[];
    }

    const {translatedText}: TranslatedTextWindowProps = $props();
</script>

<div class="translated-text">
    {#each translatedText as wordObj}
        <div class={wordObj.translated ? 'translated-word' : 'untranslated-word'}>{wordObj.word}</div>
    {/each}
</div>

<style>
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