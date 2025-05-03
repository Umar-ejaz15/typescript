abstract class animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  abstract display(this: animal): void;
}

class dog extends animal {
  display(this: dog) {
    console.log(`${this.name} is a dog`);
  }
}
class cat extends animal {
  display(this: cat) {
    console.log(`${this.name} is a cat`);
  }
}
const dog1 = new dog("tommy");
const cat1 = new cat("kitty");
dog1.display();
cat1.display();
