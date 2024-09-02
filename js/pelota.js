
posicion=0;
        vueltas=0;
        
        window.onload=function(){
            intervalo=setInterval(mover,5);
            }
        function mover(){
            bolita.style.left=posicion+"px";
            posicion++;
            if (posicion==innerWidth-300){
                clearInterval(intervalo)
                otroIntervalo=setInterval(mover2,5)
            }
        } 
        
        function mover2(){
            bolita.style.left=posicion+"px";
            posicion--;
            if (posicion==0){
                vueltas++;
                num.innerHTML=vueltas;
                clearInterval(otroIntervalo)
            if (vueltas<3)intervalo=setInterval(mover,5)
            }    
        }  

        function reiniciar() {
            if (vueltas==3) {
                intervalo=setInterval(mover,5);
            vueltas=0;
            
            //Actualizar el contador de vueltas en la pantalla
            num.innerHTML=vueltas;
            
        }
        else{
            advertencia.innerHTML="Se esta moviendo"
        }
    }