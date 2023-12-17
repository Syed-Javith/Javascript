function printNumbers(){
    console.log(`a = ${a} of type ${typeof(a)} and b = ${b} type of ${typeof(b)}`);
}

var a = 2;

let b = 5;

const c = 3.14;

printNumbers();

console.log(a+b);

console.log(a-b);

console.log(a*b);

console.log(a/b);

console.log(a**b);

console.log(a===b);

b = '3';
a=12;

printNumbers();

console.log(a==b);

console.log(a===b);

console.log(a<<2);

console.log(a>>2);

var i = ++a;

console.log(i);
console.log(a);

console.log("\n\n*** strings ***\n\n");
console.log("string".padEnd(10,"*").padStart(20,"*"));

a = "Hello World";

console.log(a.toUpperCase() + " " + a.toLowerCase());

console.log(a.replace( /e/i,'o'));

console.log(a.indexOf('o'));

console.log(a.lastIndexOf('o'));

console.log(a.length);

console.log(a.split("o"));

console.log(a.substring(1,9));

console.log(a.substr(1,8));

console.log("\n\nObjects in JS");

console.log("using literals\n\n");

const person = {
    name : "Syed Javith",
    age : 20,
    rollNumber : 278 ,
    address : {
        city : 'Kallakurichi',
        doorNumber : '1/292'
    }
};

console.log(person.name + " " + person['age']);

console.log(person.address.city + " " + person['address']['doorNumber']);

const staff = {
    name : "Syed Javith",
    age : 20,
    rollNumber : 278 ,
    address : {
        city : 'Kallakurichi',
        doorNumber : '1/292'
    },
    tellMeAboutU : function () {
        console.log(`I am ${this.name} from ${this.address?.city}`);
    }
};

staff.tellMeAboutU();

console.log("\n\nusing functions\n\n");

function Human() {
    this.name = 'Syed javith',
    this.age = 20
    this.getAge = () => {
        console.log(this.name + " " + this.age);
    }

}

const human = new Human();
human.getAge();

function Student(name,age) {
    this.name = name,
    this.age = age
    this.getAge = () => {
        console.log(this.name + " " + this.age);
    }

}

const s = new Student('Syed',21);
s.getAge();

console.log("ES6");

console.log("\n\nspread operator\n\n");

const arr = [ 5 , 6 ,[ 8 , 9] , 10 ]

const arr2 = [...arr , 11]

console.log(arr2);

const obj = {
    a : 2 ,
    b : 4,
    c : {
        d : 5 ,
        e : 7 ,
        f : {
            g : 10
        }
    }
}

console.log({...obj , c : 7 });

console.log("\n\nshallow copy\n\n");

const shallow = { ...obj }

shallow.c.d = -1

console.log(shallow);
console.log(obj);

shallow.b = -2

console.log(shallow);
console.log(obj);

console.log("\n\ndeep copy\n\n");

const deep = JSON.parse(JSON.stringify(obj))

deep.c.d = 10

console.log(deep);
console.log(obj);