/* eslint-disable max-classes-per-file */
class CarA {
  name;

  static brand = 'Volvo';

  static setBrand(brand) {
    this.brand = brand;
  }

  constructor(name) {
    this.name = name;
  }
}

const a = new CarA('avanza');
const b = new CarA('brio');
// b.brand = 'Volvo';

console.log(a.brand, b.brand, CarA);
CarA.setBrand('Toyota');
console.log(CarA);
