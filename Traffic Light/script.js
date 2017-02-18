window.onload = function() {
	
	trafficLight = document.getElementById('traffic');
	var lightArray = document.getElementById('traffic').children;

	function changeColor(color) {

		for(var i = 0; i < lightArray.length; i++) {
			if(lightArray[i].id === color){
				lightArray[i].classList.remove('off')
			} else {
				if(!lightArray[i].classList.contains('off')){
					lightArray[i].classList.add('off');
				}
			}
		}
	};

	traffic.addEventListener('click', function(event){
		var color = event.target.id 
		changeColor(color);
	});

//=== automate the light === /
	var currentColor = 'green';

	function auto(color, time){
		changeColor(color);
		setTimeout(function(){
			if(currentColor === 'green'){
				currentColor = "yellow";
				auto('yellow', 500);
			} else if(currentColor === 'yellow') {
				currentColor = "red";
				auto('red', 3000);
			} else {
				currentColor = "green";
				auto('green', 3000);
			}
		}, time)	
	}
	
	auto('green', 1000);

};
