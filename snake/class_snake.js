
const topD = [0,-1];
const rightD = [1,0];
const bottomD = [0,1];
const leftD = [-1,0];
const topBorder = 0;
const rightBorder = 50;
const bottomBorder = 76;
const leftBorder = 0;
const baseSpeed = 10;
const lives = 3;
//////////////
class snake{
	static number = 0;
	constructor(){
		this.speed = 0;
		this.score = 0;
		this.bonus = 0;
		this.dies = 0;
		this.head = [25,37];
		this.headDirection = topD;
		this.tailLength = 2;
		this.tail = [[25,38],[25,39]];
		this.apples = [];
		this.eatenApples = [];
		this.gameOn = true;
		this.cooldown = true;
		snake.number++;
	}
	move(){
		if  (JSON.stringify(this.tail.last())!==JSON.stringify(this.eatenApples[0]))
			{
				this.tail.pop();
			}else{
				this.eatenApples.shift();this.tailLength++;
			}
		this.tail.unshift(this.head);
		this.head = [this.tail[0][0]+this.headDirection[0],this.tail[0][1]+this.headDirection[1]];
	}

	teleport(){
		if (this.head[0]<leftBorder){this.head[0]=rightBorder;}
		if (this.head[0]>rightBorder){this.head[0]=leftBorder;}
		if (this.head[1]<topBorder){this.head[1]=bottomBorder;}
		if (this.head[1]>bottomBorder){this.head[1]=topBorder;}
	}

	changeDirection(evt){
		if (this.cooldown){
			if (this.headDirection==rightD || this.headDirection==leftD){
				if (evt.keyCode==38 || evt.keyCode==87){
					this.headDirection = topD;	
				}
				if (evt.keyCode==40 || evt.keyCode==83){
					this.headDirection = bottomD;
				}
			}else{
				if (evt.keyCode==39 || evt.keyCode==68){
					this.headDirection = rightD;
				}
				if (evt.keyCode==37 || evt.keyCode==65){
					this.headDirection = leftD;
				}
			}
			this.cooldown = false;
		}
	}

	appleSpawn(){
		for (let i = this.apples.length - 1; i >= 0; i--) {
			this.apples.pop();
		}
		for (let i = this.apples.length; i<5; i++) {
			this.apples.push([(~~(Math.random()*rightBorder)),(~~(Math.random()*bottomBorder))])
		}	
	}	

	appleCollision(){
		for (let i = this.apples.length - 1; i >= 0; i--) {
			if  (JSON.stringify(this.head) === JSON.stringify(this.apples[i])){
				this.score+= 10+this.bonus;
				this.bonus++;
				this.speed+= 0.5;
				this.eatApple(this.apples[i],i);
				snakeView.interfaceRender(this,'score');
				this.appleSpawn();	
				snakeView.fieldRender(this.apples);
				break;
			}
		}
	}

	eatApple(apple,n){
		this.eatenApples.push(apple);
		this.apples.splice(n,1);
	}

	selfCollision(){
		for (let i = this.tailLength - 1; i >= 0; i--) {
			if (JSON.stringify(this.head) === JSON.stringify(this.tail[i])){
				this.bonus = 0;
				this.dies++;
				snakeView.interfaceRender(this,'score');
				snakeView.interfaceRender(this,'fail');
				alert('Watch out you have only '+(lives-this.dies)+' lives')
				if (this.dies == lives){
					this.gameOn = false;
				}
			}
		}		
	}

}


//////////////
class snakeView{

	static interfaceRender(obj,className) {
		let scoreTable = document.getElementsByClassName(className)[0];
		let str = `Your current score: ${obj.score}.`;
		if (className == 'fail'){str = `Your wasted lives ${obj.dies}.`;}
		scoreTable.innerHTML = str ;
	}

	static fieldRender(obj) {
		let renderArr = obj;
		let className = 'apl';
		if (!Array.isArray(obj)){
			renderArr = obj.tail.slice();
			renderArr.unshift(obj.head);
			className = 'snake';
		}
		snakeView.simpleRender(renderArr,className);
	}

	static simpleRender(arr,className){
		let field = document.getElementsByClassName(className);
		for (let i = field.length - 1; i >= 0; i--) {
			field[i].remove();
		}
		for (let i = arr.length - 1; i >= 0; i--) {
			let div = document.createElement('div');
			div.setAttribute("class", className);
			div.style.top = arr[i][1]*7+'px';
			div.style.left = arr[i][0]*7+'px';
			document.getElementsByClassName('game_field')[0].appendChild(div);
		}
	}
}

function gameLoop(obj){
	obj.cooldown = true;
	obj.move();
	obj.teleport();
	snakeView.fieldRender(obj);
	obj.appleCollision();
	obj.selfCollision();
	if (obj.gameOn){
		setTimeout(()=>{gameLoop(obj)},1000/(obj.speed+baseSpeed));
	}
}


document.addEventListener("DOMContentLoaded", ()=>{
	document.addEventListener('keydown', (evt)=>{abc.changeDirection(evt)});
	abc = new snake();
	snakeView.fieldRender(abc);
	abc.appleSpawn();
	snakeView.fieldRender(abc.apples);
	gameLoop(abc);
})




Array.prototype.last = function() {
	return this[this.length-1];
}
