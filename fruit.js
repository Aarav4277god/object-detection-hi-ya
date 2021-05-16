img="";
status="";
objects=[];
function preload(){
    img=loadImage('cupboard.jpeg');
}
function setup(){
  canvas=createCanvas(640,420);
  canvas.center();
  objectdetector=ml5.objectDetector('cocossd',modelloaded);
  document.getElementById("status").innerHTML="Status:Detecting objects";
}
function draw(){
   image(img,0,0,640,420);
   fill("#00bfff");
   text("cupboard",45,75);
noFill();
stroke("#00bfff");
rect(300,90,280,320);

 }

function modelloaded(){
  console.log("model is loaded");
  objectdetector.detect(img,gotresult);
}
function gotresult(error,result){
if(error){
console.log(error);
}
else{
  console.log(result);
  objects = result;
}
