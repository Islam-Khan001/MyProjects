let lang = document.getElementById("lang");
let slang = document.getElementById("slang");
let elbl = document.getElementById("elbl");
let emailin = document.getElementById("emailin");
let page6em = document.getElementsByClassName('page6em')[0];


elbl.addEventListener('click', function(){

    console.log(3432);

    emailin.click();
});

emailin.addEventListener('click',function(){

    console.log(1111);


    elbl.style.transform = "translateX(-10px) translateY(-21px) scale(.9)";
    emailin.style.border = "5px solid white";



});

document.addEventListener('click',function(event){

    if(!emailin.contains(event.target) && !elbl.contains(event.target)){
        elbl.style.transform = "none";
        emailin.style.border = "";
    }

    

})
// --------------------------------------------------------

// let grade = 'a';

// switch (grade) {
//     case 'a':
//         console.log("pass")
//         break;

//     case 'b':
//         console.log("average");
//         break;
    
//         case 'c':
//             console.log("fail");
//             break;

//     default:
//         console.log("invalid");
//         break;
// }