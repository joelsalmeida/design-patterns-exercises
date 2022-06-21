import ElectricPokemonFactory from './concrete/ElectricPokemonFactory';
import FirePokemonFactory from './concrete/FirePokemonFactory';

const electric = new ElectricPokemonFactory();
const fire = new FirePokemonFactory();

const firstPokemon = electric.createPokemon();
const secondPokemon = fire.createPokemon();

console.log('### ELECTRIC:');
console.log(firstPokemon.sayHello());

console.log('### FIRE:');
console.log(secondPokemon.sayHello());
