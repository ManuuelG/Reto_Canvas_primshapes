//----------------- Obtenemos y redimensionamos el canvas ----------------//

const canvas = document.querySelector ('canvas')
const ctx = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

// -------------- STEP 1 ----------------//

 console.log(Math.PI)

const PI_DOUBLE = 2 * Math.PI


ctx.beginPath();
ctx.arc(200, 200, 150, 0, PI_DOUBLE);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(140, 140, 10, 0, PI_DOUBLE);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(250, 140, 10, 0, PI_DOUBLE);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(200, 230, 80, 0.5, 2.6);
ctx.stroke();
ctx.closePath();

//------------ STEP 2 & 3 --------------//

//------------- Primer cuadro -------------//

let circuloRad = 40
let colores = ['aqua', 'pink', 'orange', 'lime', 'black', 'lightblue', 'white'];

ctx.beginPath();
ctx.rect(50,400, 300,300)
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(140, 500, circuloRad, 0, PI_DOUBLE);
ctx.fillStyle = colores[0];
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(140, 620, circuloRad, 0, PI_DOUBLE);
ctx.fillStyle = colores[1];
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(250, 620, circuloRad, 0, PI_DOUBLE);
ctx.fillStyle = colores[2];
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(250, 500, circuloRad, 0, PI_DOUBLE);
ctx.fillStyle = colores[3];
ctx.fill();
ctx.stroke();
ctx.closePath();

//------------------ Segundo cuadro -------------//

ctx.beginPath();
ctx.rect(400,400, 300,300)
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(550,400);
ctx.lineTo(550, 550);
ctx.lineTo(400,700);
ctx.moveTo(550,550);
ctx.lineTo(700,700);
ctx.strokeStyle = colores[2];
ctx.stroke();
ctx.closePath();



//------------------- Tercer cuadro -------------//
ctx.beginPath();
ctx.rect(750,400, 300,300)
ctx.strokeStyle = colores[4];
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.rect(780,430, 240, 240);
ctx.fillStyle = colores[5];
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(900, 550, 60, 0, PI_DOUBLE);
ctx.fillStyle = colores[6];
ctx.fill();
ctx.stroke();
ctx.closePath();

//--------------------------- STEP 4 -----------------------//

//-------------------------- STEP 5 & 6 -------------------//

function dibujaCarita() {
    const PI_DOUBLE = 2 * Math.PI


    ctx.beginPath();
    ctx.arc(200, 200, 150, 0, PI_DOUBLE);
    ctx.stroke();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.arc(140, 140, 10, 0, PI_DOUBLE);
    ctx.stroke();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.arc(250, 140, 10, 0, PI_DOUBLE);
    ctx.stroke();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.arc(200, 230, 80, 0.5, 2.6);
    ctx.stroke();
    ctx.closePath();
};

dibujaCarita()

function dibujaCuadro1 () {

let circuloRad = 40
let colores = ['aqua', 'pink', 'orange', 'lime', 'black', 'lightblue', 'white'];

ctx.beginPath();
ctx.rect(50,400, 300,300)
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(140, 500, circuloRad, 0, PI_DOUBLE);
ctx.fillStyle = colores[0];
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(140, 620, circuloRad, 0, PI_DOUBLE);
ctx.fillStyle = colores[1];
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(250, 620, circuloRad, 0, PI_DOUBLE);
ctx.fillStyle = colores[2];
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(250, 500, circuloRad, 0, PI_DOUBLE);
ctx.fillStyle = colores[3];
ctx.fill();
ctx.stroke();
ctx.closePath();
};

dibujaCuadro1();

function dibujaCuadro2() {

    let circuloRad = 40
    let colores = ['aqua', 'pink', 'orange', 'lime', 'black', 'lightblue', 'white'];
    ctx.beginPath();
    ctx.rect(400,400, 300,300)
    ctx.stroke();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.moveTo(550,400);
    ctx.lineTo(550, 550);
    ctx.lineTo(400,700);
    ctx.moveTo(550,550);
    ctx.lineTo(700,700);
    ctx.strokeStyle = colores[2];
    ctx.stroke();
    ctx.closePath();
}

dibujaCuadro2();

//--------------------- STEP 7 -------------------//


function randomInt(min, max) {
	min = Math.ceil(min)
	max = Math.floor(max)
	return Math.floor(Math.random() * (max - min + 1) + min) 
}

function ball(color, position, radius) {
	ctx.beginPath()
	ctx.fillStyle = color

	ctx.arc(position.x, position.y, radius, 0, Math.PI * 2)

	ctx.fill()

	ctx.closePath()
}

function rectangle(color,position,width,height) {

    ctx.beginPath()

    ctx.fillStyle = color

    ctx.rect(position.x ,position.y ,width ,height)

    ctx.fill()

    ctx.closePath()

}   


function drawRandomShapes(count) {

for (let i = 1; i <= count; i++) {
	ball(
		`rgba(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0,255)}, 
        
        ${Math.random()})`,
		{
			x: randomInt(0, innerWidth),
			y: randomInt(0, innerHeight),
		},
		randomInt(5, 100)
        
	)
{
        rectangle(
            `rgba(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0,255)}, 
            
            ${Math.random()})`,
            {
                x: randomInt(0, innerWidth),
                y: randomInt(0, innerHeight),
                
            },
            width = randomInt(50, 200),
            height = randomInt(50, 200),
        )
}
}
}

drawRandomShapes()