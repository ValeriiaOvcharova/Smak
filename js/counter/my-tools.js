function countup(className){
    var countBlockTop = $("."+className).offset().top;
    var windowHeight = window.innerHeight;
    var show = true;
                
    $(window).scroll( function (){
        if(show && (countBlockTop < $(window).scrollTop() + windowHeight)){ 
            show = false;
                    
            $('.'+className).spincrement({
                from: 1,
                duration: 8000,
                thousandSeparator: " ",
            });
        }
    })	
}
    $(function() {
    countup("count", $(".count").text());
    countup("count2", $(".count2").text());
    });
