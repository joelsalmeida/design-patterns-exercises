import Aircraft from './Aircraft';
import Boat from './Boat';
import Car from './Car';

const jeep = new Car('Jeep');
console.log(jeep);
jeep.move();

const mustang = new Aircraft('P-51 Mustang');
console.log(mustang);
mustang.move();

const carraca = new Boat('Carrack');
console.log(carraca);
carraca.move();
