// МОДУЛЬ_10
                                        //    Задание №1
// value = prompt("Введите значение");
// y = +value;
// console.log(typeof y);
// if (y % 2==0)
//     console.log("Это четное число")
// else 
//     console.log ("Это нечетное число");

                                         //   Задание №2
// x = '';
// typeof x;
// y = typeof x;
// switch (y){
//     case 'number':
//         console.log('X- это число');
//         break;
//     case 'string':
//         console.log('Х- это строчные данные');
//         break;
//     case 'boolean':
//         console.log('X- это логический тип');
//         break;   
//     default:
//         console.log('Тип x не определён');
// }
                                        //   Задание №3
// function reverseString (str){
//     let s = ``;
//     for(let x = str.length - 1; x >= 0; x--){
//         s += str[x];
//     }
//         return s; 
//     }
//     console.log(reverseString(`hello`))
                                          // Задание №4  
// let x = 100;
// console.log(Math.random()*x);
                                          // Задание №5

// let lostNums = [1, 2 ,6 , 8, 5, 16];
// console.log(lostNums.length);
// lostNums.map(function(item, index, arr){
//   console.log(item);})
                                          // Задание №6
 
const yourArray = [1, 2, 3, 4, 5,]
const yourArrayWithoutDuplicates = [...new Set(yourArray)]
 if (yourArray.length !== yourArrayWithoutDuplicates.length)
   console.log (`true`)
 else
   console.log (`false`);
                    
//                                           Задание №7
// let arr = [1, 2, 3, 4, 5];

// let result = arr.filter(function(elem) {
//     if (elem % 2 !== 0) {
//          return true;
//     } else {
//          return false;
//     }
//  });
                                                        
// console.log(result);

// let arr = [1, 2, 3, 4, 5];

// let result = arr.filter(function(elem) {
// 	if (elem % 2 == 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// });
// console.log(result);
                                          // №Задание №8
// let myMap = new Map();
// myMap.set('key', 'prop');
// myMap.set(1, 'prop2');
// myMap.set(true, 123);
// for (let pair of myMap) {
//   console.log(`Ключ = ${pair[0]}, значение = ${pair[1]}`);
// }