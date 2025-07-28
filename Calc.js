/*This is a code for a calculator project*/
function appendToDisplay(value){ /*for the numbers*/ 
    const display = document.getElementById('display');
    display.value = (display.value === '0' ) ? value : display.value + value;
    updateResult(display.value);
}

function clearDisplay () { /*for the clear button "C"*/ 
    display.value = '0' /*THAT is because display = document.getElementById('display') as seen in line 3*/
    document.getElementById('display').setAttribute('data-result','')
}

function calculateResult (){ /*for the equal to sign "="*/ 
    const display = document.getElementById('display');
    try{
        const result = eval(display.value);
        display.setAttribute('data-result',result);
        display.value = result;
    } catch (e){
        display.setAttribute('data-result','Error');
        display.value = 'Error';
    }
}
function updateResult (){
    const display = document.getElementById('display')
    try{
        if (value){
            const result = eval(value);
            display.value = result;
        }
    } catch(e) {
        display.value = value;
    }
}