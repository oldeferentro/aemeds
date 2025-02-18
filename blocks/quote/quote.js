export default function decorate(block) {
    //quote section
    const quoteDiv = block.querySelector(':scope > div > div');
    if (quoteDiv) {
        const blockquote = document.createElement('blockquote');
        blockquote.innerHTML = quoteDiv.innerHTML;

        console.log(blockquote);

        quoteDiv.parentElement.replaceWith(blockquote);
    }

    //author section
    const authorDiv = block.querySelector(':scope > div > div');
    if (authorDiv) {
        const p = document.createElement('p');
        p.innerHTML = `<strong><em> - ${authorDiv.innerText}</em></strong>`;

        authorDiv.parentElement.replaceWith(p);
    }
}