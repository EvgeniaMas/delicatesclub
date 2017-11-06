
   $(document).ready(function(){
         
        PopUpHide();
    });

    //Функция отображения PopUp
    function PopUpShow(){
        $("#popup1").show();
        $("#blindLayer").css("display","block");

    }
    //Функция скрытия PopUp1
    function PopUpHide(){
        $("#popup1").hide();
        $("#blindLayer").css("display","none");
    }

function PopUpTwoHide() {
    $('#popup2').hide();
    $("#blindLayer").css("display","none");
}



