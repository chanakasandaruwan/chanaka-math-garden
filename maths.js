var answer;
var score = 0;
var backgroundImages = [];

function nextQuestion() {
	const n1=Math.round(Math.random()*5);
	document.getElementById('n1').innerHTML=n1;
	const n2=Math.round(Math.random()*5);
	document.getElementById('n2').innerHTML=n2;
	answer=n1+n2;
}
function checkAnswer(){
	const predicton=predictImage();
	console.log(`answer:${answer},predicton:${predictImage()}`);

	if (predicton == answer ){
		score=score+1;
			if(score>6){
					alert('Congratulation! Restart And PlayAgain');
				    score=0;
				    backgroundImages=[];
					document.body.style.backgroundImage=backgroundImages;			
			}else{
					console.log(`Correct! Score ${score}`);
					backgroundImages.push(`url('images/background${score}.svg')`);
					document.body.style.backgroundImage=backgroundImages;}
	}else{
		setTimeout(()=>{
	
	if(score>1){
		score=score-1;
		backgroundImages.pop(`url('images/background${score+1}.svg')`);
		document.body.style.backgroundImage=backgroundImages;
	}else if(score==1){
		score=score-1;
		backgroundImages=[];
		document.body.style.backgroundImage=backgroundImages;
	}else{backgroundImages=[];
		document.body.style.backgroundImage=backgroundImages;}
	console.log(`Wrong! Score ${score}`);
	alert('Wrong Answer Try Again');
},1500)
			}
	
}