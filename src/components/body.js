import { html } from 'lit-html';
import { search } from './search';
import {list} from './list';

let data = [];

if(!data.length){
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then((responce) => responce.json())
        .then((json) => {
            console.log(json);
            data = json;
            // mando l'evento verso l'alto
            const ce = new CustomEvent('update-render',{
                bubbles:true
            });
            document.dispatchEvent(ce);
        });
}


const body = () => html`
    <section class="app-body">
        ${search()}
        ${list(data)}
    </section>
`;

export {
    body
}