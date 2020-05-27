const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht
// maak de circles aan
let A, B, C;
A = new Point(new Vector2d(100, 100), 20, "Magenta", "A", true);
B = new Point(new Vector2d(301, 500), 20, "blue", "B", true);
C = new Point(new Vector2d(50, 300), 20, "red", "C", true);

let ab, bc, ca;
ab = new Linear(1, 1);
bc = new Linear(1, 1);
ca = new Linear(1, 1);

let mAB, mBC, mCA;
mAB = new Point(new Vector2d(100, 100), 5, "orange", "MAB", false);
mBC = new Point(new Vector2d(301, 500), 5, "orange", "MBC", false);
mCA = new Point(new Vector2d(50, 300), 5, "orange", "MCA", false);

let hA, hB, hC;
hA = new Linear(1,1);
hB = new Linear(1,1);
hC = new Linear(1,1);

let S, outherCircle;
S = new Point(new Vector2d(50, 300), 5, "black", "S", true);
outherCircle = new Point(new Vector2d(50, 300), 5, "rgb(100,1,1,0.3)", "outhercircle", true);

function animate() {
    context.clearRect(0, 0, width, height);
    ab.defineByTwoPoints(A, B);
    bc.defineByTwoPoints(B, C);
    ca.defineByTwoPoints(C, A);
    ab.draw("black");
    bc.draw("black");
    ca.draw("black");

    mAB.pos.dx = (A.pos.dx + B.pos.dx) / 2;
    mAB.pos.dy = (A.pos.dy + B.pos.dy) / 2;
    mAB.draw();
    mBC.pos.dx = (B.pos.dx + C.pos.dx) / 2;
    mBC.pos.dy = (B.pos.dy + C.pos.dy) / 2;
    mBC.draw();
    mCA.pos.dx = (C.pos.dx + A.pos.dx) / 2;
    mCA.pos.dy = (C.pos.dy + A.pos.dy) / 2;
    mCA.draw();

    hA.slope = -1/ab.slope;
    hA.intercept = mAB.pos.dy - mAB.pos.dx*hA.slope;
    hA.draw("blue")
    hB.slope = -1/bc.slope;
    hB.intercept = mBC.pos.dy - mBC.pos.dx*hB.slope;
    hB.draw("blue")
    hC.slope = -1/ca.slope;
    hC.intercept = mCA.pos.dy - mCA.pos.dx*hC.slope;
    hC.draw("blue")

    S.pos.dx = hA.intersection(hB).x;
    S.pos.dy = hC.intersection(hB).y;
    S.draw();

    outherCircle.pos = S.pos;
    outherCircle.radius = outherCircle.distance(A);
    outherCircle.draw();

    A.draw();
    B.draw();
    C.draw();
}

setInterval(animate, 2);