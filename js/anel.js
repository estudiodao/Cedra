class Anel {

  constructor(trapezio_qtd, trapezio_base, trapezio_topo, trapezio_altura, raio_interno, angulo_inicial){
    this.primeiro = true;
    this.angulo_inicial = radians(angulo_inicial);
    this.trapezio_qtd = trapezio_qtd;
    this.trapezio_base = trapezio_base/2; // Divido por 2 pra desenhar pelo centro
    this.trapezio_topo = trapezio_topo/2;
    this.trapezio_altura = trapezio_altura;
    this.raio_interno = raio_interno;
  }

  desenha(c) {
    
    for(let i = 0; i < this.trapezio_qtd; i++ ) {
      let angulo = i * TWO_PI/this.trapezio_qtd;
      c.push();
      c.translate(width/2, height/2);
      c.rotate(angulo + this.angulo_inicial);
      
      c.beginShape();
      c.fill(0);
      c.noStroke();
      c.vertex(this.trapezio_base, this.raio_interno);
      c.vertex(-this.trapezio_base, this.raio_interno);
      c.vertex(-this.trapezio_topo, this.raio_interno + this.trapezio_altura);
      c.vertex(this.trapezio_topo, this.raio_interno + this.trapezio_altura);
      c.endShape();

      c.pop();
    }
  }
}

