import { html } from '../node_modules/lit-html/lit-html.js'

import { getAllMemes } from '../api/data.js'

const catalogTemplate = (memes) => html`
<!-- All Memes Page ( for Guests and Users )-->
<section id="meme-feed">
    <h1>All Memes</h1>
    <div id="memes">

        ${memes.length == 0 ? html`<p class="no-memes">No memes in database.</p>`
          : memes.map(memeTemplate)
        }

    </div>
</section>
`;


export async function catalogPage(ctx) {

    const memes = await getAllMemes();
    ctx.render(catalogTemplate(memes));
}


const memeTemplate = (meme) => html`
<div class="meme">
    <div class="card">
        <div class="info">
            <p class="meme-title">${meme.title}</p>
            <img class="meme-image" alt="meme-img" src=${meme.imageUrl}>
        </div>
        <div id="data-buttons">
            <a class="button" href="/details/${meme._id}">Details</a>
        </div>
    </div>
</div>
`;