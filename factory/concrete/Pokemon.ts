import IPokemonProduct from '../contracts/IPokemonProduct';

class Pokemon implements IPokemonProduct {
  name: string;

  level: number;

  constructor(name: string, level: number) {
    this.name = name;
    this.level = level;
  }

  sayHello(): string {
    return `${this.name}: Hello, i'm lvl: ${this.level}!`;
  }
}

export default Pokemon;
