var buttons = document.querySelectorAll('#calculator span');
var operators = ['+', '-', 'x', '/','^'];
var decimalAdded = false;
var exp = false;
var Memory = 0;



for(var i = 0; i < buttons.length; i++) {
	buttons[i].onclick = function(e) {
		var input = document.querySelector('.screen');
		var inputVal = input.innerHTML;
		var btnVal = this.innerHTML;
        
		if(btnVal == 'C') {
			input.innerHTML = '';
			decimalAdded = false;
		}
        
        else if(btnVal == '^'){
            Memory = parseFloat(inputVal);
            input.innerHTML = '';
             exp = true;
            decimalAdded = false;

        }
        
		else if(btnVal == '=') {
			var equation = inputVal;
			var lastChar = equation[equation.length - 1];
            			
			equation = equation.replace(/x/g, '*');
			
			if(operators.indexOf(lastChar) > -1 || lastChar == '.')
				equation = equation.replace(/.$/, '');
			
			if(equation)
				input.innerHTML = eval(equation);
            
            if(exp == true){   
                var second = parseFloat(equation); 
                var power = Math.pow(Memory,second);
                input.innerHTML = eval(power);
                Memory = '';
                exp = false;
        }
            
			decimalAdded = false;
		}
        

		// indexOf works only in IE9+
		else if(operators.indexOf(btnVal) > -1) {
            
			var lastChar = inputVal[inputVal.length - 1];
			
			if(inputVal != '' && operators.indexOf(lastChar) == -1) 
				input.innerHTML += btnVal;
			
			else if(inputVal == '' && btnVal == '-') 
				input.innerHTML += btnVal;
			
			if(operators.indexOf(lastChar) > -1 && inputVal.length > 1) {

				input.innerHTML = inputVal.replace(/.$/, btnVal);
			}
			
			decimalAdded =false;
		}
		
		else if(btnVal == '.') {
			if(!decimalAdded) {
				input.innerHTML += btnVal;
				decimalAdded = true;
			}
		}
		
		else {
			input.innerHTML += btnVal;
		}

		e.preventDefault();
	} 
}
