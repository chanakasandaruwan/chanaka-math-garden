
var model;
async function loadModel(){
// 	const dataX0 = [[0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.33,0.73,0.62,0.59,0.24,0.14,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.87,1.00,1.00,1.00,1.00,0.95,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.67,0.20,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.26,0.45,0.28,0.45,0.64,0.89,1.00,0.88,1.00,1.00,1.00,0.98,0.90,1.00,1.00,0.55,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.07,0.26,0.05,0.26,0.26,0.26,0.23,0.08,0.93,1.00,0.42,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.33,0.99,0.82,0.07,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.09,0.91,1.00,0.33,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.51,1.00,0.93,0.17,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.23,0.98,1.00,0.24,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.52,1.00,0.73,0.02,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.04,0.80,0.97,0.23,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.49,1.00,0.71,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.29,0.98,0.94,0.22,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.07,0.87,1.00,0.65,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.01,0.80,1.00,0.86,0.14,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.15,1.00,1.00,0.30,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.12,0.88,1.00,0.45,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.52,1.00,1.00,0.20,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.24,0.95,1.00,1.00,0.20,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.47,1.00,1.00,0.86,0.16,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.47,1.00,0.81,0.07,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00
// ]] ; 
 	// const myTensor=tf.tensor(dataX0);
  	model = await tf.loadGraphModel('TFJS/model.json');
  	// const result=model.predict(myTensor);
  	// result.print();
  }

  function predictImage(){

	let image = cv.imread(canvas);
	cv.cvtColor(image, image, cv.COLOR_RGBA2GRAY, 0);
	cv.threshold(image, image, 175, 255, cv.THRESH_BINARY);
	let contours = new cv.MatVector();
	let hierarchy = new cv.Mat();
// You can try more different parameters
	cv.findContours(image, contours, hierarchy, cv.RETR_CCOMP, cv.CHAIN_APPROX_SIMPLE);
	// Testing Only (delete later)
	let cnt = contours.get(0);
// You can try more different parameters
	let rect = cv.boundingRect(cnt);//make a rectantangle around the contoures
	image=image.roi(rect)//crop the image to rectangle area

	var height =image.rows;
	var width = image.cols;
	// console.log('height',height);
	// console.log('width',width);
	var ratio=width/height;

	var ratio_1=image.rows/20
	// console.log('ratio',ratio);
	// console.log('ratio_1',ratio_1);
	if(height>width){
		height=20;
		const scaleFactorH=image.rows/height;
		width=Math.round(image.cols/scaleFactorH);		
	}
	if(height<width){
		width=20;
		const scaleFactorW=image.cols/width;
		height=Math.round(image.rows/scaleFactorW);
	}
	let dsize = new cv.Size(width, height);
	cv.resize(image, image, dsize, 0, 0, cv.INTER_AREA);//after crop make the 20 to max height/width
	const LEFT=Math.ceil(4+(20-width)/2);
	const RIGHT=Math.floor(4+(20-width)/2);
	const TOP=Math.ceil(4+(20-height)/2);
	const BOTTOM=Math.floor(4+(20-height)/2);
	//make the color(black) to all the are and fill
	const color =new cv.Scalar(0, 0, 0, 0);
	cv.copyMakeBorder(image,image, TOP, BOTTOM, LEFT, RIGHT, cv.BORDER_CONSTANT,value=color)

	// console.log(`top${TOP}LEFT${LEFT}RIGHT${RIGHT}BOTTOM${BOTTOM}`)

//Centre of Mass

	cv.findContours(image, contours, hierarchy, cv.RETR_CCOMP, cv.CHAIN_APPROX_SIMPLE);
	cnt=contours.get(0);
	const M = cv.moments(cnt,false);//false mean do not use binary image 
	const cX = M["m10"] / M["m00"]
	const cY = M["m01"] / M["m00"]
	// console.log(`cX${cX}M.m00${M.m00}cY${cY}`)

	const X_SHIFT = Math.round(image.cols/2.0-cX);
	const Y_SHIFT = Math.round(image.rows/2.0-cX);

	let k = cv.matFromArray(2, 3, cv.CV_64FC1, [1, 0, X_SHIFT, 0, 1, Y_SHIFT]);
	let dsize_2 = new cv.Size(image.rows, image.cols);
	//Shiftting the values to centre
	cv.warpAffine(image, image, k, dsize_2, cv.INTER_LINEAR, cv.BORDER_CONSTANT, color);

	let pixelValues = image.data;
	pixelValues=Float32Array.from(pixelValues);
	pixelValues=pixelValues.map((number)=>{
		return number/255.0;
	});

	const x = tf.tensor([pixelValues]);

	// console.log(`divedValues: ${pixelValues}`);
	// console.log(`Shape Of Tensor: ${X.shape}`);
	// console.log(`dtype Of Tensor: ${X.dtype}`);
	const pred=model.predict(x);
	pred.print();
	const output=pred.dataSync()[0];
	// console.log(tf.memory());
	// const outputCanvas = document.createElement('CANVAS');
	// cv.imshow(outputCanvas,image);
	// document.body.appendChild(outputCanvas);

	//CleanUp
	k.delete();
	image.delete();
	contours.delete();
	cnt.delete();
	hierarchy.delete();
	x.dispose();
	pred.dispose();

	return output;
	 // console.log('processing ...');

  }