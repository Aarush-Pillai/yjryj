
var ing = "";

function setup()
{
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',modelLoaded)
  
}
function modelLoaded()
{
    console.log("model is loaded");
    var status = true
    objectDetector.detect(ing, gotResult);
}

function gotResult(error, results)
{
if(error) { console.log(error);}

 console.log(results);
}


function preload()
{
ing = loadImage("")
}

function draw()
{
image(ing, 0, 0, 640, 420);
fill("#FF0000");
text("dog",45, 75);
noFill();
stroke(255,0,0);
rect(30, 60, 450,350);


fill("#FF0000");
text("cat",320, 120);
noFill();
stroke(255,0,0);
rect(310, 100, 300,390);
}





