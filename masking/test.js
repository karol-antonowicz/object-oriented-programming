/*

// lsita osob w raz z numerami kont bankowych
// full name i account umber


class Person {
    constructor(name, number) {
        this._name = name;
        this._number = number;
    }
    get name() {
        return this._name;
    }
    set name(newName) {
        this._name = newName
    }
    get number() {
        return this._number
    }
    set number(number) {
        return this._number

    }
}

// creating new persons using Person clas

let person1 = new Person('Michal', '21458154914231425142540004')
let person2 = new Person('Karol', '12145815491423142514254784')



//function number - HIDING NUMBERS

function masking(number) {
let a = number.split("")                                     // rozdzielam do tablicy gdzie kazda cyfra zajmuje miejsce wtabeli
var lol = [];                                           // tworze pusta tabele
for (i = 2; i < (number.length - 4); i++)           // dla kazdego elementu tablicy 
lol.push('#')
var masked = lol.join("");
return number[0]+number[1]+masked + number.slice(-4); 

}
/// array of persons with data

var personList = [];
personList.push(person1,person2)

var personNumbers = [];
personNumbers.push(person1.name, masking(person1.number),person2.name, masking(person2.number))

//DOM 
//declaring values

divDisplay = document.getElementById('display')         // grabs the div

let makeSectionT = document.createElement('section')    // creates section tag 
                                                          // grabs the button #showButton

// empty array

var database = [];

// kalsa Render sluzy do mmetody wyrenderowania




var output = [];                                                    // output gdzie wrzuce numer konts
                                                                     // poutpu ze studentami

let a = personNumbers.forEach((x => output +=`<div>${x}</div>`))      //maps the teachersList for every element in the studentsList table it adds this line to output

let makeSection = document.createElement('section')  
divDisplay.appendChild(makeSection).classList.add('account')              // creates section element in DOM

document.getElementsByClassName('account')[0].innerHTML = output 


*/
class Person {
    constructor(fullName, accountNumber) {
        this._fullName = fullName;
        this._accountNumber = accountNumber;
    }
    get fullName() {
        return this._fullName;
    }
    get accountNumber() {
        return this._accountNumber.replace(this._accountNumber.slice(2, 22), ' **** **** **** **** ***** ');
    }
    set accountNumber(newParam) {
        this._accountNumber = newParam;
    }
}

const peopleList = [
    new Person('Michal', '21458154914231425142540004'),
    new Person('Karol', '12145815491423142514254784')
]



class Render {
    static renderList(listToRender, elementToRender) {
        const lol = document.getElementById(elementToRender);
        listToRender.map((currentElement) => {
            lol.innerHTML += `<div> Imię i nazwisko: ${currentElement.fullName} || Numer konta: ${currentElement.accountNumber} </div>`
        })
    }
}

Render.renderList(peopleList, 'list')