var product =[
   {
    img:'img/fore1.png',
    img_back:'img/back1.png',
    // img_side:'img/mini3.png',
    img_mf1:'img/mf11.png',
    img_mf2:'img/mf12.png',
    img_mf3:'img/mf13.png',
    title:'БОТИНКИ LEVI’S LEATHER JAX BOOTS BLACK',
    price: '1199 UAH',
    old_price: '4999 UAH'
  },
  {
    img:'img/fore2.png',
    img_back:'img/back2.png',
    img_mf1:'img/mf21.png',
    img_mf2:'img/mf22.png',
    img_mf3:'img/mf23.png',
    title:'БОТИНКИ LEVI’S LEATHER JAX BOOTS BROWN',
    price: '1199 UAH',
    old_price: '4999 UAH'
  },
  {
    img:'img/fore3.png',
    img_back:'img/back3.png',
    img_mf1:'img/mf31.png',
    img_mf2:'img/mf32.png',
    img_mf3:'img/mf33.png',
    title:'САПОГИ LEVI’S LEATHER JAX BOOTS',
    price: '1080 UAH',
    old_price: '4880 UAH'

  },
  {
    img:'img/fore4.png',
    img_back:'img/back4.png',
    img_mf1:'img/mf41.png',
    img_mf2:'img/mf42.png',
    img_mf3:'img/mf43.png',
    title:'САПОГИ LEVI’S LEATHER JAX BOOTS',
    price: '1080 UAH',
    old_price: '4880 UAH'
  },
  {
    img:'img/fore5.png',
    img_back:'img/back5.png',
    img_mf1:'img/mf51.png',
    img_mf2:'img/mf52.png',
    img_mf3:'img/mf53.png',
    title:'БОТИНКИ LEVI’S LEATHER JAX BOOTS BLACK',
    price: '1199 UAH',
    old_price: '4999 UAH'
  },
  {
    img:'img/fore6.png',
    img_back:'img/back6.png',
    img_mf1:'img/mf61.png',
    img_mf2:'img/mf62.png',
    img_mf3:'img/mf63.png',
    title:'МОКАСИНЫ LEVI’S ЧЕРНЫЕ',
    price: '1199 UAH',
    old_price: '4999 UAH'
  },
  {
    img:'img/fore7.png',
    img_back:'img/back7.png',
    img_mf1:'img/mf71.png',
    img_mf2:'img/mf72.png',
    img_mf3:'img/mf73.png',
    title:'МОКАСИНЫ LEVI’S СИНИЕ',
    price: '1080 UAH',
    old_price: '4880 UAH'
  },
  {
    img:'img/fore8.png',
    img_back:'img/back8.png',
     img_mf1:'img/mf81.png',
    img_mf2:'img/mf82.png',
    img_mf3:'img/mf83.png',
    title:'МОКАСИНЫ LEVI’S КОРИЧНЕВЫЕ',
    price: '1080 UAH',
    old_price: '4880 UAH'
  }
]
  var wrap = document.querySelector('.catalog_models');
  loaded();
  function loaded(){
      for(i = 0; i<product.length; i++){
         creatureItem();
      }
   };
   function creatureItem(){
      var acontainer = document.createElement('a');
      acontainer.setAttribute( "id", "catalog_models" );
      acontainer.setAttribute( "href", "#models_photo" );

        
         wrap.appendChild(acontainer);

      var container = document.createElement('div');
         container.className = 'catalog_item';
         acontainer.appendChild(container);

       var prod_item = document.createElement('div');
         prod_item.className = 'prod_item_img';
        
         container.appendChild(prod_item);   
      var image = document.createElement('img');
         image.className = 'product_itemimg';
         image.src = product[i].img;
         prod_item.appendChild(image);
         
      var itemTitle = document.createElement('div');
         itemTitle.className = 'item_title';
         itemTitle.innerHTML = product[i].title;
         container.appendChild(itemTitle);
             
      var itemPrice = document.createElement('div');
         itemPrice.className = 'item_price';
         itemPrice.innerHTML = product[i].price;
         container.appendChild(itemPrice); 
         
  }
$(".catalog_models").on("click","a","catalog_item", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
       
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
        // var target = $( event.delegateTarget );
              
        $(".catalog_item").css('border', '1px solid #FFF');
        
        $(this).find(".catalog_item").css('border', '1px solid #c41230');
         // $('.models_photo_img').src='img/back5.png';
     
    });


var elements = [product].slice.call(document.querySelectorAll('.catalog_item'));

// var product_itemimg = document.querySelectorAll('.product_itemimg');
// var catalog_item = document.querySelectorAll('.catalog_item');
// var catalog_models = document.querySelector('.catalog_models');


elements.forEach(function (element, i) {
   element.addEventListener('mouseover', function (event) {
      event.target.src = product[i].img_back;
            $(".models_photo_img").src = product[i].img;
   });
   element.addEventListener('mouseout', function (event) {
      event.target.src = product[i].img;
   });
   element.addEventListener('click', function (event) {

      $('.models_photo_img').attr('src', product[i].img_mf1);

      $('.models_preview_img').eq(0).attr('src', product[i].img_mf1);
      $('.models_preview_img').eq(1).attr('src', product[i].img_mf2);
      $('.models_preview_img').eq(2).attr('src', product[i].img_mf3);

      $('.models_prev').eq(0).css('border', '1px solid #c41230');
      $('.models_prev').eq(1).css('border', '1px solid #FFF');
      $('.models_prev').eq(2).css('border', '1px solid #FFF');

      $('.models_price').find('p').text(product[i].price);
      // $('.text_line').text(product[i].old_price);
      $('.models_foto_content').find('h2').text(product[i].title);
   });
   
});
$('.models_prev').on('click', function (event) {
   
      $('.models_photo_img').attr('src', event.target.src);
      $('.models_prev').css('border', '1px solid #FFF');
      $(this).css('border', '1px solid #c41230');
   });


