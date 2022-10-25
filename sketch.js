let tracks = 0;
let startScreen = true;
let maxD;
let revenue;
let c = 20000;
let count=175000000
let Year=2022
let regionPoints = [
  [230,300,7],
  [210,190,4],
  [75,280,1],
  [85,370,2],
  [100,180,3],
  [130,80,1],
  [300,60,1],
  [310,140,5],
  [310,240,3],
  [355,270,3],
  [180,360,10]
]

console.log(regionPoints[1])

let clickCount = 0;
let points = [[275,558]];
let png;
let cost = 0;

function preload() {
  png = loadImage("PopMap.png");
  startpng = loadImage("Menu Screen.png"); // load this!
}

function setup() {
  
  for (var i=0; i<regionPoints.length;i++){
    for (var j=0; j<3;j++){
      regionPoints[i][j] *= 2
    }
  }
  
  maxD = 400*sqrt(2)
  createCanvas(800, 800);
  png.resize(800, 800);
  image(png, 0, 0);
  let x = 200;
  let y = 200;

  
  textSize(20)
  easybutton = createButton('Easy');
  easybutton.position(70, 260);
  
  easybutton.mousePressed(function(){
    setTimeout(function(){startScreen = false},1000)
    normalbutton.position(100000000, 100000000);
    hardbutton.position(100000000, 100000000);
    glbutton.position(100000000, 100000000);
    easybutton.position(100000000, 100000000)
    
    c = 40000
    count = 350000000
    
  })
  
   textSize(20)
  normalbutton = createButton('Normal');
  normalbutton.position(610, 260);
  
  normalbutton.mousePressed(function(){
    setTimeout(function(){startScreen = false},1000)
    normalbutton.position(100000000, 100000000);
    hardbutton.position(100000000, 100000000);
    glbutton.position(100000000, 100000000);
    easybutton.position(100000000, 100000000)
    
        c = 20000
    count = 175000000
  })
  
  textSize(20)
  hardbutton = createButton('Hard');
  hardbutton.position(70, 580);
  
  hardbutton.mousePressed(function(){
    setTimeout(function(){startScreen = false},1000)
    normalbutton.position(100000000, 100000000);
    hardbutton.position(100000000, 100000000);
    glbutton.position(100000000, 100000000);
    easybutton.position(100000000, 100000000)
    
      c = 10000
    count = 87500000
  })
  
  
   textSize(20)
  glbutton = createButton('Good Luck');
  glbutton.position(650, 580);
  
  glbutton.mousePressed(function(){
    setTimeout(function(){startScreen = false},1000)
    
    normalbutton.position(100000000, 100000000);
    hardbutton.position(100000000, 100000000);
    glbutton.position(100000000, 100000000);
    easybutton.position(100000000, 100000000)
    
    c = 5000
    count = 43750000
  })
  
}



function keyPressed() {
  if(keyCode == 13){
    revenue=0
    for (var n = 0; n < points.length; n++){
      for(var i = 0; i<regionPoints.length;i++){
        d = dist(points[n][0],points[n][1],regionPoints[i][0],regionPoints[i][1])
        revenue += (maxD-d)*regionPoints[i][2]*c
  }}
    console.log(revenue)
    count = count - cost + revenue + 175000000
    cost = 0
    tracks = 0
    Year += 1
  }
}
  

function draw() {

  //background(220);
  clear();
  
  if (startScreen){
    
    startpng.resize(800,800)
    image(startpng,0,0)
  
    fill(255,0,0)
    textSize(20)
    //place code for start screen
  } else {
  
  image(png, 0, 0);
  
  stroke("black")
  fill(255)
  rect(705,5,93,20)
  fill(0)
  
  textSize(15)
  text(count,710,20)
  
  fill(255)
  rect(705,25,20,20)
  fill(0)
  text("-",713,40)
  fill(255)
  rect(725,25,73,20)
  
  fill(255)
  rect(5,5,93,20)
  
  fill(0,0,0)
  textSize(15)
  text(Year,10,20)
  
  for (var n=0; n<regionPoints.length;n++){
    circle(regionPoints[n][0],regionPoints[n][1],10)
  }
  
  
 
  for(var i=1;i<points.length;i++){
    fill("red")
    line(points[i-1][0], points[i-1][1], 
         points[i][0], points[i][1])
    circle(points[i][0], points[i][1], 10)
    circle(points[i-1][0], points[i-1][1], 10)
    }
  
  fill(0);
  textSize(10)
  text("$"+str(cost), 730, 40);

  if(Year > 2032){
   if(count > 20000000000){
     textSize(60)
      text("You Win",200,400)
   }else{
     textSize(60)
     text("You Lose", 250, 400)
    }
     
  
  }


}
}


function mouseClicked() {
  tooClose = false
  
  
  for (var i=0;i<points.length;i++){
    if (dist(mouseX,mouseY,points[i][0],points[i][1]) < 100){
      tooClose = true
      break;
  } 
}
  
  
  revenue = 0
  if (startScreen == false){
  if (tracks < 1){
    if(tooClose == false){
      points.push([mouseX,mouseY])
      cost += int(dist(points[points.length-1][0],
                   points[points.length-1][1],
                   points[points.length-2][0],
                   points[points.length-2][1]))*8430233
      console.log(cost)
      tracks++
    } else {
      console.log("This track is too close!")
    }
}
  else{console.log("You Can't Build Any More Tracks")}

}}


