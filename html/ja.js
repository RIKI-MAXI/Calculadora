function suma1() {
    const b =document.querySelector('#b');
    const sb = document.querySelector('#f')
    b.onclick = (event) => {

        event.preventDefault();
        
        if (sb.selectedIndex=="1"){
            var numero1 = document.getElementById('numero1').value;
            var numero2 = document.getElementById('numero2').value;
            var suma = parseInt(numero1)+parseInt(numero2);
            document.getElementById('resultado').value = suma
            
        }
        if (sb.selectedIndex=="2"){
            var numero1 = document.getElementById('numero1').value;
            var numero2 = document.getElementById('numero2').value;
            var resta = parseInt(numero1)-parseInt(numero2);
            document.getElementById('resultado').value = resta

        }
        if (sb.selectedIndex=="3"){
            var numero1 = document.getElementById('numero1').value;
            var numero2 = document.getElementById('numero2').value;
            var multiplicacion = parseInt(numero1)*parseInt(numero2);
            document.getElementById('resultado').value = multiplicacion

        }
        if (sb.selectedIndex=="4"){
            var numero1 = document.getElementById('numero1').value;
            var numero2 = document.getElementById('numero2').value;
            var divicion = parseInt(numero1)/parseInt(numero2);
            document.getElementById('resultado').value = divicion

        }
        
    }
    
     
}