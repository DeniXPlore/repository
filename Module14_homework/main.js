                                                //    МОДУЛЬ 14

                                            //   Задание 14.1(1)  
// const parser = new DOMParser();

// const xmlString = `
//   <list>
//   <student>
//     <name lang="en">
//       <first>Ivan</first>
//       <second>Ivanov</second>
//     </name>
//     <age>35</age>
//     <prof>teacher</prof>
//   </student>
//   <student>
//     <name lang="ru">
//       <first>Петр</first>
//       <second>Петров</second>
//     </name>
//     <age>58</age>
//     <prof>driver</prof>
//   </student>
//  </list>
// `;

// const xmlDOM = parser.parseFromString(xmlString, "text/xml");


// const nameNode = xmlDOM.querySelector("name");
// const firstNode = nameNode.querySelector("first");
// const secondNode = nameNode.querySelector("second");
// const ageNode = xmlDOM.querySelector("age");
// const profNode = xmlDOM.querySelector("prof");

// const firstNode1 = xmlDOM.getElementsByTagName('first')[1];
// const secondNode1 = xmlDOM.getElementsByTagName('second')[1]; 
// const ageNode1 = xmlDOM.getElementsByTagName('age')[1];
// const profNode1 = xmlDOM.getElementsByTagName('prof')[1];

// const langAttr = nameNode.getAttribute('lang');
// const langAttr1 = xmlDOM.getElementsByTagName('name')[1].getAttribute('lang');

// const list = [{
//    name: firstNode.textContent +" "+ secondNode.textContent,
//    age: Number(ageNode.textContent),
//    prof: profNode.textContent,
//    lang: langAttr
//  },
//    {
//    name: firstNode1.textContent +' '+ secondNode1.textContent, 
//    age: Number(ageNode1.textContent),
//    prof: profNode1.textContent,
//    lang: langAttr1
//    }
// ]
// console.log('list', list);
                                        //   Задание 14.1(2)
 
// const jsonString = `
// {
//     "list": [
//     {
//     "name": "Petr",
//     "age": "20",
//     "prof": "mechanic"
//     },
//     {
//     "name": "Vova",
//     "age": "60",
//     "prof": "pilot"
//     }
//     ]
// }
// `;                
                                        
// const data = JSON.parse(jsonString);                                        
// const newlist = data.list;                                        
                                        
// const list = [{
//     name: newlist[0].name,
//     age: newlist[0].age,
//     prof: newlist[0].prof
// },
//     {
//     name: newlist[1].name,
//     age: newlist[1].age,
//     prof: newlist[1].prof,
// }]
// console.log('list', list);


                                            // ЗАДАНИЕ №3(+HTML)
//  const resultNode = document.querySelector('.j-result');
//  const btnNode = document.querySelector('.j-btn-request');  
//  const url = 'https://picsum.photos/v2/list?limit='
//  const inputNode = document.querySelector('input'); 
   
//  function checkAndGo(){
//   const inputResult = inputNode.value;
//   if (1 <= inputResult && inputResult <= 10) {
//     const fullUrl = url + inputResult;
//     useRequest(fullUrl, displayResult);   
//   } else {
//     resultNode.innerHTML = `Число вне диапазона от 1 до 10`
//   }
//  }

//  function useRequest(url, callback) {    
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', url, true);    
//     xhr.onload = function() {
//       if (xhr.status != 200) {
//         console.log('Статус ответа: ', xhr.status);
//       } else {
//         const result = JSON.parse(xhr.response);
//         if (callback) {
//           callback(result);
//         }
//       }
//     };    
//     xhr.onerror = function() {
//       console.log('Ошибка! Статус ответа: ', xhr.status);
//     };    
//     xhr.send();
//   };
  
  
//   function displayResult(apiData) {
//     let cards = '';   
//     apiData.forEach(item => {
//       const cardBlock = `
//         <div class="card">
//           <img src="${item.download_url}" class="card-image"/>          
//         </div>
//       `;
//       cards = cards + cardBlock;
//     });      
//     resultNode.innerHTML = cards;
//   }
  
  
//   btnNode.addEventListener('click', () => {   
//     checkAndGo(url)
//   })


                                                      // ЗАДАНИЕ №4(14.4)
 
// function usePromise() {  
//   const myPromise = new Promise((resolve, reject) => {    
//     setTimeout(() => {    
//       let x = Math.floor(Math.random() * 101);
//       if(x%2==0){resolve(x)}else{reject(x)} }, 3000)
//    })
 
// myPromise
//     .then((result) => {
//       console.log('Завершено успешно. Сгенерированное число — '+ result);
//     })
//     .catch((error) => {
//       console.log('Завершено с ошибкой. Сгенерированное число — '+ error);
//     })  
// }
// usePromise()                                                 

                                                        // ЗАДАНИЕ №4(14.5)(+html)       

//   const resultNode = document.querySelector('.j-result');
//  const btnNode = document.querySelector('.j-btn-request'); 
//  const inputNode = document.querySelector('.input'); 
//  const inputNode2 = document.querySelector('.input2');   
 
//  function checkAndGo(){
//   const inputResult = inputNode.value;
//   const inputResult2 = inputNode2.value;  
//   if (100 <= inputResult && inputResult <= 300 && 100 <= inputResult2 && inputResult2 <= 300) {
//     const fullUrl = 'https://picsum.photos/'+inputResult+'/'+inputResult2    
//     fetch(fullUrl)
//     .then((response) => {
//       resultNode.innerHTML = `<img src=${response.url}>`;
//    })
//    .catch(() => {
//       resultNode.innerHTML = `error`;
//    })
// } else {
//    resultNode.innerHTML = `Одно из чисел вне диапaзона от 100 до 300`;
// }
// }; 
 
//  btnNode.addEventListener('click', () => {   
//  checkAndGo()
// })

                                                //  Финальное задание +html           
const resultNode = document.querySelector('.j-result');
const btnNode = document.querySelector('.j-btn-request'); 
const inputNode = document.querySelector('.input'); 
const inputNode2 = document.querySelector('.input2');   

function checkAndGo(){
 const inputResult = +inputNode.value;
 const inputResult2 = +inputNode2.value;  
 if  (1 > inputResult2 || inputResult2 > 10 || (typeof(inputResult2) !== 'number')){
    resultNode.innerHTML = `Лимит вне диапазона от 1 до 10`;}
 else if (1 > inputResult || inputResult > 10 || (typeof(inputResult) !== 'number')){
    resultNode.innerHTML = `Номер страницы вне диапазона от 1 до 10`;}   
 else if ((1 > inputResult || inputResult > 10 || (typeof(inputResult) !== 'number')) && 
 (1 > inputResult2 || inputResult2 > 10 || (typeof(inputResult2) !== 'number'))) {
    resultNode.innerHTML = `Номер страницы и лимит вне диапазона от 1 до 10`; } 
 else {    
    const fullUrl = 'https://picsum.photos/v2/list?page='+inputResult+'&limit='+inputResult2
    fetch(fullUrl)
   .then((response) => {   
         resultNode.innerHTML =`<img src=${response.url}>`;
         localStorage.setItem('name', 'response');
  })
  .catch(() => {
     resultNode.innerHTML = `error`;
  })
 }
}
 btnNode.addEventListener('click', () => {   
checkAndGo()
})