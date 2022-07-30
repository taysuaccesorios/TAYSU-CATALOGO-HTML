

var contador_flecha = 0;
function slideDer() {
    
    $(".pages").hide(); $('.posicion-boton').addClass('d-none'); $('.tri_l').removeClass('no-event'); $('.tri_r').removeClass('no-event');

    contador_flecha += 1;
    console.log(contador_flecha);

    if (contador_flecha == 0) {
        $('.tri_r').addClass('no-event');
        $(".page0").show(200);

    } else if (contador_flecha == 1) {
        $(".page1").show(200);

    } else if (contador_flecha == 2) {
        $(".page2").show(200);
        
    } else if (contador_flecha == 3) {
        $(".page3").show(200);
        $('#pañoletaN').removeClass('d-none');

    } else if (contador_flecha == 4) {
        $(".page4").show(200);
        $('#pañoletaD').removeClass('d-none');
        
    } else if (contador_flecha == 5) {
        $(".page5").show(200);
        $('#sacos').removeClass('d-none');
        
    } else if (contador_flecha == 6) {
        $(".page6").show(200);
        $('#tutus').removeClass('d-none');
    } else if (contador_flecha == 7) {
        $(".page7").show(200);
        $('#camas').removeClass('d-none');
        
    } else if (contador_flecha == 8) {
        $(".page8").show(200);
        $('#comedores').removeClass('d-none');
        
    } else if (contador_flecha == 9) {
        $(".page9").show(200);
        $('#arnes').removeClass('d-none');
        
    } else if (contador_flecha == 10) {
        $(".page10").show(200);
        $('#corbatin').removeClass('d-none');
        
    } else if (contador_flecha == 11) {
        $(".page11").show(200);
        $('#handmade').removeClass('d-none');
        
    } else if (contador_flecha == 12) {
        $(".page12").show(200);
        $('#redes').removeClass('d-none');
    } else if (contador_flecha == 13) {
        
        $(".page13").show(200);
        $('.tri_l').addClass('no-event');
    }
}

function slideIzq() {
    
    $(".pages").hide(); $('.posicion-boton').addClass('d-none'); $('.tri_r').removeClass('no-event'); $('.tri_l').removeClass('no-event');

    contador_flecha -= 1;
    console.log(contador_flecha);

    if (contador_flecha == 0) {
        $('.tri_r').addClass('no-event');
        $(".page0").show(200);

    } else if (contador_flecha == 1) {
        $(".page1").show(200);

    } else if (contador_flecha == 2) {
        $(".page2").show(200);
        
    } else if (contador_flecha == 3) {
        $(".page3").show(200);
        $('#pañoletaN').removeClass('d-none');
        
    } else if (contador_flecha == 4) {
        $(".page4").show(200);
        $('#pañoletaD').removeClass('d-none');
        
    } else if (contador_flecha == 5) {
        $(".page5").show(200);
        $('#sacos').removeClass('d-none');
        
    } else if (contador_flecha == 6) {
        $(".page6").show(200);
        $('#tutus').removeClass('d-none');
    } else if (contador_flecha == 7) {
        $(".page7").show(200);
        $('#camas').removeClass('d-none');
        
    } else if (contador_flecha == 8) {
        $(".page8").show(200);
        $('#comedores').removeClass('d-none');
        
    } else if (contador_flecha == 9) {
        $(".page9").show(200);
        $('#arnes').removeClass('d-none');
        
    } else if (contador_flecha == 10) {
        $(".page10").show(200);
        $('#corbatin').removeClass('d-none');
        
    } else if (contador_flecha == 11) {
        $(".page11").show(200);
        $('#handmade').removeClass('d-none');
    } else if (contador_flecha == 12) {
        $(".page12").show(200);
        $('#redes').removeClass('d-none');
    } else if (contador_flecha == 13) {
        
        $(".page13").show(200);
        $('.tri_l').addClass('no-event');
    }
}



var cambioBoton = 0;
var select = document.getElementById('talla');
var select1 = document.getElementById('medida');
var talla;
var medida;
var medidaComedores;
var link1 = "https://api.whatsapp.com/send?phone=573054025529&"

select.addEventListener('change',
function(){
    var selectedOption = this.options[select.selectedIndex];
    talla = selectedOption.text;
});

select1.addEventListener('change',
function(){
    var selectedOption = this.options[select1.selectedIndex];
    medida = selectedOption.text;
});

function getValorComedor() {
	medidaComedores = $("#medidaP").val();
}




