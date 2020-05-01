const BACKGROUND_COLOUR='#000000';
const LINE_COLOUR='#FFFFFF';
const LINE_WIDTH=13;
// count=0;

var currentX=0;
var currentY=0;
var prevX=0;
var prevY=0;

var canvas;
var context;

function prepareCanvas() {
	 // console.log('preparing Canvas');
	 canvas = document.getElementById('my-canvas');
	 context = canvas.getContext('2d')


	context.fillStyle = BACKGROUND_COLOUR;
	context.fillRect(0,0,canvas.clientWidth,canvas.clientHeight);

	context.strokeStyle=LINE_COLOUR;
	context.lineWidth=LINE_WIDTH;
	context.lineJoin='round';

	var isPainting =false;

	canvas.addEventListener('mousedown',(event)=>{
		isPainting=true;
		// console.log('Mouse press');
		currentX=event.clientX-canvas.offsetLeft;
		currentY=event.clientY-canvas.offsetTop;
	});
	canvas.addEventListener('mousemove',(event)=>{
		if(isPainting===true){
		prevX=currentX;
		currentX=event.clientX-canvas.offsetLeft;
		prevY=currentY;
		currentY=event.clientY-canvas.offsetTop;
		draw();
		};		
	});
	canvas.addEventListener('mouseup',(event)=>{
		// console.log('Mouse Released')
		isPainting=false;
	});
	canvas.addEventListener('touchstart',(event)=>{
		isPainting=true;


		// console.log('touchstart');
		currentX=event.touches[0].clientX-canvas.offsetLeft;
		currentY=event.touches[0].clientY-canvas.offsetTop;
	});

	canvas.addEventListener('touchmove',(event)=>{
		if(isPainting===true){
		prevX=currentX;
		currentX=event.touches[0].clientX-canvas.offsetLeft;
		prevY=currentY;
		currentY=event.touches[0].clientY-canvas.offsetTop;
		draw();
	};
		
	});
	canvas.addEventListener('touchcancel',(event)=>{
		isPainting=false;
	});
	
	
	canvas.addEventListener('mouseleave',(event)=>{
		isPainting=false;
		// console.log('Movecancel')
	});
}
	
function draw() {
	context.beginPath();
	context.moveTo(prevX, prevY);
	context.lineTo(currentX, currentY);
	context.closePath();
	context.stroke();
}

	function clearCanvas(){
		// console.log('clearCanvas()');
		 currentX=0;
		 currentY=0;
		 prevX=0;
		 prevY=0;
		 context.fillRect(0,0,canvas.clientWidth,canvas.clientHeight);

	}

