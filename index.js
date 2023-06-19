console.clear();
console.log(`------------------------`);

//1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)

const number1 = 1;
const number2 = 2;

if (number1 == number2) {
    console.log(`Skaičiai number1 ir number2 yra lygūs`);
} else if (number1 >= number2) {
    console.log(`Skaičius number1 yra didesnis už number2`);
} else {
    console.log(`Skaičius number1 yra mazesnis už number2`);
}

console.clear();
console.log(`------------------------`);

// 2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.clear();
console.log(`------------------------`);

// 3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)

for (let i = -1; i <= 10; i++) {
    i += 1;
    console.log(i);
}

console.clear();
console.log(`------------------------`);

// 4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)

for (let i = 1; i <= 5; i++) {
    let randomNumber = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    console.log(randomNumber);
}

console.clear();
console.log(`------------------------`);

//5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)

while (true) {
    let randomNumber = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    console.log(randomNumber);

    if (randomNumber === 5) {
        break;
    }
}

 console.clear();
 console.log(`------------------------`);
//6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30.
// Surasti didžiausią masyvo reikšmę,
// NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)

 let = array = [];

 const arrayLenght = Math.floor(Math.random() * (30 - 20 + 1) + 20);

 console.log(arrayLenght);

 for (let i = 0; i < arrayLenght; i++) {
     array.push(Math.floor(Math.random() * (30 - 10 + 1) + 10)); 
 }

 console.log(array);



 let maxValue = 0;

 for (let i = 0; i < array.length; i++) {
    
     if (array [i] > maxValue ) {
         maxValue = array [i];
     }    
 }
 console.log(maxValue);

 console.clear();
 console.log(`------------------------`);

// 7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100.
// Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)

let = arrayLetters = [];

for (let i = 0; i < 100; i++) {
    const letter = Math.floor(Math.random() * (4 - 1 + 1) + 1);

    if (letter === 1) {
        arrayLetters.push(`A`);
    }

    if (letter === 2) {
        arrayLetters.push(`B`);
    }

    if (letter === 3) {
        arrayLetters.push(`C`);
    }

    if (letter === 4) {
        arrayLetters.push(`D`);
    }

}

let countA = 0;
let countB = 0;
let countC = 0;
let countD = 0;

for (let i = 0; i < arrayLetters.length; i++) {

    if (arrayLetters[i] === 'A') {
        countA += 1;
    }

    if (arrayLetters[i] === 'B') {
        countB += 1;
    }

    if (arrayLetters[i] === 'C') {
        countC += 1;
    }

    if (arrayLetters[i] === 'D') {
        countD += 1;
    }


}
console.log(arrayLetters);
console.log(`"arrayLetters" masyve "A" raidės yra vienetai: ${countA}`);
console.log(`"arrayLetters" masyve "B" raidės yra vienetai: ${countB}`);
console.log(`"arrayLetters" masyve "C" raidės yra vienetai: ${countC}`);
console.log(`"arrayLetters" masyve "D" raidės yra vienetai: ${countD}`);
