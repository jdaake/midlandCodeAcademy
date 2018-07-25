$(function(){
    var currentNumber = null, 
        currentAction = null,
        screen = $("#screen");

    $('.number').on("click", function(){
           addToScreen($(this).attr("id"));
    });

    $('#clearAll').on('click', function(){
        clearValues();
        overwriteScreen('');
    });

    $('#clearEntry').on('click', function(){
        overwriteScreen('');
    });

    function overwriteScreen(val){
        screen.text(val);
    }

    function addToScreen(val){
        screen.text(screen.text() + val);
    }

    function clearValues(){
        currentAction = null;
        currentNumber = null;
    }

})