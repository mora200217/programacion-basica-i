/*
Actividad 02
Divida la pantalla en tres regiones horizontales,
cada una de las cuales debe tener el color rojo,
verde y azul respectivamente. Haga una animación
que genere un efecto de degradé en cada región.
- Decremente en la primera región el componente de
Rojo (las componentes de Verde y Azul deben ser siempre cero)
- Decremente en la segunda región el componente de
Verde (las componentes de Rojo y Azul deben ser siempre cero)
- Decremente en la tercera región el componente de
Azul (las componentes de Rojo y Verde deben ser siempre cero)
Recuerde que la función de color en las componentes
es monótonamente creciente, es decir, el valor de una
componente aumenta si el valor que le pasamos aumenta.

Andrés M. Morales Martinez - 2019
*/

var seccion;
var mySections = [];
function setup(){
  createCanvas(700,500);
  background(243);
  noStroke();
  for(let i = 0; i < 3; i++){
    mySections.push(new Seccion(width, height / 3, 0,height * i/ 3, i + 1));
  }
}

function draw(){
  for(let i = 0; i < 3; i++){
    mySections[i].draw();
    mySections[i].colorChange();
  }
}

class Seccion{
  constructor(width, height, posX, posY, color){
    this.width = width;
    this.height = height;
    this.pos = createVector(posX, posY);
    this.color = createVector(
      color != 1 ? 0 : 255,
      color != 2 ? 0 : 255,
      color != 3 ? 0 : 255
    )
  }
  draw(){
    fill(this.color.x, this.color.y, this.color.z);
    rect(this.pos.x, this.pos.y, this.width, this.height);
  }
  colorChange(){
    this.color.mult(0.999)
  }
}
