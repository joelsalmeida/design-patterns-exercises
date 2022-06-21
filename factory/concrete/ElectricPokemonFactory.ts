import IPokemonProduct from '../contracts/IPokemonProduct';
import PokemonCreator from '../contracts/PokemonCreator';
import Pokemon from './Pokemon';

class ElectricPokemonFactory implements PokemonCreator {
  private generateName() {
    const names = ['Electabuzz', 'Zapdos', 'Magnemite'];
    return names[Math.floor((Math.random() * names.length))];
  }

  private generateLevel() {
    return Math.floor((Math.random() * 10) + 1);
  }

  public createPokemon(): IPokemonProduct {
    return new Pokemon(this.generateName(), this.generateLevel());
  }
}

export default ElectricPokemonFactory;
