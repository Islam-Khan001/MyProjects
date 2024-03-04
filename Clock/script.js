let currentTime = new Date();

let currenthour = currentTime.getHours();
const currentmin = currentTime.getMinutes();
const currentsec = currentTime.getSeconds();
const currentmon = currentTime.getMonth();
const currentday = currentTime.getDay();
const currentdate = currentTime.getDate();

const months = [
    "Jan", "Feb", "Mar", "Apr",
    "May", "Jun", "Jul", "Aug",
    "Sept", "Oct", "Nov", "Dec"
];

const days = [
    "Sun", "Mon", "Tue", "Wed",
    "Thu", "Fri", "Sat"
];

let mon = months[currentmon];
let day = days[currentday];

let indian = document.getElementById("indian");

indian.textContent += ` ${day}, ${currentdate} ${mon}`;





let isam = true;
let mer = document.getElementById("mer");


// function digtimehr(){
//     const 
//     return currentTime.getHours();
// }
// digtimehr();
// timehr.textContent = setInterval(phr.currentTime.getHours(),1000);
const timehr = document.getElementById("timehr");
function digtimehr() {
    const currentTime = new Date();
    let ch =  currentTime.getHours();
    if(ch >=13){
        ch = ch%12;
    }
    if(ch == 0){
        ch = 12;
    }
    // if(ch >=13 || ch == 0){
    //     isam = false;

    // }
    return String(ch).padStart(2, '0');
}
setInterval(function () {
    const currentHour = digtimehr();
    timehr.textContent = currentHour;
}, 1000);

let ch =  currentTime.getHours();

console.log("ch1 " + ch);

// if(ch >=13){
//     ch = ch%12;
// }
// if(ch == 0){
//     ch = 12;
// }

// console.log("ch2 " + ch);

if(ch >=13 || ch == 0){
    isam = false;

}



if(isam == true){
    mer.textContent = "am";
}
else{
    mer.textContent = "pm";

}

const timemn = document.getElementById("timemn")
function digtimemr(){
    const currentmn = new Date();
    const cm =  currentmn.getMinutes();
    return String(cm).padStart(2, '0');
} 
setInterval(function(){
    const cmn = digtimemr();
    timemn.textContent = cmn;
},1000)

const timesc = document.getElementById("timesc");
function digtimesc(){
    const currentsc = new Date();
    const cs = currentsc.getSeconds();
    return String(cs).padStart(2, '0');
}
setInterval(function(){
    const csc = digtimesc();
    timesc.textContent = csc;
},1000)




// console.log("hour " +currenthour);


let sectime = document.getElementsByClassName("sec-hand")[0];
let mintime = document.getElementsByClassName("min-hand")[0];
let hourtime = document.getElementsByClassName("hour-hand")[0];


// let srotation=currentsec*6;

// function upsec(){
    
//     srotation+=6;
//     console.log(srotation)
//     sectime.style.transform = `rotate(${srotation}deg)`;
// }
// setInterval(upsec,1000);

let srotation = 0;

function upsec(){

    let currentTime = new Date();
    const currentsec = currentTime.getSeconds();

    srotation=(currentsec+1)*6;
    
    // srotation+=6;
    // console.log(srotation)
    sectime.style.transform = `rotate(${srotation}deg)`;
}
setInterval(upsec,1000);


let mrotation=currentmin*6;

function upmin(){
    
    mrotation+=.1;
    // console.log(mrotation)
     
    mintime.style.transform = `rotate(${mrotation}deg)`;
}
setInterval(upmin,1000);


if(currenthour >= 13){
   currenthour = currenthour - 12;    
}

let hrotation=(currenthour*30) + (currentmin/2);

function uphour(){
    
    hrotation+=0.00833;
    console.log(hrotation)
    hourtime.style.transform = `rotate(${hrotation}deg)`;
}
setInterval(uphour,1000);



const clev = document.getElementById("container");
const clock = document.getElementById('clock');
const digclock = document.getElementById('digclock')


let ist = document.getElementById("ist");

clev.addEventListener('click',function(){

    if(clock.style.display == `none`){

        let ddopac = 80;
        digclock.style.opacity = "100%"

        let dc = setInterval(() =>{
            digclock.style.opacity = `${ddopac}%`;
            ddopac -= 1;
            console.log("ddopac " + ddopac);
            if(ddopac < 0){
                clearInterval(dc);
                digclock.style.display = `none`;
                clock.style.display = `flex`;
                let opac = 0;

                let t = setInterval(() => {
                    clock.style.opacity = `${opac}%`;
                    // clock.style.height = `${h}px`;
                    // clock.style.width = `${w}px`;
                    // h+=.5;
                    // w+=.5;
                    opac+=1;
                    if(opac>100){
                        clearInterval(t);
                    }
            
                }, .1);
            }
        }, .1);

        // digclock.style.display = `none`;
        // clock.style.display = `flex`;
         

        let ctm = 150;
        ist.style.bottom = `${ctm}px`;

        // let w = 450;
        // let h = 450;
        
        
    }
    else{

        // let w = 500;
        // let h = 500;

        let opac = 100;
        let d = setInterval(() => {
            clock.style.opacity = `${opac}%`;
            // clock.style.height = `${h}px`;
            // clock.style.width = `${w}px`;
            // w-=.5;
            // h-=.5;
            opac-=1;

            if(opac<0){
                clearInterval(d);
                let dopac = 25;
                digclock.style.opacity = '20%';
                clock.style.display = `none`;
                digclock.style.display = `flex`;
                let t = setInterval(() =>{
                    digclock.style.opacity = `${dopac}%`;
                    dopac+=1;
                    if(dopac >100){
                      clearInterval(t);
                    }
                }, .1);
                
            }
            
        }, .1);

        let btm = 440;
        ist.style.bottom = `${btm}px`;

        

        
        
    }
    

})

function refreshpage(){
    location.reload();
}

setInterval(refreshpage, 60000);




// let ist = document.getElementById("ist");

// if(clock.style.display == `none`){
//     let btm = 400;
//     ist.style.bottom = `${btm}px`;
// }

