let anel;
let niveis;
let pg;

function setup() {
  createCanvas(800, 800);
  pg = createGraphics(width, height);
  niveis = [new Anel(16, 20, 10, 100, 100, 0),
            new Anel(16, 20, 10, 100, 200, 180/16),
            new Anel(16, 20, 10, 100, 300, 0),
            new Anel(16, 20, 10, 100, 400, 180/16)
  ];
}

function draw() {
  pg.background(200);
  niveis.forEach(n => {
    n.desenha(pg);
  });
  
  clear();
  image(pg, 0, 0, pg.width, pg.height);
  
}

function callback(){

  // niveis[0].ativo = ui_data.nv1_ativo;
  niveis[0].quantidade = parseInt(ui_data.quantidade);
  niveis[0].base = parseInt(ui_data.base)/2; 
  niveis[0].topo = parseInt(ui_data.topo)/2;
  niveis[0].altura = parseInt(ui_data.nv1_altura);
  niveis[0].raio_interno = parseInt(ui_data.raio_interno);
  niveis[0].angulo_inicial = 0;
  console.log(niveis[0]);
  
  // niveis[1].ativo = ui_data.nv2_ativo;
  niveis[1].quantidade = parseInt(ui_data.quantidade);
  niveis[1].base = parseInt(ui_data.base)/2; 
  niveis[1].topo = parseInt(ui_data.topo)/2;
  niveis[1].altura = parseInt(ui_data.nv2_altura);
  niveis[1].raio_interno = niveis[0].altura + niveis[0].raio_interno;
  niveis[1].angulo_inicial = radians(180/niveis[1].quantidade);

  // niveis[2].ativo = ui_data.nv3_ativo;
  niveis[2].quantidade = parseInt(ui_data.quantidade);
  niveis[2].base = parseInt(ui_data.base)/2; 
  niveis[2].topo = parseInt(ui_data.topo)/2;
  niveis[2].altura = parseInt(ui_data.nv3_altura);
  niveis[2].raio_interno = niveis[1].altura + niveis[1].raio_interno;
  niveis[2].angulo_inicial = 0;

  // niveis[3].ativo = ui_data.nv4_ativo;
  niveis[3].quantidade = parseInt(ui_data.quantidade);
  niveis[3].base = parseInt(ui_data.base)/2; 
  niveis[3].topo = parseInt(ui_data.topo)/2;
  niveis[3].altura = parseInt(ui_data.nv4_altura);
  niveis[3].raio_interno = niveis[2].altura + niveis[2].raio_interno;
  niveis[3].angulo_inicial = radians(180/niveis[3].quantidade);

}
