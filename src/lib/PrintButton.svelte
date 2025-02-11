<script lang="ts">
  import type {TranslatedText} from "../utils";

  interface PrintButtonProps {
    inputText: string;
    translatedText: TranslatedText[];
  }

  const {inputText, translatedText}: PrintButtonProps = $props();

  const translatedSentence = $derived.by(() => translatedText.map(({dovahzul, eng}) => {
    return dovahzul ? dovahzul : eng}).join(" ")
  );

  const printContent = () => {
    try {
      const newWindow = window.open('', '_blank');

      if (newWindow) {
        newWindow.document.write(`
          <!DOCTYPE html>
          <html lang="en">
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Printable Content</title>
              <style>
@font-face { font-family: "Dovahzul"; src: url("../../fonts/dragon_alphabet.woff") format('woff'); }

h1 {
margin: auto;
text-align: center;
}

h2 {
margin: auto;
text-align: center;
}

.input-text {
  text-align: center;
    font-size: 1rem;
}

  .dovahkul-text {
    font-family: "Dovahzul", serif;
    text-align: center;
    font-size: 1rem;
  }
              </style>
            </head>
            <body>
            <h1>Translated text</h1>
            <h2>Original text</h2>
            <p class="input-text">${inputText}</p>
            <h2>Translated text</h2>
            <p class="dovahkul-text">${translatedSentence}</p>
            </body>
          </html>`);
        newWindow.document.close();
        newWindow.print();
        newWindow.close();
      } else {
        console.error('Failed to open new window');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };
</script>

<button type="submit" class="print-button" onclick={printContent}>
  Print translated content
</button>

<style>
  .print-button {
    margin: 5vh;
  }
</style>
