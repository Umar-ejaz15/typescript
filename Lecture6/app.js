"use strict";
class animal {
    constructor(name) {
        this.name = name;
    }
}
class dog extends animal {
    display() {
        console.log(`${this.name} is a dog`);
    }
}
class cat extends animal {
    display() {
        console.log(`${this.name} is a cat`);
    }
}
const dog1 = new dog("tommy");
const cat1 = new cat("kitty");
dog1.display();
cat1.display();
