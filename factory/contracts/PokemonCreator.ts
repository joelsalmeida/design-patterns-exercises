import IPokemonProduct from './IPokemonProduct';

abstract class PokemonCreator {
  public abstract createPokemon (): IPokemonProduct;
}

export default PokemonCreator;
