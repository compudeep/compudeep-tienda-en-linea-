$(document).ready(function(){
	$('ul.tabs li a:first').addClass('active');
	$('.secciones article').hide();
	$('.secciones article:first').show();
	
	$('ul.tabs li a').click(function(){
		$('ul.tabs li a').removeClass('active');
		$(this).addClass('active');
		$('.secciones article').hide();
		
		var activeTab = $(this).attr('href');
		$(activeTab).show();
		return false;
	
		       
	});
		
});


document.querySelectorAll(".modal-container img").forEach(el=>{
	el.addEventListener("click",function(ev){
		ev.stopPropagation();
		this.parentNode.classList.add("active");
	})
});

document.querySelectorAll(".modal-container").forEach(el=>{
	el.addEventListener("click",function(ev){
		this.classList.remove("active");
	console.log("click");
	})
	
});