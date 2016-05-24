var a= document.getElementById('a');
actiune=0;
var apare= function(){
	a.style.display = "none";
	actiune=actiune+1;
}
var dispare= function(){
	console.log(actiune);
	if(actiune%2 === 0){
		a.style.display=  "block";
	}
	
}
