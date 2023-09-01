const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const dpr = window.devicePixelRatio;

let canvasWidth;
let canvasHeight;
let particles;

function init() {
    canvasWidth = innerWidth;
    canvasHeight = innerHeight;

    canvas.style.width = canvasWidth + "px";
    canvas.style.height = canvasHeight + "px";

    canvas.width = canvasWidth * dpr;
    canvas.height = canvasHeight * dpr;
    ctx.scale(dpr, dpr); // dpr이 2 이상인 기기에서는 더 선명하게 보임 필셀들이 더 잘게 쪼개져 그려져서 그러는 듯

    particles = [];
    const TOTAL = canvasWidth / 10;

    for (let i = 0; i < TOTAL; i++) {
        const x = randomNumBetween(0, canvasWidth);
        const y = randomNumBetween(0, canvasHeight);
        const radius = randomNumBetween(50, 100);
        const vy = randomNumBetween(1, 5);
        const particle = new Particle(x, y, radius, vy);
        particles.push(particle);
    }
}

const feGaussianBlur = document.querySelector("feGaussianBlur");
const feColorMatrix = document.querySelector("feColorMatrix");

const controls = new (function () {
    this.blurValue = 17;
    this.alphaChannel = 100;
    this.alphaOffset = -23;
    this.acc = 1.03;
})();

// 외부 라이브러리. 화면 오른쪽에 GUI 패널로 원하는 정확한 blur 값을 테스트하며 확인 가능!!
let gui = new dat.GUI();

const f1 = gui.addFolder("Gooey Effect");
f1.open();

f1.add(controls, "blurValue", 0, 100).onChange((value) => {
    feGaussianBlur.setAttribute("stdDeviation", value);
});
f1.add(controls, "alphaChannel", 1, 200).onChange((value) => {
    feColorMatrix.setAttribute(
        "values",
        `1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 ${value} ${controls.alphaOffset}`
    );
});
f1.add(controls, "alphaOffset", -40, 40).onChange((value) => {
    feColorMatrix.setAttribute(
        "values",
        `1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 ${controls.alphaChannel} ${value}`
    );
});

const f2 = gui.addFolder("Particle Property");
f2.open();

// 5번째 param은 step 으로 얼마만큼씩 변화를 줄건지 정의하는 것
f2.add(controls, "acc", 1, 1.5, 0.01).onChange((value) => {
    particles.forEach((particle) => (particle.acc = value));
});

class Particle {
    constructor(x, y, radius, vy) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.vy = vy;
        this.acc = 1.08;
    }

    update() {
        this.vy *= this.acc;
        this.y += this.vy;
    }

    draw() {
        // // 사각형 그리기
        // ctx.fillRect(10, 10, 50, 50);

        // 선 그리기. 원도 이걸로 그림
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 360 * (Math.PI / 180));
        ctx.fillStyle = "orange";
        ctx.fill();
        // ctx.stroke();
        ctx.closePath();
    }
}

const randomNumBetween = (min, max) => {
    return Math.random() * (max - min + 1) + min;
};

// targting 60fps
let interval = 1000 / 60;
let now, delta;
let then = Date.now();

function animate() {
    // 모니터마다 다르지만 모니터의 프레임 만큼 실행됨
    // 만약 모니터가 60hz이면, 1초에 60번 이 function이 실행됨
    window.requestAnimationFrame(animate);
    now = Date.now();
    delta = now - then;

    if (delta < interval) return;

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    particles.forEach((particle) => {
        particle.update();
        particle.draw();

        if (particle.y - particle.radius > canvasHeight) {
            particle.x = randomNumBetween(0, canvasWidth);
            particle.radius = randomNumBetween(50, 100);
            particle.vy = randomNumBetween(1, 5);
            particle.y = -particle.radius;
        }
    });

    then = now - (delta % interval) + interval;
}

window.addEventListener("load", () => {
    init();
    animate();
});

window.addEventListener("resize", () => {
    init();
});
