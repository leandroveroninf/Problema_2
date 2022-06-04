const axios = require("axios");

/**
 * 
 * @param {String} url 
 * @returns Los datos de la consulta
 */
const consultaAPI = async (url) => {
    try {
        const { data } = await axios.get(url);
        return data;
    } catch (error) {
         throw Error(error)
    }
}


/**
 * 
 * @returns {Arrays}
 * @description retornara todos los tipos de Pokemones que hay
 * 
 */
const searchTypes = async () =>{

    try {

        const {results} = await consultaAPI("https://pokeapi.co/api/v2/type");
        
        return results;
        
    } catch (error) {
        throw Error(error)
    }

}

/**
 * 
 * @param {String} url 
 * @returns {Arrays}
 */
const searchAllTypesPokemon = async (url) => {
    try {
        const { pokemon } = await consultaAPI(url);

        return pokemon;

    } catch (error) {
        throw Error(error)
    }
}
/**
 * 
 * @param {String} name 
 * @returns {Arrays}
 */
const searchPokemonName = async (name) => {
    try {
        const pokemon = await consultaAPI(`https://pokeapi.co/api/v2/pokemon/${name}`);
       
        return pokemon

    } catch (error) {
        throw Error(error)
    }
}


module.exports = {
    searchTypes,
    searchAllTypesPokemon,
    searchPokemonName
}

