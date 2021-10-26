$(function(){
    //페이지 로드 중 로딩화면 띄우기
  $(window).on('load',function(){
    $('.loading').delay(5000).fadeOut();
   });
    
    $(window).on('scroll',function(){
        //header 메뉴 scroll시 발생 이벤트
        $('.target').each(function() {
          if($(window).scrollTop() >= $(this).offset().top) {
              var id = $(this).attr('id');
              $('#mainNav a').removeClass('active');
              $('#mainNav a[href="#'+ id +'"]').addClass('active');
          }
      });
      // skill section 애니메이션 
      $('.per-box').each(function(){
        $(this).find('.per').animate({
            width:$(this).attr('data-width')
        },2000);
    });
    });

    
      // typing text 이벤트
      var typingBool = false;
      var typingIdx = 0;
      var liIndex = 0;
      var liLength = $('.main-heading>ul>li').length;
      var del = -1;
      var repeat = null;
      var tyInt = null; 
    
    var typingText = $('.main-heading>ul>li').eq(liIndex).text();
    typingText=typingText.split("");

    if(typingBool==false){
        typingBool=true;
        tyInt = setInterval(typing,200); 
    }
    function typing(){
        if(typingIdx<typingText.length){
            $('.typing').append(typingText[typingIdx]);
            typingIdx++;
            if(typingIdx==typingText.length){
                clearInterval(tyInt);
                setTimeout(function(){
                    tyInt = setInterval(typing,200);
                },1000);
            }
        }else{
            if(-typingText.length-1 < del){
                $('.typing').html(typingText.slice(0,del))
                del--;
            }else{
                if(liIndex >= liLength-1){
                    liIndex=0;
                }else{
                    liIndex++;
                }
                typingIdx=0;
                del =-1;
                typingText = $('.main-heading>ul>li').eq(liIndex).text();
                clearInterval(tyInt);
                setTimeout(function(){
                    tyInt = setInterval(typing,200);
                },1000);
            }
        }
    }
    });
   
   
      
 


  