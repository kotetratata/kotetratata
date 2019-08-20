 function ex1() {

 	function makeWorker() {
	  let name = "Pete";

	  return function() {
	    alert(name);
	  };
	}

	let name = "John";

	// create a function
	let work = makeWorker();

	// call it
	work();
 }


 ///////////////////////////////////////////
 function ex2() {

	let name = "John";

	function sayHi() {
	  alert("Hi, " + name);
	}

	name = "Pete"; // (*)

	sayHi()
 }


 //////////////////////////////
 function ex3() {
 
	 function sayHiBye(firstName, lastName) {

	  // функция-помощник, которую мы используем ниже
	  function getFullName() {
	    return firstName + " " + lastName;
	  }

	  alert( "Hello, " + getFullName() );
	  alert( "Bye, " + getFullName() );

	}
 }


  //////////////////////////////
 function ex4() {
 
	// функция-конструктор возвращает новый объект
	function User(name) {

	// методом объекта становится вложенная функция
	this.sayHi = function() {
		alert(name);
		};
	}

	let user = new User("John");
	user.sayHi(); // у кода метода "sayHi" есть доступ к внешней переменной "name"
}




/////////////////////////////////////
function ex5() {

	function makeCounter() {
	  let count = 0;

	  return function() {
	    return count++; // есть доступ к внешней переменной "count"
	  };
	}

	let counter = makeCounter();

	alert( counter() ); // 0
	alert( counter() ); // 1
	alert( counter() ); // 2
}






/////////////////////////////////////
function ex6() {

	for (let i = 0; i < 10; i++) {
	  // У каждого цикла своё собственное лексическое окружение
	  // {i: value}
	}

	alert(i); // Ошибка, нет такой переменной
}







/////////////////////////////////////
function ex7() {

	{
	  // сделать какую-нибудь работу с локальными переменными, которые не должны быть видны снаружи

	  let message = "Hello";

	  alert(message); // Hello
	}

	alert(message); // Ошибка: переменная message не определена
}





//////////////////////////////////
function ex8() {

	function f() {
	  let value = Math.random();

	  function g() {
	    debugger; // в консоли: напишите alert(value); Такой переменной нет!
	  }

	  return g;
	}

	let g = f();
	g();

}





//////////////////////////////////
function ex8() {

	let value = "Сюрприз!";

	function f() {
	  let value = "ближайшее значение";

	  function g() {
	    debugger; // в консоли: напишите alert(value); Сюрприз!
	  }

	  return g;
	}

	let g = f();
	g();
	
}