import { html } from 'lit-html';
import { search } from './search';
import {list} from './list';

let data = [];
let displayData = [];

const dispatchRender = () => {
    // mando l'evento verso l'alto
    const ce = new CustomEvent('update-render',{
        bubbles:true
    });
    document.dispatchEvent(ce);
}

if(!data.length){
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then((responce) => responce.json())
        .then((json) => {
            //console.log(json);

            data = json;
            displayData = json;

            dispatchRender();
        });
}

document.addEventListener('usersearch', (event) => {
    console.log(event);
    const value = event.detail;

    displayData = data.filter((item) => 
        item.title.search(value) > -1); // -1 perchè torna indice stringa e non valore boolean

        //console.log(displayData);
        dispatchRender();
});


const body = () => html`
    <section class="app-body">
        ${search()}
        ${list(displayData)}
    </section>
`;

export {
    body
}