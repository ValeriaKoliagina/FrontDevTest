document.querySelector('#children').checked = false;

document.querySelector('#men').onchange = function() {
	if (document.querySelector('#men:checked')) {
		document.querySelector('.men').style = 'display:block'; 
	} else {
		document.querySelector('.men').style = 'display:none';
	}
}

document.querySelector('#women').onchange = function() {
	if (document.querySelector('#women:checked')) {
		document.querySelector('.women').style = 'display:block'; 
	} else {
		document.querySelector('.women').style = 'display:none';
	}
}

document.querySelector('input[type="reset"]').onclick = function() {
	document.querySelector('#women').checked = 'checked';
	document.querySelector('#men').checked = 'checked';
	document.querySelector('#children').checked = 'checked';
	document.querySelector('.men').style = 'display:block'; 
	document.querySelector('.women').style = 'display:block'; 
}

function comparePrice(a, b) {
	
	var priceA = parseFloat(a.getElementsByClassName('price')[0].innerHTML);
	var priceB = parseFloat(b.getElementsByClassName('price')[0].innerHTML);
	
	return priceA - priceB;
}

function compareName(a, b) {
	
	var nameA = a.getElementsByClassName('name')[0].innerHTML;
	var nameB = b.getElementsByClassName('name')[0].innerHTML;
	
	if (nameA > nameB) 
		return 1;
	else return -1;
}

function compareDefault(a, b) {
	
	return a.dataset.number - b.dataset.number;
}


document.querySelector('#sort').onchange = function() {
	var menGoods = document.querySelectorAll('.men .goods');
	var newMenGoods = [];

	for (var i = 0; i < menGoods.length; i++){
		newMenGoods[i] = menGoods[i];
	}
			
	var womenGoods = document.querySelectorAll('.women .goods');
	var newWomenGoods = [];

	for (var i = 0; i < womenGoods.length; i++){
		newWomenGoods[i] = womenGoods[i];
	}
			
	document.querySelector('.men .all_goods').innerHTML = ''; 
	document.querySelector('.women .all_goods').innerHTML = '';
			
			
	switch (this.value) {
		case 'Price': 
			
			newMenGoods.sort(comparePrice);
			newWomenGoods.sort(comparePrice);
			
		break;
		
		case 'Name':
			
			newMenGoods.sort(compareName);
			newWomenGoods.sort(compareName);
			
		break;
		
		case 'None': 
		
			newMenGoods.sort(compareDefault);
			newWomenGoods.sort(compareDefault);
			
		break;
	}
	
	for (var i = 0; i < newMenGoods.length; i++) {
		document.querySelector('.men .all_goods').innerHTML += newMenGoods[i].outerHTML;
	}
		
	for (var i = 0; i < newWomenGoods.length; i++) {
		document.querySelector('.women .all_goods').innerHTML += newWomenGoods[i].outerHTML;
	}
}
			
