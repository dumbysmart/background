var red_btn;
var green_btn;

var r=20
var g=20
var b=20

function setup() {
 
  red_btn=createButton("RED")
  
 
  green_btn=createButton("GREEN")
  
  
}

function draw() 
{

  green_btn.mousePressed(()=>{
    background("green")
  })
  red_btn.mousePressed(()=>{
    background("red")
  })
}


