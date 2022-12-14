class Anel {

  constructor(quantidade, base, topo, altura, raio_interno, angulo_inicial){
    this.ativo = true;
    this.quantidade = quantidade;
    this.base = base/2; // Divido por 2 pra desenhar pelo centro
    this.topo = topo/2;
    this.altura = altura;
    this.raio_interno = raio_interno;
    this.angulo_inicial = radians(angulo_inicial);
    // this.primeiro = true;
  }

  desenha(c) {
    if(this.ativo) {
      for(let i = 0; i < this.quantidade; i++ ) {
        let angulo = i * TWO_PI/this.quantidade;
        c.push();
        c.translate(width/2, height/2);
        let escala = width / (raio_total() * 2);
        if(ui_data.ajustar) {
          c.scale(escala);
        }
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

}

function raio_total() {
  let index_ultimo = niveis.length -1;
  let total = niveis[index_ultimo].raio_interno + niveis[index_ultimo].altura;
  return total;
}