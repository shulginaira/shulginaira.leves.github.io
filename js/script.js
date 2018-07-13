$('.order').on('click', function(){
	$('.contact_formnone').addClass('contact_form').removeClass('contact_formnone');
	$('.overlay').css('display', 'block');
});
$('.description_btn').on('click', function(){
	$('.contact_formnone').addClass('contact_form').removeClass('contact_formnone');
	$('.overlay').css('display', 'block');
});
$('.form_close').on('click', function(){
	$('.contact_form').addClass('contact_formnone').removeClass('contact_form');
	$('.overlay').css('display', 'none');

});

$('.size_table').on('click', function(){
	$('.table_size_none').addClass('table_size').removeClass('table_size_none');
	$('.overlay').css('display', 'block');
});
$('.size_close').on('click', function(){
	$('.table_size').addClass('table_size_none').removeClass('table_size');
});

$('.guide_copy').on('mouseover', function(event) {
	if($('.guide_copy1').hasClass('guide_copy1')){
		$('.guide_copy1').addClass('guide_copy').removeClass('guide_copy1');


	}
	if($(this).hasClass('guide_copy')){
		
		$(this).addClass('guide_copy1').removeClass('guide_copy');
		$(this).children('.box_wrap').addClass('activ');
	}
});
$('.guide_copy').on('mouseout', function(event) {
	if($('.guide_copy1').hasClass('guide_copy1')){
		$('.guide_copy1').addClass('guide_copy').removeClass('guide_copy1');
		$(this).children('.box_wrap').removeClass('activ');
	}

});


$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
         $('.menu_item_child').css('textDecoration','none').css('color','#333333');
        // $(".act").removeClass("act");//Удаляем класс у прошлого выделенного

  		$(this).addClass("act");//добовляем класс
        $(this).css('textDecoration','none').css('color','#c41230');
        var id  = $(this).attr('href'),
               

            top = $(id).offset().top;

        $('body,html').animate({scrollTop: top}, 1500);

    });
		

    $(".icon_menu").on("click","a", function (event) {

    
         $('.menu_item_child').css('textDecoration','none').css('color','#333333');
      

  		$(this).addClass("act");//добовляем класс
        $(this).css('textDecoration','none').css('color','#c41230');
        var id  = $(this).attr('href'),
               

            top = $(id).offset().top;

        $('body,html').animate({scrollTop: top}, 1500);
            event.preventDefault();

    });

 

	
	$(".images").click(function(){	// Событие клика на маленькое изображение

	  	var img = $(this).children();	// Получаем изображение, на которое кликнули
		var src = img.attr('src'); // Достаем из этого изображения путь до картинки
		$("body").append("<div class='popup'>"+ //Добавляем в тело документа разметку всплывающего окна
						 "<div class='popup_bg'></div>"+ // Блок, который будет служить фоном затемненным
						 "<img src="+src+" class='popup_img' />"+ // Само увеличенное фото
						 "</div>"); 
		$(".popup").fadeIn(800); // Медленно выводим изображение
		$(".popup_bg").click(function(){	// Событие клика на затемненный фон	   
			$(".popup").fadeOut(800);	// Медленно убираем всплывающее окно
			setTimeout(function() {	// Выставляем таймер
			  $(".popup").remove(); // Удаляем разметку высплывающего окна
			}, 800);
		});
	});
	
});

  





