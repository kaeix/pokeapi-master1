//Make a function that will go to the API and get the data
// Path: pokeapi/src/services/getdata.jsx

import axios from 'axios'

async function getData() {
    await axios.get('https://dev-api-teste.mandarin.com.br/pokemons')
    .then((response) => {
        console.log(response.data.results);
        }
    )
    .catch((error) => {
        console.log(error);
        }
    )

}