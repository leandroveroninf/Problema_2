/**
 * 
 * @param {Arrays} arrays 
 * @returns {Arrays}
 * @description retornara un arrays con las url
 */
const obtenerUrlPokemon = (arrays) => arrays.map(({type}) => (type.url));

/**
 * 
 * @param {Arrays} arrays 
 * @returns {Arrays}
 * @description devuelve un array sin datos repetidos
 */
const sinRepetidos = (arrays) => {
    const set = new Set(arrays);
    return [...set];
}

/**
 * 
 * @param {Arrays} arrays 
 * @returns {Arrays}
 * @description devuelve un array con todos los nombres de tipos de los Pokemones
 */
const obtenerTypoPokemon = (arrays) => arrays.map(({type}) => type.name);



module.exports = {
    obtenerUrlPokemon,
    sinRepetidos,
    obtenerTypoPokemon,
}