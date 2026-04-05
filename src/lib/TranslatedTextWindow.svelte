<script lang="ts">
    import type {TranslatedText} from "./utils/translate-text";

    interface TranslatedTextWindowProps {
        translatedText: TranslatedText[];
    }

    // Caveat: If an English word translates to more than one Dovahzul word then the first translation in the array is returned
    const {translatedText}: TranslatedTextWindowProps = $props();
</script>

<div class="translated-text">
    {#each translatedText as obj}
        <div class={obj.translated ? 'translated-word' : 'untranslated-word'}>{obj.dovahzul !== null ? obj.dovahzul[0] : obj.english}</div>
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
        display: grid;
        grid-template-columns: repeat(auto-fill,
        minmax(200px, 1fr));
        grid-gap: 2px;
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