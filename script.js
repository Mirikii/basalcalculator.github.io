const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');


CALCULAR.addEventListener('click', () => {
    const DATO = document.getElementById('peso').valueAsNumber;
    //validamos que se cargue un dato:
    if (DATO > 0){
        ERROR.style.display = 'none'
        let flujo = calcFlujo(DATO);
        let mantenimiento = flujo*1.5;
        FLU.innerHTML = flujo + ' cc/hr';
        MAN.innerHTML = 'm+m/2 ' + mantenimiento + ' cc/hr';
        FLU.style.display = 'block';
        MAN.style.display = 'block';
    } else {
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
    }
})



function calcFlujo(peso){
    let resto = peso
    let flujo = 0
    if(peso>= 30){
      let e1 = ((resto*4)+7 ) / (resto +90)
      flujo = (e1*1500)
   
       }
      else if (resto > 20){
        let e1  = ((resto -20)*20)+ 1500
        flujo = (e1)
      }
        
        else if (resto <= 20 && resto > 10){
          let e1 =(((resto-10)*50)+1000)
          flujo = (e1)
        }
        
        else {
          let e1 =(resto*100)
          flujo = (e1)
          }
  
          return flujo
  }
  
    
