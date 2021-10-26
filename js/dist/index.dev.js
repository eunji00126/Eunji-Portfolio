"use strict";

$(document).ready(function () {
  //header 메뉴 scroll시 발생 이벤트
  $(window).on('scroll', function () {
    if ($(window).scrollTop()) {
      $('.header').addClass('active');
    } else {
      $('.header').removeClass('active');
    }
  }); // typing text 이벤트

  var typingBool = false;
  var typingIdx = 0;
  var liIndex = 0;
  var liLength = $('.main-heading>ul>li').length;
  var del = -1;
  var repeat = null;
  var tyInt = null; // 타이핑 될 텍스트 가져오기

  var typingText = $('.main-heading>ul>li').eq(liIndex).text();
  typingText = typingText.split(""); //한 글자씩 자른다.

  if (typingBool == false) {
    //만약 타이핑이 진행되지 않았다면
    typingBool = true;
    tyInt = setInterval(typing, 200); //첫번째 반복동작
  }

  function typing() {
    if (typingIdx < typingText.length) {
      //타이핑 될 텍스트 길이만큼 반복
      $('.typing').append(typingText[typingIdx]); //한글자씩 이어준다.

      typingIdx++;

      if (typingIdx == typingText.length) {
        //첫번째 단어가 써지면 1분쉰다.
        clearInterval(tyInt);
        setTimeout(function () {
          tyInt = setInterval(typing, 200);
        }, 1000);
      }
    } else {
      //한 문장이 끝나면
      if (-typingText.length - 1 < del) {
        //한 글자씩 지운다.
        $('.typing').html(typingText.slice(0, del));
        del--;
      } else {
        if (liIndex >= liLength - 1) {
          liIndex = 0;
        } else {
          liIndex++;
        } //변수 초기화


        typingIdx = 0;
        del = -1;
        typingText = $('.main-heading>ul>li').eq(liIndex).text(); //1분후 다음문장 타이핑

        clearInterval(tyInt);
        setTimeout(function () {
          tyInt = setInterval(typing, 200);
        }, 1000);
      }
    }
  } //portfolio page click 이벤트


  $('.portfolio-box').click(function () {
    $(this).prev().slideToggle();
    $('.portfolio-box').not(this).prev().slideUp();
    return false;
  });
  $('.portfolio-box').eq(0).trigger('click');
});