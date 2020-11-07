// raccoglie input utente e lo comunica all'esterno
import { html } from 'lit-html';

const doSearch = (event) => {
    const str = event.target.value.toLowerCase();
    console.log(str);

    const ce = new CustomEvent('usersearch',{
        bubbles: true,
        details: str, // details puo essere usato per passare dati
    });
}

const search = (userValue = '') => html`
    <form>
        <label for="search">Search: </label>
        <input 
            type="text" 
            name="search" 
            value=${userValue}
            @keyup=${doSearch}
        >
    </form>
`;

export {
    search
}