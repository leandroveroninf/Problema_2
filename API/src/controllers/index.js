const {  searchTypes, searchAllTypesPokemon, searchPokemonName } = require("./consultasAPI");
const { obtenerUrlPokemon, sinRepetidos, obtenerTypoPokemon, obtenerPesoPokemon } = require("./Utilidades");




class Pokemon{

    constructor(){

    }

    /**
     * 
     * @param {String} type 
     * @returns {Arrays}
     * @description Busca en la API, y devuelve todos los Pokemones que pertenecen al tipo, normal, electrico, etc
     * 
     */
    async totalPokemonTypes(type){
        const resultTypes = await searchTypes();

        const {url} = resultTypes.find((elm) => elm.name === type);

        const arrPokFilt = await searchAllTypesPokemon(url);

        return arrPokFilt;
    }


    async searchDosTypes(type1, type2){
        let id = 0;
        const pokemons = []
        while(id <= 100){
            const {name, types} = await searchPokemonName(++id);
            const arrType = obtenerTypoPokemon(types);

            if(arrType.includes(type1) && arrType.includes(type2)){
                pokemons.push({name, types: arrType})
            }
        }

        return pokemons.length === 0 ? "Not Found" : pokemons

    }


    /**
     * 
     * @param {String} pokemon1 
     * @param {String} pokemon2 
     */
    async searchDosTypesPokemon(pokemon1, pokemon2){

        const typePok1 = await searchPokemonName(pokemon1);
        const typePok2 = await searchPokemonName(pokemon2);

        
        const pokmURL1 = obtenerUrlPokemon(typePok1.types);
        const pokmURL2 = obtenerUrlPokemon(typePok2.types);
        
        const pokemonsTypes = sinRepetidos([...pokmURL1, ...pokmURL2])
        const result = [];

        for (let i = 0; i < pokemonsTypes.length; i++) {
            
            const dt = await searchAllTypesPokemon(pokemonsTypes[i]);
            result.push(...dt)
        }

        return result;

    }

    /**
     * 
     * @param {String} name 
     * @returns {Number}
     */
    async searchNameNumber(name){

        const { id } = await searchPokemonName(name);
        
        return id

    }

    /**
     * 
     * @param {Number} id 
     * @returns {Arrays}
     */
    async searchStatsId(id){
        const { stats } = await searchPokemonName(id);
        
        return stats
    }

    /**
     * 
     * @param {Arrays} array 
     * @param {Function} cb 
     */
    async orderPokemonsTypePeso(array, cb){

        const pokemons = [];

        for (let i = 0; i < array.length; i++) {
            const id = array[i];
            const {name, weight, types} = await searchPokemonName(id);

            pokemons.push({
                name, 
                tipo: obtenerTypoPokemon(types),
                weight
            });
            
        }

        for (let i = 0; i < pokemons.length; i++) {
            for (let j = i + 1; j < pokemons.length; j++) {
              if (cb(pokemons[i], pokemons[j])) {
                const aux = pokemons[i];
                pokemons[i] = pokemons[j];
                pokemons[j] = aux;
              }
            }
          }


        return pokemons;

    }

    /**
     * 
     * @param {Number} id 
     * @param {String} type 
     * @returns {Boolean}
     * @description Comprueba que si el Pokemon pertenece al tipo pasado por parametro
     */
    async existe(id, type){
        const {types} = await searchPokemonName(id);
        const arrType = obtenerTypoPokemon(types);
        return arrType.includes(type);

    }

}


module.exports = Pokemon;