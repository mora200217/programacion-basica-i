/*
Actividad 03
Divida la pantalla en 16 regiones rectangulares (4 filas y 4 columnas).
De modo que cada rectángulo tome un valor de color aleatorio entre
escalas de grises.

Andrés M. Morales Martinez - 2019
*/

function setup(){
  createCanvas(700,500);
  background(243);
  noStroke();
  for(let i = 0; i < width; i+= width / 4){
    for(let j = 0; j < height; j+= height / 4){
      fill(random(255));
      rect(i, j, width/2, height/ 2);
    }
  }
}

function draw(){

}
