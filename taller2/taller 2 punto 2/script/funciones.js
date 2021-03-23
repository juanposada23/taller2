function cambiarImg(){
	let arrayCoche = ["imagen/auto1.jpg","imagen/auto2.jpg","imagen/auto3.jpg","imagen/auto4.jpg","imagen/auto5.jpg","imagen/auto6.jpg"];
    let arrayTexto = ["Model S","Model 3","Model X","Model Y","Rodaster","Cybertruck"];
    
    let posicion = 0;

    let cambioImg = function (){
    	if (posicion < 6) {
            document.getElementById("bienvenido").style.color = "white";
            document.getElementById("infoImg").src = arrayCoche[posicion];
    		document.getElementById("infoImg").innerHTML = "<style>"+"#infoImg { opacity: 1; width: 100%; height:800px; transition: opacity 3.1s; }"+"</style>";
            setTimeout(animacionImg,2900);
            document.getElementById("textoInf").innerHTML = "<p>"+arrayTexto[posicion]+"</p>";
            document.getElementById("textoInf").style.transform ="translateX(400px)";
            document.getElementById("textoInf").style.color = "#F4F4F4";
    		posicion++;
    	}else{
    		posicion = 0;
    		document.getElementById("infoImg").src = arrayCoche[posicion];
    		document.getElementById("infoImg").innerHTML = "<style>"+"#infoImg { opacity: 1; width: 100%; height:800px; transition: opacity 3.1s; }"+"</style>";
            setTimeout(animacionImg,2900);
            document.getElementById("textoInf").innerHTML = "<p>"+arrayTexto[posicion]+"</p>";
            document.getElementById("textoInf").style.transform ="translateX(400px)";
            document.getElementById("textoInf").style.color = "#F4F4F4";
    		posicion++;
    	}
    }	
    setInterval(cambioImg,4700);                       
}

let animacionImg = function (){
    document.getElementById("textoInf").innerHTML = null;
    document.getElementById("textoInf").style.left = "-400px";
    document.getElementById("infoImg").innerHTML = "<style>"+"#infoImg { opacity: 0.0; transition: opacity 3.5s; }"+"</style>";
}


window.addEventListener('scroll',function(){
    let animacion  = document.getElementById("caja1");
    let posicion = animacion.getBoundingClientRect().top;
    let tamanoPantalla = window.innerHeight;
    console.log(tamanoPantalla);

    if(posicion < tamanoPantalla ){
        document.getElementById("historia").style.animation = 'moverText 3.7s';
    }
});


function animacionText(){

    let animacion = function(){
        
    }
}