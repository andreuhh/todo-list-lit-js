import { html, render } from 'lit-html';
import { app } from './components/app'

import './styles/main.scss';

console.log('Project started!')

//document.addEventListener('DOMContentLoaded', () => {
    //const today = (date) => html`<p>Oggi è il<strong>${date}</strong></p>`;
    //const getDate = new Date().toLocaleDateString();

    //render(today(getDate), document.querySelector('#tmpl'));

    //render(app(), document.querySelector('.container'));
//});

const doRender = () => {
    render(app(), document.querySelector('.container'));
}

document.addEventListener('update-render', doRender);
document.addEventListener('DOMContentLoaded', doRender);





