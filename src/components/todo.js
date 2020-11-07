// gestisce il singolo todo
import {html} from 'lit-html';

const todo = (item) => html`<li id=${item.id}>
 <input type="checkbox" ?checked=${item.completed}> 
 ${item.title}
</li>`;

export {
    todo
}











