var prev, next, images, i, knopki, chang_color;

prev = document.getElementById('prev');
next = document.getElementById('next');

images = document.querySelectorAll('img');


knopki = document.getElementsByClassName('slider');

knopki = Array.from(knopki);




var block = document.getElementsByClassName('blok-knopok');


// var pop = function(i){
//     knopki[i].onclick = function(){
//         for (let j = 0; j < arr; j++) {
//             knopki[j].style.backgroundColor = '';
//             images[j].style.display = 'none';                       
//         };
//         knopki[i].style.backgroundColor = 'green';
//         images[i].style.display = 'block';
//     };
// };

var a;

knopki.forEach(function(name,i,knopki){
    name.onclick = function(){
        var arr = knopki.length;
            for (let j = 0; j <= arr; j++) {
                if(j < arr){
                knopki[j].style.backgroundColor = '';
                images[j].style.display = 'none';
                }
                else{
                knopki[0].style.backgroundColor = '';
                knopki[arr -1].style.backgroundColor = '';
                images[arr-1].style.display = 'none';
                }                
            knopki[i].style.backgroundColor = 'green';
            images[i].style.display = 'block';            
        };
    a = i;   
    };
    return [name.onclick(), a];
});
i=a;
knopki[i].style.backgroundColor = '';


console.log(a);
// var pop = knopki.forEach(function(name,i,knopki){
//         name.onclick = function(){
//                 for (let j = 0; j < arr; j++) {
//                     knopki[j].style.backgroundColor = '';
//                     images[j].style.display = 'none';                       
//                 };
//                 knopki[i].style.backgroundColor = 'green';
//                 images[i].style.display = 'block';
//             };
//         a = i;   
//         return [name.onclick(), a]
// });
 


knopki[0].style.backgroundColor = 'red';

next.onclick = function(){
    images[i].style.display = 'none';
    knopki[i].style.backgroundColor = '';
    i++;
    if(i == images.length){
    i=0;
    };
    images[i].style.display = 'block';
    knopki[i].style.backgroundColor = 'red';
};
        
prev.onclick = function(){
    images[i].style.display = 'none';
    knopki[i].style.backgroundColor = '';
    i--;
    if(i < 0){
    i= images.length - 1;
    };
    images[i].style.display = 'block';
    knopki[i].style.backgroundColor = 'red';
};
      

        // knopki[i].onclick = function(){
            //     for (let j = 0; j < arr; j++) {
                //         knopki[j].style.backgroundColor = '';
                //         images[j].style.display = 'none';                       
                //     };
                //     knopki[i].style.backgroundColor = 'green';
//     images[i].style.display = 'block';
// };

var arrLenght = knopki.length;

// knopki[i].onclick = function(){
//     knopka = knopki[i];
//     console.log(knopka);
// };



// knopka2 = document.getElementById('knopa2');
// knopka2.onclick = function(){
//     for (let i = 0; i < arrLenght; i++) {
//         knopki[i].style.backgroundColor = '';
//         images[i].style.display = 'none';        
//     }
//     knopka2.style.backgroundColor = 'green';
//     images[1].style.display = 'block';
// };
// knopka3 = document.getElementById('knopa3');
// knopka4 = document.getElementById('knopa4');
// knopka5 = document.getElementById('knopa5');
// knopka6 = document.getElementById('knopa6');
// knopka7 = document.getElementById('knopa7');
// knopka8 = document.getElementById('knopa8');





