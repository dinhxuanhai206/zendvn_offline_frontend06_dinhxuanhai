$(document).ready(function(){
    $('.btn-blue').click(function () {
        $('.body-text').css("background", "blue");
        
    })
})
$(document).ready(function(){
    $('.btn-white').click(function () {
        $('.body-text').css("background", "white");
    })
})
$(document).ready(function(){
    $('.btn-green').click(function () {
        $('.body-text').css("background", "green");
    })
})
$(document).ready(function(){
    $('.btn-gold').click(function () {
        $('.body-text').css("background", "gold");
    })
})
$(document).ready(function(){
    $('.btn-red').click(function () {
        $('.body-text').css("background", "red");
    })
})

$(document).ready(function() {
    let divtxt = $('.text');
  
    $('.search-plus').click(function() {
    let curSize = divtxt.css('fontSize');
    let newSize = parseInt(curSize.replace("px", "")) + 1;
    $(divtxt).css("fontSize", newSize + "px");
    });
   
    $('.search-minus').click(function() {
    let curSize = divtxt.css('fontSize');
    let newSize = parseInt(curSize.replace("px", "")) - 1;
    $(divtxt).css("fontSize", newSize + "px");
    })
});

$(document).ready(function () {
    $('#input').change( function() {
        $(this).find(":selected").each(function () {
                if($(this).val() == '0'){ 
                    $('.body-text').css('line-height', "20px");   
           
                }
                if($(this).val() == '1'){ 
                    $('.body-text').css('line-height', "15px");    
                }
                if($(this).val() == '2'){ 
                    $('.body-text').css('line-height', "30px"); 
                    $('.text').css('font-size', "16px");   
                }
         });
      });    
});
$(document).ready(function () {
    $('#input1').change( function() {
        $(this).find(":selected").each(function () {
                if($(this).val() == '0'){ 
                    $('.body-text').css('text-align', "center");       
                }
                if($(this).val() == '1'){ 
                    $('.body-text').css('text-align', "right");    
                }
                if($(this).val() == '2'){ 
                    $('.body-text').css('text-align', "left");   
                }
         });
      });    
});
var text = $('.body-text').text();

// set the item in localStorage
localStorage.setItem('body-text', text);

// alert the value to check if we got it
   (localStorage.getItem('body-text'));

