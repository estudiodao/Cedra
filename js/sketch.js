let anel;
let niveis;
let pg;

function setup() {
  createCanvas(800, 800);
  pg = createGraphics(width, height);
  niveis = [new Anel(12, 20, 10, 100, 100, 0),
    new Anel(12, 20, 10, 100, 200, 180/12),
    new Anel(12, 20, 10, 100, 300, 0)
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