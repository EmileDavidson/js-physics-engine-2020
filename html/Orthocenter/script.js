const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;


// begin hier met jouw code voor deze opdracht
// maak de circles aan
let A, B, C, S;
A = new Point(new Vector2d(100, 100), 20, "Magenta", "A", true);
B = new Point(new Vector2d(301, 500), 20, "blue", "B", true);
C = new Point(new Vector2d(500, 300), 20, "red", "C", true);
S = new Point(new Vector2d(100, 100), 10, "green", "S", false);

let ab, bc, ca;
ab = new Linear(1, 1);
bc = new Linear(1,1);
ca = new Linear(1,1);
let hA, hB, hC;
hA = new Linear(1,1)
hB = new Linear(1,1)
hC = new Linear(1,1)

let mAB, mBC, mCA;
mAB = new Point(new Vector2d(0,0), 5, "orange", "AB", false);
mBC = new Point(new Vector2d(0,0), 5, "orange", "BC", false);
mCA = new Point(new Vector2d(0,0), 5, "orange", "CA", false);

function animate() {
    context.clearRect(0, 0, width, height);

    //draw de lines between circles
    ab.defineByTwoPoints(A,B);
    bc.defineByTwoPoints(B,C);
    ca.defineByTwoPoints(C,A);
    ab.draw("black");
    bc.draw("black");
    ca.draw("black");
    //Atlidute lines
    hA.slope = -1/bc.slope;
    hA.intercept = A.pos.dy - A.pos.dx*hA.slope;
    hA.draw("blue")

    hB.slope = -1/ca.slope;
    hB.intercept = B.pos.dy - B.pos.dx * hB.slope;
    hB.draw("blue");

    hC.slope = -1/ab.slope;
    hC.intercept = C.pos.dy - C.pos.dx * hC.slope;
    hC.draw("blue");
    //draw intersection points
    mAB.pos.dx = ab.intersection(hC).x;
    mAB.pos.dy = ab.intersection(hC).y;
    mAB.draw();

    mBC.pos.dx = bc.intersection(hA).x;
    mBC.pos.dy = bc.intersection(hA).y;
    mBC.draw();

    mCA.pos.dx = ca.intersection(hB).x;
    mCA.pos.dy = ca.intersection(hB).y;
    mCA.draw();
    //draw circles
    A.draw();
    B.draw();
    C.draw();
    //draw center point
    S.pos.dx = hA.intersection(hB).x;
    S.pos.dy = hC.intersection(hB).y;
    S.draw();
}

setInterval(animate, 2);