<script lang="ts">
    import type {TranslatedText} from "./utils/translate-text";
    import type {TranslatedTextWindowProps} from "./translated-text-window-props.types";

    const {translatedText, translateEnglishToDovahzul}: TranslatedTextWindowProps = $props();

    const getTranslatedWordToDisplay = (obj: TranslatedText) => {
        if (translateEnglishToDovahzul) {
            return obj.dovahzul !== null ? `${obj.dovahzul[0]} ` : `${obj.english} `;
        }

        return obj.english !== null ? `${obj.english} ` : `${obj.dovahzul?.[0]} `;
    };
</script>

{#each translatedText as obj, index (index)}
    <div class={obj.translated ? 'translated-word' : 'untranslated-word'}>
        {getTranslatedWordToDisplay(obj)}
    </div>
{/each}


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