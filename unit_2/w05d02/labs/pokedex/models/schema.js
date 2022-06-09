const mongoose =  require('mongoose');

// creates Schema
const pokemonSchema = new mongoose.Schema({
    id: {type:String, required:true}, 
    name: {type:String, required:true},
    img: String,
    type: {type:Array, required:true} ,
    stats: {
        hp: String,
        attack: String,
        defense: String,
        spattack: String,
        spdefense: String,
        speed: String,
        },
    moves: {
        level: [
            {
            learnedat: String,
            name:String,
            gen: String,
            },
        ]
    },
    damages:{
        normal: String,
        fire: String,
        water: String,
        electric: String,
        grass: String,
        ice: String,
        fight: String,
        poison: String,
        ground: String,
        flying: String,
        psychic: String,
        bug: String,
        rock: String,
        ghost: String,
        dragon: String,
        dark: String,
        steel: String,
        },
    misc:{
        sex: {
        male: String,
        female: String,
        },
    abilities: {
        normal: [
        String,
        ],
        hidden: [
        String,
        ]
    },
    classification: String,
    height: String,
    weight: String,
    capturerate: String,
    eggsteps: String,
    expgrowth: String,
    happiness: String,
    evpoints: [
        String,
        ],
    fleeflag: String,
    entreeforestlevel: String,
    }
}) 

  //  creates a collection 
const Pokemon = mongoose.model('pokemon', pokemonSchema);
module.exports = Pokemon
















