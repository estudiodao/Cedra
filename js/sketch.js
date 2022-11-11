let anel;
let niveis;
let pg;

function setup() {
  createCanvas(800, 800);
  pg = createGraphics(width, height);
  niveis = [new Anel(16, 20, 10, 100, 100, 0),
            new Anel(16, 20, 10, 100, 200, 180/16),
            new Anel(16, 20, 10, 100, 300, 0)
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
  niveis.forEach(n => {
    n.quantidade = parseInt(ui_data.quantidade);
    n.base = ui_data.base / 2;
    n.topo = ui_data.topo / 2;
    n.altura = parseInt(ui_data.altura);
    n.angulo_inicial = 180 / n.quantidade;
  });
  
}