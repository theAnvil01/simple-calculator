    function add(){
        const number1 = Number(document.getElementById("number1").value);
        const number2 = Number(document.getElementById("number2").value);

        const result = number1 + number2;
        document.getElementById("result").innerHTML = result;
    }

    function subtract(){
        const number1 = Number(document.getElementById("number1").value);
        const number2 = Number(document.getElementById("number2").value);

        const result = number1 + number2;
        document.getElementById("result").innerHTML = result;
    }

    function multiply(){
        const number1 = Number(document.getElementById("number1").value);
        const number2 = Number(document.getElementById("number2").value);

        const result = number1 * number2;
        document.getElementById("result").innerHTML = result;
    }

    function divide(){
        const number1 = Number(document.getElementById("number1").value);
        const number2 = Number(document.getElementById("number2").value);
        
        if (number2 == 0){
            alert("cannot divide by zero");
        }
        else{
            const result = number1 / number2;
            document.getElementById("result").innerHTML = result;
        }
    } 