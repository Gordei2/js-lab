const fraza = "I went to do lab work";
console.log(fraza);
//
const numb_1 = 25;
const numb_2 = 25;
//
console.log(`numb_1 = ${numb_1} and numb_2 = ${numb_2}`);
console.log(`numb_1 + numb_2 = ${numb_1 + numb_2}`);
//
console.log(fraza.toUpperCase());
console.log(fraza.toLowerCase());
//
 console.log(`numb_1 + numb_2 = ${numb_1 + numb_2}
numb_1 - numb_2 = ${numb_1 - numb_2}
numb_1 * numb_2 = ${numb_1 * numb_2}
numb_1 / numb_2 = ${numb_1 / numb_2}
numb_1^2 = ${Math.pow(numb_1, 2)}
numb_1 % numb_2 = ${numb_1 % numb_2}`);
// Проверить есть ли указанное слово в предложении (true/false)
console.log(fraza.includes("Programmer"));
// Получить одно первое слово из предложения 
console.log(fraza.split(" ", 1));