let canv = 750;
let canvX, canvY
let redondeo;
let gradMin = 90;
let gradMax = 255;
var fps = 0.5
let contador = 0
let currentFrame = 0
let objArray = []

let cont = 0

function setup() {
  
  canvX = windowWidth
  canvY = windowHeight
  
  createCanvas(canvX, canvY);
  noLoop()
  frameRate(fps)
}


function draw() {
  
  // metadata
  objArray.push({})
  objArray[0].release = 'ocelo'
  objArray[0].code = 'UN001'
  objArray[0].attributes = []
  
  

  //// DRAWWWWWWWWWWWWWWWW
  background(215,219,214);

  let randGradient = random()
  
  if(random()>0.5){
    redondeo = canvX/random(1,50);
  }else{
    redondeo = canvX/random(100,800);
  }
  
  if(randGradient<0.35){
    objArray[0].attributes.push({trait_type: 'niebla', value: 'ligera'})
    print('grad 1')
    let gradientFondo = radialGradient(
      width/2, height/2, canvX/3,//Start pX, pY, start circle radius
      width/2, height/2, canvX/2,//End pX, pY, End circle radius
      // randomGradient(gradMin, gradMax), //Start color
      // randomGradient(gradMin, gradMax), //End color
      color(255), color(10)
    );
  } 
  if(randGradient>=0.35 && randGradient<0.5){
    objArray[0].attributes.push({trait_type: 'niebla', value: 'densa'})
    print('grad 30')
    let gradientFondo = radialGradient(
      width/2, height/2, canvX/30,//Start pX, pY, start circle radius
      width/2, height/2, canvX/2,//End pX, pY, End circle radius
      // randomGradient(gradMin, gradMax), //Start color
      // randomGradient(gradMin, gradMax), //End color
      color(255), color(10)
    );
  }
  if(randGradient>=0.5){
    objArray[0].attributes.push({trait_type: 'nielba', value: '⌀'})
    fill(255)
  }
  
  rectMode(CENTER)
  blendMode(DIFFERENCE);
  let densidad
  let probDens = random()
  if(probDens<0.35){
    objArray[0].attributes.push({trait_type: 'señal', value: 'baja'})
    print("dens 1")
    densidad = random(1,10);
  } if(probDens>=0.35 && probDens<0.75) {
    objArray[0].attributes.push({trait_type: 'señal', value: 'media'})
    print("dens 2")
    densidad = random(10,100);
  } if(probDens>=0.75 && probDens<0.95) {
    objArray[0].attributes.push({trait_type: 'señal', value: 'alta'})
    print("dens 3")
    densidad = random(300,1000);
  } if(probDens>=0.95) {
    objArray[0].attributes.push({trait_type: 'señal', value: 'desbordada'})
    print("dens 4")
    densidad = random(1000,10000);
  }
  let figX
  let figY
  let centroY
  let centroChance = random()
  
  if(centroChance<0.5){
   centroY = 2
  } if(centroChance>=0.5 && centroChance<0.75) {
    centroY = 4
  } if (centroChance >=0.75){
    centroY = 1.25
  }
// dibuja rectangulos horizontales o verticales
  if(random()<0.5){
    objArray[0].attributes.push({trait_type: 'direccion', value: '⇅'})
    for(i=0; i<densidad; i++){
      figX = random(0.1,115)
      figY = random(0.1,5)
      rect(canvX/2,canvY/centroY, canvX/figX, canvY/figY, redondeo);
    }
  } else {
    objArray[0].attributes.push({trait_type: 'direccion', value: '⇆'})
    for(i=0; i<densidad; i++){
      figY = random(0.1,115)
      figX = random(0.1,5)
      rect(canvX/2,canvY/centroY, canvX/figX, canvY/figY, redondeo);
    }
  }
  
  let chanceCuadrado = random();  
  if(chanceCuadrado>0.7){
    rect(canvX/2,canvY/2, canvX/1.5, canvY/1.5, redondeo);
  }

  
  let chanceCruz = random();
  if(chanceCruz>0.75){
    objArray[0].attributes.push({trait_type: 'equis', value: 'X'})
    let puntoUno = canvX/random(1,10);
    let puntoDos = canvX/random(10,20)
    let puntoA = canvX/random(2,50)
    let puntoB = canvX/random(2,10)
    let centrX = canvX/2
    let centrY = canvX/floor(random(1,4))
    beginShape();
    vertex(0, 0);
    vertex(centrX, centrY);
    vertex(puntoA, puntoUno);
    vertex(puntoB, puntoDos);
    endShape(CLOSE)
  
    beginShape();
    vertex(canvX, 0);
    vertex(centrX, centrY);
    vertex(canvX-puntoA, puntoUno);
    vertex(canvX-puntoB, puntoDos);
    endShape(CLOSE)
  
    beginShape();
    vertex(0, canvY);
    vertex(centrX, centrY);
    vertex(puntoA, canvY-puntoUno);
    vertex(puntoB, canvY-puntoDos);
    endShape(CLOSE)
  
    beginShape();
    vertex(canvX, canvY);
    vertex(centrX, centrY);
    vertex(canvX-puntoA, canvY-puntoUno);
    vertex(canvX-puntoB, canvY-puntoDos);
    endShape(CLOSE)
    
  } else {
    objArray[0].attributes.push({trait_type: 'equis', value: '⌀'})
  }
  
  let estadoOjos = false;
  let ojosChance = random();
  // OJOS
  if(ojosChance>=0.8 && ojosChance<0.9){
    objArray[0].attributes.push({trait_type: 'ocelo', value: '👁️'})
    estadoOjos = true;
    let ojo = canvX*random(0.15,0.5)
    // let ojo = canvX*0.23
    ellipse(ojo,ojo,ojo)
    ellipse(canvX-ojo,ojo,ojo)
    fill(225,240)
    blendMode(BLEND);
    ellipse(ojo,ojo,ojo-ojo/8)
    ellipse(canvX-ojo,ojo,ojo-ojo/8)
    fill(35,240)
    ellipse(ojo,ojo,ojo-ojo/1.5,ojo-ojo/3)
    ellipse(canvX-ojo,ojo,ojo-ojo/1.5,ojo-ojo/3)
    fill(255)
    
    shadowGlow()
    noStroke()
    
    ellipse(ojo+ojo/9,ojo-ojo/7,ojo-ojo/1.05)
    ellipse(canvX-ojo+ojo/9,ojo-ojo/7,ojo-ojo/1.05)
    
    ellipse(ojo+ojo/8,ojo-ojo/10,ojo-ojo/1.03)
    ellipse(canvX-ojo+ojo/8,ojo-ojo/10,ojo-ojo/1.03)
  
    stroke(0)
    shadowLightSoft(0,360,0,0)
  }
  
  
  // OJOS 2
  if(ojosChance>=0.9){
    objArray[0].attributes.push({trait_type: 'ocelo', value: '⚫'})
    estadoOjos = true;
    let ojo = canvX*random(0.12,0.32)
    fill(225,230)
    blendMode(BLEND);
    ellipse(ojo,ojo,ojo)
    ellipse(canvX-ojo,ojo,ojo)
    
    fill(35,230)
    ellipse(ojo,ojo,ojo-ojo/25)
    ellipse(canvX-ojo,ojo,ojo-ojo/25)
    
    fill(255)
    
    shadowGlow()
    noStroke()
    
    rect(ojo+ojo/4,ojo-ojo/5,ojo-ojo/1.05)
    rect(canvX-ojo+ojo/4,ojo-ojo/5,ojo-ojo/1.05)
    
    rect(ojo+ojo/3,ojo-ojo/10,ojo-ojo/1.03)
    rect(canvX-ojo+ojo/3,ojo-ojo/10,ojo-ojo/1.03)
    
    stroke(0)
    shadowLightSoft(0,360,0,0)
  }
  
  let cosoCentro = false
  if(estadoOjos==false){
    objArray[0].attributes.push({trait_type: 'ocelo', value: '⌀'})
    if(random()>0.9){
      cosoCentro = true
      objArray[0].attributes.push({trait_type: 'antena', value: '◎'})
      for (i=0; i<random(20,50); i++){
        if(random()>0.5){
          ellipse(canvX/2,canvY/2, canvX/6-10*i,canvX/10-10*i) 
        } else{
          ellipse(canvX/2,canvY/2, canvX/2-10*i)   
        }
      }
    }
  }
  if(cosoCentro == false) {
    objArray[0].attributes.push({trait_type: 'antena', value: '⌀'})
  }
  
  fill(255)

  let detalle = 0
  let randCirculitos = random()
  if(random()>0.3){
    let x=canvX/2
    let y=canvY/2
    let jeje = canvX*0.025;
    blendMode(BLEND);
    
    for (i=0; i<5000*random(0,5); i++){
      let randCruz = random()
      let gap = canvX/random([random(130,200),0])
      let l = canvX/random(80,130)
      if(randCirculitos>0.6){
        detalle = 1
        if(randCruz<0.25){
          line(x,y-l,x,y-gap)
          line(x,y+gap,x,y+l)
          line(x-l,y,x-gap,y)
          line(x+gap,y,x+l,y)  
        } if(randCruz>=0.25 && randCruz<0.5) {
          circle(x, y, width/random(100,600));
        } if(randCruz>=0.5 && randCruz<0.75) {
          line(x-l/4,y-l/4,x+l/4,y+l/4)
          line(x+l/4,y-l/4,x-l/4,y+l/4)
        } if(randCruz>=0.75 && randCruz<0.95) {
          circle(x,y,gap)
        }  
      } else {
        detalle = 2
        circle(x, y, width/random(100,600));
      }
      
      
      const r = floor(random(4));

      switch (r) {
        case 0:
          x = x + jeje;
          break;
        case 1:
          x = x - jeje;
          break;
        case 2:
          y = y + jeje;
          break;
        case 3:
          y = y - jeje;
          break;
      }
    }
  }
  if(detalle == 0) {
    objArray[0].attributes.push({trait_type: 'particula', value: '⌀'})
  }
  if(detalle == 1) {
    objArray[0].attributes.push({trait_type: 'particula', value: '⊹'})
  }
  if(detalle == 2) {
    objArray[0].attributes.push({trait_type: 'particula', value: '∘'})
  }
    
  gradientFondo = radialGradient(
    width/2, height/2, canvX/3,//Start pX, pY, start circle radius
    width/2, height/2, canvX/2,//End pX, pY, End circle radius
    color(255), color(255)
  );
  
    blendMode(BLEND);

 
  console.log(objArray[0])
  
}


