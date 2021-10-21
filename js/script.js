'use strict';


const rub = document.querySelector('#rub'),
	  usd = document.querySelector('#usd');


// console.log(rub);
// console.log(usd);

rub.addEventListener('input' , () => {
	//используем встроенный объект браузера 
	//xmlhttprequest

	//Создаем объект
	const request = new XMLHttpRequest();
	
	//open - собирает настройки
	//request.open(method, URL, async, user, password)
	request.open('GET', 'js/curren1t.json');

	//http заголовки для передачи джейсон файлов
	request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
	//Метод отправки принемает аргумент request.send(body)
	// НО в GET запросе body не будет;
	request.send();

	// status
	// statusText
	// response - ответ
	// readyState 1 2 3 4 - статус готовности

	//readystatechange - cобытие которое
	// отслеживает статус готовности нажего запроса в данный момент
	request.addEventListener('load', () => {
		if(request.status === 200 ) {
			console.log(request.response);

			//Обект тут
			const data = JSON.parse(request.response);
			// console.log(data);
			usd.value = (+rub.value / data.current.usd).toFixed(2);

		} else {
			usd.value = "Что-то пошло не так";
		}

	});

});