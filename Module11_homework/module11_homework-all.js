                                        //  Задание №1
// function oddOrEven() {
//     let arr = [1, 2, 3, 4, 5, 6, 7, 8 ,9, null, "stat", 0, 16, 0, 0]
//     let odd = 0;
//     let even = 0;
//     let zero = 0;
//     for (i = 0; i < arr.length; i++){
//       if (typeof arr[i] == "number" && arr[i] % 2 == 0 && arr[i] !== 0){ even++;}
//        else if (typeof arr[i] == "number" && arr[i] % 2 !== 0 ){ odd++;}
//         else if (typeof arr[i] == "number" && arr[i] == 0 ){zero++;}  
//       }
//     console.log(`Четных чисел: ${even}`);
//     console.log(`Нечетных чисел: ${odd}`);
//     console.log(`Нулей: ${zero}`);
// }
    
//     oddOrEven();
                                       //  Задание №2
// function isPrime(num){
//     if (num < 2){
//         console.log("Это не простое число");}
//         else if (num > 1000){
//         console.log("Данные не верны");}
//         else {
//         for (let i = 2; i < num; i++){
//              if (num % 2 === 0){
//              console.log("Это не простое число");}
//              else {console.log("Это простое число");}         }
//         }
//     }
//     isPrime(1000);
                                        // Задание №3
// const sumOfTwo = () => {
//     const sum = (a, b) => a + b;     
//     return sum;                     
//     };
                                          
//     const sum = sumOfTwo();   
//     console.log(sum(1, 5));                            

                                        // Задание №4
// function showNumbers(a, b) {
//     let current = a;
//     let timerId = setInterval(function() {
//         console.log(current);
//         if (current == b) {
//         clearInterval(timerId);
//         }
//          current++;
//      }, 1000);
//     }
//     showNumbers(5, 15);
                                         // Задание №5
// const numberDegree = (x, n) => {
// if (Number.isInteger(x) === true && Number.isInteger(n) === true && x > 0 && n > 0){
// console.log(x ** n);}
// else {
//     console.log("Введите натуральное число");
// }
// }
// numberDegree(5, 2);                                       
