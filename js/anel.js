class Anel {

  constructor(quantidade, base, topo, altura, raio_interno, angulo_inicial){
    this.primeiro = true;
    this.angulo_inicial = radians(angulo_inicial);
    this.quantidade = quantidade;
    this.base = base/2; // Divido por 2 pra desenhar pelo centro
    this.topo = topo/2;
    this.altura = altura;
    this.raio_interno = raio_interno;
  }

  desenha(c) {
    
    for(let i = 0; i < this.quantidade; i++ ) {
      let angulo = i * TWO_PI/this.quantidade;
      c.push();
      c.translate(width/2, height/2);
      c.rotate(angulo + this.angulo_inicial);
      
      c.beginShape();
      c.fill(0);
      c.noStroke();
      c.vertex(this.base, this.raio_interno);
      c.vertex(-this.base, this.raio_interno);
      c.vertex(-this.topo, this.raio_interno + this.altura);
      c.vertex(this.topo, this.raio_interno + this.altura);
      c.endShape();

      c.pop();
    }
  }

}

