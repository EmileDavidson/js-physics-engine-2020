const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht
// maak de circles aan
let A, B, C, S;
A = new Point(new Vector2d(100, 100), 20, "Magenta", "Ball1", true);
B = new Point(new Vector2d(301, 500), 20, "blue", "Ball2", true);
C = new Point(new Vector2d(50, 300), 20, "red", "Ball3", true);
Z = new Point(new Vector2d(100, 100), 10, "green", "S", false);
//tussen circles
let MAB, MBC, MCA;
MAB = new Point(new Vector2d(100, 100), 5, "black", "MAB", false);
MBC = new Point(new Vector2d(301, 500), 5, "black", "MBC", false);
MCA = new Point(new Vector2d(50, 300), 5, "black", "MCA", false);
//maak de lines aan
let l1, l2, l3;
l1 = new Linear(1, 1);
l2 = new Linear(1, 1);
l3 = new Linear(1, 1);

lAMBC = new Linear(1, 1);
lBMCA = new Linear(1, 1);
lCMAB = new Linear(1, 1);

function animate() {
    context.clearRect(0, 0, width, height);
    //draw de lines between circles
    l1.defineByTwoPoints(A, B);
    l1.draw(context);
    l2.defineByTwoPoints(B, C);
    l2.draw(context);
    l3.defineByTwoPoints(C, A);
    l3.draw(context);
    lAMBC.defineByTwoPoints(MBC, A);
    lAMBC.draw("blue");
    lBMCA.defineByTwoPoints(MCA, B);
    lBMCA.draw("blue");
    lCMAB.defineByTwoPoints(MAB, C);
    lCMAB.draw("blue");
    //draw de tussen circles
    MAB.pos.dx = (A.pos.dx + B.pos.dx) / 2;
    MAB.pos.dy = (A.pos.dy + B.pos.dy) / 2;
    MAB.draw();
    MBC.pos.dx = (B.pos.dx + C.pos.dx) / 2;
    MBC.pos.dy = (B.pos.dy + C.pos.dy) / 2;
    MBC.draw();
    MCA.pos.dx = (C.pos.dx + A.pos.dx) / 2;
    MCA.pos.dy = (C.pos.dy + A.pos.dy) / 2;
    MCA.draw();
    //Draw de circles
    A.draw();
    B.draw();
    C.draw();

    //zwaartepunt
    Z.pos.dx = lAMBC.intersection(lBMCA).x;
    Z.pos.dy = lAMBC.intersection(lBMCA).y;
    Z.draw();
}

setInterval(animate, 2);