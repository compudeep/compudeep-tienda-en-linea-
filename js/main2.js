const grid = new Muuri('.grid',{
     layout: {
        rounding: false
     }
});


window.addEventListener('load', () => {
    grid.refreshItems().layout();
    document.getElementById('grid').classList.add('imagenes-cargadas');
	
	//agregando los listener de los enlases para filtrearlos por categorias =========
	
	const enlaces = document.querySelectorAll('#categorias a');
	enlaces.forEach((elemento) => {
		elemento.addEventListener('click', (evento) => {
			evento.preventDefault();
			enlaces.forEach((enlace) => enlace.classList.remove('activo'));
			evento.target.classList.add('activo');
			
			const categoria = evento.target.innerHTML.toLowerCase();
			
			categoria === 'todos' ? grid.filter('[data-categoria]') : grid.filter(`[data-categoria="${categoria}"]`);
			
		});
	});
	
	//agrgando el listener para la barra de busqueda ====================
	
	document.querySelector('#barra-busqueda').addEventListener('input',(evento) => {
		const busqueda = evento.target.value;
		grid.filter( (item) => item.getElement().dataset.etiquetas.includes(busqueda) );
		
	});
	
	//agregando listener para las imagenes overlay===
	const overlay = document.getElementById('overlay');
	document.querySelectorAll('.grid .item img').forEach((elemento) => {
		const ruta = elemento.getAttribute('src');
		const descripcion = elemento.parentNode.parentNode.dataset.descripcion;
		
		elemento.addEventListener('click', () => {
			overlay.classList.add('activo');
			document.querySelector('#overlay img').src = ruta;
			document.querySelector('#overlay .descripcion').innerHTML = descripcion;
			
		});
		
	});
	
	//agregando el event listener del boton cerrar ========
	
	document.querySelector('#btn-cerrar-popup').addEventListener('click', () => {
		overlay.classList.remove('activo');
	});
	
	//agregando event listener para cerrar con click en el overlay osea dando click en la parte obscura de la pantalla ========
	
	overlay.addEventListener('click', (evento) => {
		
		evento.target.id === 'overlay' ? overlay.classList.remove('activo') : '';
		
	})
});