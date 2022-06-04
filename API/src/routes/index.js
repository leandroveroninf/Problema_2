const {Router} = require("express");
const Pokemon = require("../controllers");
const router = Router();
const pokemon = new Pokemon();


router.get("/:type", async (req, res)=>{

    const { type } = req.params;
    const result = await pokemon.totalPokemonTypes(type);

    res.json(result);
})


router.get("/iguales/:type1/:type2", async (req, res)=>{
    const {type1, type2} = req.params;

    const result = await pokemon.searchDosTypes(type1, type2);

    res.json(result)

})

router.get("/pokemon/:nameId", async (req, res)=>{
    const {nameId} = req.params;
    if(isNaN(nameId)){
        const result = await pokemon.searchNameNumber(nameId);
        res.json(result);

    }else{
        const result = await pokemon.searchStatsId(nameId);
        res.json(result);
    }

})

router.get("/pokemones/typo-peso/", async (req, res)=>{
    const {ids} = req.body;
    const ordernPokemos = await pokemon.orderPokemonsTypePeso(ids, (pok1, pok2) => pok1.weight > pok2.weight);

    res.json(ordernPokemos)
})

router.get("/existe/:id/:type", async (req, res)=>{
    const {id, type} = req.params;

    const bool = await pokemon.existe(id, type);

    res.json(bool);
})


module.exports = router;