function mousePressed(){
  draw()
}



//ACA EMPIEZAN LAS FUNCIONE
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  canvX = windowWidth
  canvY = windowHeight
}

//GRADIENT
function radialGradient(sX, sY, sR, eX, eY, eR, colorS, colorE){
  let gradient = drawingContext.createRadialGradient(
    sX, sY, sR, eX, eY, eR
  );
  gradient.addColorStop(0, colorS);
  gradient.addColorStop(1, colorE);

  drawingContext.fillStyle = gradient;
  let colorData = [colorS, colorE]
  return colorData

}

function randomGradient(minimo, maximo){
  let resultado = color(random(minimo, maximo), random(minimo, maximo), random(minimo, maximo));
  return resultado;
}

function linearGradient(sX, sY, eX, eY, colorS, colorE){
  let gradient = drawingContext.createLinearGradient(
    sX, sY, eX, eY
  );
  gradient.addColorStop(0, colorS);
  gradient.addColorStop(1, colorE);
  // drawingContext.fillStyle = gradient;
  drawingContext.strokeStyle = gradient;
}

function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();

  if (axis === Y_AXIS) {
    // Gradiente de arriba a abajo
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  } else if (axis === X_AXIS) {
    // Gradiente de izquierda a derecha
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, x + w, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y + h);
    }
  }
}


// SHADOW
function shadowGlow() {
  drawingContext.shadowOffsetX = 0;
  drawingContext.shadowOffsetY = 0;
  drawingContext.shadowBlur = width/100;
  drawingContext.shadowColor = color('#fff');
}

function shadowLightSoft(shadowOffset, randH, randS, randB) {
  drawingContext.shadowOffsetX = -shadowOffset;
  drawingContext.shadowOffsetY = -shadowOffset;
  drawingContext.shadowBlur = shadowOffset*2;
  drawingContext.shadowColor = color(randH, randS, randB+30);
}
function shadowDarkSoft(shadowOffset, randH, randS, randB) {
  drawingContext.shadowOffsetX = shadowOffset;
  drawingContext.shadowOffsetY = shadowOffset;
  drawingContext.shadowBlur = shadowOffset*2;
  drawingContext.shadowColor = color(randH, randS, randB-30);
}
