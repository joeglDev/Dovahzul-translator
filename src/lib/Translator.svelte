<script lang="ts">
    let translatedText = $state("");
    let inputText = $state("");

    $effect(() => {
        translatedText = inputText
    });

    /* TODO: replace words in real time using a function*/
    /* TODO: function to export or print text */
    /*TODO: english <-> Dovahzul toggle switch class in .translated-text and function used to translate will need to reverse */
</script>


<section>
    <textarea class="translated-text">{translatedText}</textarea>
    <input bind:value={inputText} placeholder="Enter test to translate here..." class="text-input"/>
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
    }

    .text-input {
        width: 60vw;
        height: 10vh;
        text-align: center;
        font-size: 1.5rem;
    }
</style>