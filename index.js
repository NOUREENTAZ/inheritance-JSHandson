//Answer to Q1//


const Parent = {
        display: function() {
            console.log(`${this.name} and age is ${this.age}`);
        }
    }
    // const Child1 = Object.create(Parent);
    // Child1.name = "EA23"
    // Child1.age = 24
    // Child1.display();

const Child2 = Object.create(Parent);
Child2.name = "Noureentaz"
Child2.age = 25
Child2.display();



//Answer to Q2

const Par = {
    display: function() {
        console.log("Modinsaheb propery");
    }
}
Par.display();

const child1 = Object.create(Par)
child1.name = function() {
    console.log("Nazeerahmed Property");
}

child1.name();
child1.display();

const child2 = Object.create(child1);
child2.name();
child2.display();


// const ArrayNew = new Array()
// console.log(ArrayNew)





// Q3

Array.prototype.sum = function() {
    let result = 0;
    for (let i = 0; i < this.length; i++) {
        result += this[i];
    }
    return result;
};

let N1 = [4, 20, 5, 8];
let N2 = [7, 5, 9, 1, 8, 5, 6];

let sum1 = N1.sum();
let sum2 = N2.sum();

console.log(sum1);
console.log(sum2);


let addition = N1.sum() + N2.sum()
console.log(addition);


//Q4

class student {
    constructor(name, rollno, division) {
        this.name = name;
        this.rollno = rollno;
        this.division = division;
    }

    set setFriend(friend) {
        this.friend = friend;
    }
}

let obj = new student("Noureentaz", 50, "A");
obj.friend = "Nagaveni"
console.log(obj)

class senior extends student {
    constructor() {
        super("Sujeen", 49, "B")
    }
}
let seniorobj = new senior();
console.log(seniorobj)
