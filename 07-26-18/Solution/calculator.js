$(function(){
    var currentNumber = null,
        currentAction = null,
        canOverwrite = false,
        screen = $("#screen");

    $('.number').on("click", function(){
      if(canOverwrite){
         canOverwrite = false;
         overwriteScreen($(this).attr("id"));
      }
      else{
           addToScreen($(this).attr("id"));
      }
    });

    $('#clearAll').on('click', function(){
        clearValues();
        overwriteScreen('');
    });

    $('#clearEntry').on('click', function(){
        overwriteScreen('');
    });


    $('.action').on('click', function(){
        if(currentAction == null){
          currentNumber = getScreenValue();
        }
        else if(!canOverwrite){
          calculate();
        }
        currentAction = $(this).attr("id");
        canOverwrite = true;
    });
    $('#backspace').on('click', function(){
      var currScreenVal = screen.text()
      screen.text(currScreenVal.slice(0, -1));
    })

    $('#decimal').on('click', function(){
      if(canOverwrite){
        overwriteScreen('.');
        canOverwrite = false;
      }
      else if(!screen.text().includes('.')){
        addToScreen('.')
      }
    })

    $('#plusMinus').on('click', function(){
        screen.text(getScreenValue() * -1);
    })
    function getScreenValue(){
      if(screen.text().length <= 0 || screen.text() == '.'){
        return 0;
      }
      return parseFloat(screen.text());
    }

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

    function calculate(){
      var actions = {
        "add": add,
        "subtract": subtract,
        "multiply": multiply,
        "divide": divide,
        "equals": equals
      }
      currentNumber = actions[currentAction]()
      overwriteScreen(currentNumber);
    }
    function equals(){
      return getScreenValue();
    }
    function add(){
      return currentNumber + getScreenValue();
    }
    function subtract(){
      return currentNumber - getScreenValue();
    }
    function divide(){
      return currentNumber / getScreenValue();
    }
    function multiply(){
      return currentNumber * getScreenValue();
    }


})
