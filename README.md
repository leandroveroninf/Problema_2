# Problema_2

Problema 2:  Genere una serie de funciones (Una por cada ítem) que consuma de la página de https://pokeapi.co/ y retorne lo siguiente:
Suma total de pokemones por tipo, debe recibir el tipo en string.
Dado 2 tipos de pokémon retornar todos los pokemones que cumplen con esos 2 tipos.
Dado el nombre de un pokémon retornar el número del mismo.
Dado el número de un pokémon retornar un objeto con sus 6 stats base.
Realizar una función que reciba un arreglo de números (Ids de pokémon) y un ordenador y retorne los pokémon en un arreglo con su nombre, tipo y peso ordenados según se indique por la función por uno de estos 3 indicadores.
Recibir un número y un tipo (de pokémon) y retornar un true o false si el pokémon de ese número posee este tipo.


* Ejecucion del programa
    * npm i
    * npm start

Utilizar posman o extencion que permita mandar datos por body

* Rutas
    * /:type »»» Se pasa por params el tipo de pokemon y devolvera la suma del total que corresponda a ese tipo.
    * /iguales/:type1/:type2 »»» Se pasa por params dos tipos y devolvera los que coincida con esos dos tipos (La forma implementada se tarda mucho porque no entiendo bien la API, sino la desarrollaria de otras formas mas optima).
    * /pokemon/:nameId »»» Se pasa por params, si se pasa un nombre devolvera el numero del id del Pokemon. Si se pasa un numero devolvera los 6 stats base.
    * /pokemones/typo-peso/ »»» Se pasa por body (  { "ids": [1,14, 25, ...] }  ), se pasa los id necesarios y devulve los pokemones ordenados, (en este caso realice yo un ordenamiento pero la funcion se puede cambiar y funcionar igual);
    * /existe/:id/:type »»» Se pasa por params, el id del pokemon y el tipo que se quiere comparar, devolvera true si lo encuentra de lo contrario false.
