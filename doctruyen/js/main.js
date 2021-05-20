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
    var divtxt = $('.text');
  
    $('.search-plus').click(function() {
    var curSize = divtxt.css('fontSize');
    var newSize = parseInt(curSize.replace("px", "")) + 1;
    $(divtxt).css("fontSize", newSize + "px");
    });
   
    $('.search-minus').click(function() {
    var curSize = divtxt.css('fontSize');
    var newSize = parseInt(curSize.replace("px", "")) - 1;
    $(divtxt).css("fontSize", newSize + "px");
    })
});

// $(document).ready(function () {
    
//     if()
//    $('.body-text').css('line-height', "40px");
// });