function getElement(num) {

	
		if (num == 1) {
	
	var link2 = "text=hola%20Camila,%20quiero%20saber%20que%20pa%C3%B1oletas%20"+talla+"%20tiene%20para%20mi%20peludito?"
	var link3 = link1+link2;
	window.open(link3, '_blank');

    } else if (num == 2) {
	
	var link2 = "text=hola%20Camila,%20quiero%20una%20pa%C3%B1oleta%20personalizada%20"+talla+"%20para%20mi%20peludito"
	var link3 = link1+link2;
	window.open(link3, '_blank');

    } else if (num == 3) {
	
	var link2 = "text=hola%20Camila,%20quiero%20preguntar%20por%20saquitos%20"+talla+"%20para%20mi%20peludito?"
	var link3 = link1+link2;
	window.open(link3, '_blank');

    } else if (num == 4) {
	
	var link2 = "text=hola%20Camila,%20quiero%20preguntar%20por%20tutus%20"+talla+"%20para%20mi%20princesa?"
	var link3 = link1+link2;
	window.open(link3, '_blank');

    } else if (num == 5) {
	
	var link2 = "text=hola%20Camila,%20quiero%20preguntar%20por%20camitas%20"+medida+"%20para%20mi%20peludito?"
	var link3 = link1+link2;
	window.open(link3, '_blank');

    } else if (num == 6) {
	var link2 = "text=hola%20Camila,%20como%20son%20los%20comedores%20en%20madera,%20me%20podr%C3%ADas%20dar%20una%20cotizaci%C3%B3n%20para%20una%20medida%20de%20"+medidaComedores+"?"
	var link3 = link1+link2;
	window.open(link3, '_blank');

    } else if (num == 7) {
	
	var link2 = "text=hola%20Camila,%20quiero%20preguntar%20por%20Arneses%20"+talla+"%20para%20mi%20peludito?"
	var link3 = link1+link2;
	window.open(link3, '_blank');

    } else if (num == 8) {
	
	var link2 = "text=hola%20Camila,%20quiero%20preguntar%20por%20corbatines%20para%20mi%20peludito?"
	var link3 = link1+link2;
	window.open(link3, '_blank');

    } else if (num == 9) {
	
	var link2 = "text=hola%20Camila,%20quiero%20preguntar%20por%20collares%20"+talla+"%20para%20mi%20peludito?"
	var link3 = link1+link2;
	window.open(link3, '_blank');

    } else if (num == 10) {
	
	var link2 = "text=hola%20Camila,%20quiero%20pertenecer%20a%20la%20TAYSU%20familia"
	var link3 = link1+link2;
	window.open(link3, '_blank');

    }

} 

function crearModal(num) {
	$('#modalpersonalizado').modal("show");
	$('.text-normal').removeClass('d-none'); $('.div-normal').removeClass('d-none');
	$('.text-comedores').addClass('d-none'); $('.div-comedores').addClass('d-none'); $('.text-camas').addClass('d-none'); $('.div-camas').addClass('d-none');
	
	if (num == 1) {
		$('#img-modal').attr('src', '../assets/img/img' +  num + '.png');
		cambioBoton = 1;

	} else if (num == 2) {
		$('#img-modal').attr('src', '../assets/img/img' +  num + '.png');
		cambioBoton = 2;

	} else if (num == 3) {
		$('#img-modal').attr('src', '../assets/img/img' +  num + '.png');
		cambioBoton = 3;

	} else if (num == 4) {
		$('#img-modal').attr('src', '../assets/img/img' +  num + '.png');
		cambioBoton = 4;

	} else if (num == 5) {
		$('#img-modal').attr('src', '../assets/img/img' +  num + '.png');
		$('.text-normal').addClass('d-none'); $('.div-normal').addClass('d-none');
		$('.text-camas').removeClass('d-none'); $('.div-camas').removeClass('d-none');
		
		cambioBoton = 5;

	} else if (num == 6) {
		$('#img-modal').attr('src', '../assets/img/img' +  num + '.png');
		$('.text-normal').addClass('d-none'); $('.div-normal').addClass('d-none');
	    $('.text-comedores').removeClass('d-none'); $('.div-comedores').removeClass('d-none');
		cambioBoton = 6;

	} else if (num == 7) {
		
		$('#img-modal').attr('src', '../assets/img/img' +  num + '.png');
		cambioBoton = 7;

	} // #8 son los corbatines que estan en el otro modal creado
	  else if (num == 9) {
		$('#img-modal').attr('src', '../assets/img/img' +  num + '.gif');
		cambioBoton = 9;

	}
}

function crearModal1(num) {
	$('#modalSinForm').modal("show");
	$('.text-corbatines').addClass('d-none'); $('.div-corbatines').addClass('d-none');
	$('.text-seguir').addClass('d-none'); $('.div-seguir').addClass('d-none');

	if (num == 8) {
		$('.text-corbatines').removeClass('d-none'); $('.div-corbatines').removeClass('d-none');
		$('#img-modal1').attr('src', '../assets/img/img' +  num + '.gif');
		cambioBoton = 8;
	} else if (num == 10) {
		$('.text-seguir').removeClass('d-none'); $('.div-seguir').removeClass('d-none');
		cambioBoton = 10;
	}
}
