const myCanvas = { width: 600, height: 600};
const backgroundColor = [22, 53, 204];

function setup(){
    createCanvas(myCanvas.width, myCanvas.height);
    background(backgroundColor);
}

let logo;
let Jasmine;
let outfit1;
let outfit2;
let outfit3;
let outfit4;
let outfit5;
let outfit6;
let outfit7;
let outfit8;
let outfit9;
let outfit10;
let outfit11;
let outfit12;
let outfit13;

document.onkeydown = function (e) {
    switch (e.key) {
        case 'ArrowLeft':
            // left arrow
            break;
        case 'ArrowRight':
            // right arrow
    }
};

function preload() {
    logo = loadImage('cluelesslogo.png');
    Jasmine = loadImage('jasmine.png');
    
    outfit1=createImg('outfit1.ong');
    outfit1.position(0,0);
    outfit1.hide();
    
    outfit2=createImg('outfit2.png');
    outfit2.position(0,0);
    outfit2.hide();
    
    outfit3=createImg('outfit3.png');
    outfit3.position(0,0);
    outfit3.hide();
   
    outfit4=createImg('outfit4.png');
    outfit4.position(0,0);
    outfit4.hide();
  
    outfit5=createImg('outfit5.png');
    outfit5.position(0,0);
    outfit5.hide();
    
    outfit6=createImg('outfit6.png');
    outfit6.position(0,0);
    outfit6.hide();
    
    outfit7=createImg('outfit7.png');
    outfit7.position(0,0);
    outfit7.hide();
    
    outfit8=createImg('outfit8.png');
    outfit8.position(0,0);
    outfit8.hide();
  
    outfit9=createImg('outfit9.png');
    outfit9.position(0,0);
    outfit9.hide();
   
    outfit10=createImg('outfit10.png');
    outfit10.position(0,0);
    outfit10.hide();

    outfit11=createImg('outfit11.png');
    outfit11.position(0,0);
    outfit11.hide();

    outfit12=createImg('outfit12.png');
    outfit12.position(0,0);
    outfit12.hide();
  }

  function draw(){
    
    background(backgroundColor);
  }