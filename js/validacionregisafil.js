function validarall(valor){
	emails = document.getElementById('boxcor').value;
	re=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
	if(!re.exec(emails)){
		alert('email no valido');
	}
	else {
	}

	a = document.getElementById('boxdy').value;
	m = document.getElementById('boxdm').value;
	d = document.getElementById('boxdd').value;

    if( (a < 1950) || (a > 2020) || (m < 1) || (m > 12) || (d < 1) || (d > 31) ){
       alert("fecha mal")
       return false;
    }
    else{
    	if((a%4 != 0) && (m == 2) && (d > 28)){
        	alert("fecha mal")
        	return false;
    	}
       	else{
       		if( (((m == 4) || (m == 6) || (m == 9) || (m==11)) && (d>30)) || ((m==2) && (d>29)) ){
            	alert("fecha mal")
            	return false;
       		}
       	}
    }
}

function validarn(e) {
  // body... por parte del teclado
  var teclado = (document.all)?e.keyCode:e.which;
  if (teclado == 8) return true;
  var patron = /([A-Za-z\s])/;
  var tec = String.fromCharCode(teclado);
  return patron.test(tec); 
}

function validarspace(e) {
  // body... por parte del teclado
  var teclado = (document.all)?e.keyCode:e.which;
  if (teclado == 8) return true;
  var patron = /([\w\d\n\S])/;
  var tec = String.fromCharCode(teclado);
  return patron.test(tec); 
}

function validarspacec(e) {
  // body... por parte del teclado
  var teclado = (document.all)?e.keyCode:e.which;
  if (teclado == 8) return true;
  var patron = /([\w\d\S])/;
  var tec = String.fromCharCode(teclado);
  return patron.test(tec); 
}

function validardate(e) {
  // body... por parte del teclado
  var teclado = (document.all)?e.keyCode:e.which;
  if (teclado == 8) return true;
  var patron = /([0-9])/;
  var tec = String.fromCharCode(teclado);
  return patron.test(tec); 
}