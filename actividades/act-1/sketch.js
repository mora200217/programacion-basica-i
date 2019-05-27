/*
Actividad 01
Haga un programa que dibuje aleatoriamente elipses y
rectángulos de distinto color, tamaño y posición.
Deje rastro de estas figuras (no borre la pantalla
en cada iteración).

Andrés M. Morales Martinez - 2019
*/

// Valores Minimos
const MIN_WIDTH = 20;
const MIN_HEIGHT = 20;

// Valores Maximos
const MAX_WIDTH = 100;
const MAX_HEIGHT = 100;

// Tiempo de Diferencia de aparacion
const TIME_DIFFERENCE = 0.5; // segundos

function setup(){
  createCanvas(700,500);
  background(243);
  noStroke();
  frameRate(60); // Frames por segundo
}

function draw(){
  // Al estar a 60 fps - calculamos el tiempo con un modulo
  // de 60 por el tiempo de diferencia
  if((frameCount % (60 * TIME_DIFFERENCE)) == 0){
    fill(random(0, 255), random(0, 255), random(0, 255));
    let pos = createVector(random(0, width), random(0, height));
    ellipse(pos.x, pos.y, random(MIN_WIDTH, MAX_WIDTH), random(MIN_HEIGHT,MAX_HEIGHT));
  }
}
