
// comte enrere
  var vegades=0;
  var tomin=0;
	function opci(nume){
		vegades=vegades+1;
		var indice=nume.selectedIndex;
		tomin = nume.options[indice].value;
		
		
	}


  
	function contador(cron) {
	
		//if(vegades>1){vegades=1; break;}
		
		cron.innerHTML=tomin;
		tomin=tomin-1;
		
		cron.value=tomin;
	
		if(tomin<0){ document.cron.value='0';
			}else{
			setTimeout("contador(cron)",1000);
		}
	}
