// let str = "";
// console.log(!!str);

// let r = /azad/;
// console.log(r);
// console.log(r.source);

class person {
  constructor(name1, age) {
    this.name1 = name1;
    this.age = age;
  }
  greed() {
    return `my name  ${this.name1}  and my age  ${this.age}`;
  }
}
const person2 = new person("azad", 29);
const person3 = new person("tamal", 35);
console.log(person2.greed());
// console.log(person3.greed());
