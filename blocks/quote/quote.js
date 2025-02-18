export default function decorate(block) {
  // quote section
  const quoteDiv = block.querySelector(':scope > div > div');
  if (quoteDiv) {
    const text = `"${quoteDiv.innerText}"`;

    const blockquote = document.createElement('blockquote');
    const p = document.createElement('p');

    p.innerText = text;
    blockquote.innerHTML = p.outerHTML;

    quoteDiv.parentElement.replaceWith(blockquote);
  }

  // author section
  const authorDiv = block.querySelector(':scope > div > div');
  if (authorDiv) {
    const p = document.createElement('p');
    const em = document.createElement('em');

    em.innerText = `- ${authorDiv.innerText}`;

    p.innerHTML = em.outerHTML;

    authorDiv.parentElement.replaceWith(p);
  }
}
