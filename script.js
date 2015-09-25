window.onload = function () {

	var generate = document.getElementById('generate');
	var calculate = document.getElementById('calculate');
	var isElementsCreated = false;
	var month = document.getElementById('month');
	var day = document.getElementById('day');

	monthDay = [
		{
			name: "January",
			maxDays: 31
		},
		{
			name: "Fabruary",
			maxDays: 28
		},
		{
			name: "March",
			maxDays: 31
		},
		{
			name: "April",
			maxDays: 30
		},
		{
			name: "May",
			maxDays: 31
		},
		{
			name: "June",
			maxDays: 30
		},
		{
			name: "July",
			maxDays: 31
		},
		{
			name: "August",
			maxDays: 31
		},
		{
			name: "September",
			maxDays: 30
		},
		{
			name: "Oktober",
			maxDays: 31
		},
		{
			name: "November",
			maxDays: 30
		},
		{
			name: "December",
			maxDays: 31
		}
	];



	generate.onclick = function () {

	
	month.innerHTML = "";
	day.innerHTML = "";
	
				var arr, max_number, i, unic, evenArr;
				arr = [];
				max_number = 100;
				while (arr.length < 40) {
				  do {
				    unic = true;
				    a = Math.floor(Math.random() * 101);
				    for (i = 0; i < arr.length; i++) {
				      if (a == arr[i]) {
				       
				        unic = false;
				        break;
				      }
				    }
				  } while (!unic)
				  arr.push(a);
				}
				document.getElementById('generateArray').innerHTML = arr.join("&nbsp");
				console.log(arr.join(";"));


				


				calculate.onclick = function () {
				
				var evenArr = [];
				for (i = 0; i < arr.length; i++) {
					
					if (arr[i] % 2 == 0 && arr[i] !== 0) {
						
						evenArr.push(arr[i]);
						
						
						}
					};
				document.getElementById('string1').innerHTML = evenArr.join("&nbsp");

				var sortedArr = [].concat.apply(arr);
				sortedArr.sort(function(a, b) {
					return b - a;

				});
				
				
				document.getElementById('string2').innerHTML = sortedArr.join("&nbsp");

				var sumArr = [];
				
				for (var i = 3; i < arr.length; i += 4) {
					var sum = 0;
					for (var j = 0; j < 4; j++) {
						sum += arr[i - j];
					};
					sumArr.push(sum)
				};
				document.getElementById('string3').innerHTML = sumArr.join("&nbsp");
				
				var calcArr = [];
				var roundArr = [];
				for (var i = 0; i < arr.length; i++ ) {
					calcArr[i] = arr[i] / 4 * 2.175418;
					calcArr[i] = calcArr[i]*100;
					calcArr[i] = Math.round(calcArr[i]);
					calcArr[i] = calcArr[i] / 100;
					if (calcArr[i] <= 30) {
						roundArr.push(calcArr[i]);
					}
				}
				console.log(calcArr);
				console.log(roundArr);
				document.getElementById('string4').innerHTML = roundArr.join("&nbsp");



				var elems = document.getElementsByClassName('numbers');
				
				for (var i = elems.length - 1; i >= 0 ; i--) {
					
					elems[i].remove();
				}

				


				for (var i = 0; i < arr.length; i++ ) {
				    var span = document.createElement('span');
					span.className = 'numbers';
					span.innerHTML = arr[i];
					document.getElementById('numbeerDate').appendChild(span);
					// document.body.appendChild(span);
				}
		};
		

	};


	document.addEventListener('click', function(e){

		var t = e.target;
		var className = "numbers";
		var number = t.innerHTML;
		var clear = 'clear';
		

		if ( t.className == className) {

			if (month.innerHTML == '') {
				if (number <= 12 && number > 0) {
					month.innerHTML = number;
					
				}
			} else {
				if (number <= 31 && number > 0) {
					day.innerHTML = number;
				}
			}
			
		}
		else if ( t.className == clear) {
			month.innerHTML = "";
			day.innerHTML = "";
		}
	});
	
	document.getElementById('date').onclick = function(){
		var m = month.innerHTML - 1;
		var d = day.innerHTML;
		document.getElementById('formatM').innerHTML = monthDay[m].name;

		if (d > monthDay[m].maxDays) {
			alert('incorrect date')
			document.getElementById('FormatD').innerHTML = monthDay[m].maxDays;
		}
		else {
			document.getElementById('FormatD').innerHTML = d;
		}
	};
	

	var input = document.getElementById('input');
	var g = /^(\d|10)$/ ;
	document.getElementById('input').onkeyup = function() {
		var inputValue = input.value;
		
		console.log(g.test(inputValue));
		if (g.test(inputValue)) {

		}
		else{
			alert('only 0-10');
			input.value = '';
		}
	};
	


}