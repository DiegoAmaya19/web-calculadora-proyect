//Obteniendo referencias de los botones atravez de DOM

const boton_1 = document.querySelector(".b1");
const boton_2 = document.querySelector(".b2");
const boton_3 = document.querySelector(".b3");
const boton_4 = document.querySelector(".b4");
const boton_5 = document.querySelector(".b5");
const boton_6 = document.querySelector(".b6");
const boton_7 = document.querySelector(".b7");
const boton_8 = document.querySelector(".b8");
const boton_9 = document.querySelector(".b9");
const boton_0 = document.querySelector(".b0");

const boton_borrar = document.querySelector(".b-borrar");

const boton_dividir = document.querySelector(".b-dividir");

const boton_multiplicar = document.querySelector(".b-multiplicar");

const boton_sumar = document.querySelector(".b-suma");

const boton_restar = document.querySelector(".b-restar");

const boton_igual = document.querySelector(".b-igual");

const pantalla = document.getElementById("pantalla");

const pantalla2 = document.getElementById("pantalla2");

let num1 = 0, num2 = 0, resultado = 0, simbolo = undefined;

boton_1.addEventListener("click",()=>{
  pantalla.value += 1;
});

boton_2.addEventListener("click",()=>{
  pantalla.value += 2;
});

boton_3.addEventListener("click",()=>{
  pantalla.value += 3;
});

boton_4.addEventListener("click",()=>{
  pantalla.value += 4;
});

boton_5.addEventListener("click",()=>{
  pantalla.value += 5;
});

boton_6.addEventListener("click",()=>{
  pantalla.value += 6;
});

boton_7.addEventListener("click",()=>{
  pantalla.value += 7;
});

boton_8.addEventListener("click",()=>{
  pantalla.value += 8;
});

boton_9.addEventListener("click",()=>{
  pantalla.value += 9;
});

boton_0.addEventListener("click",()=>{
  pantalla.value += 0;
});

boton_borrar.addEventListener("dblclick",()=>{
  pantalla.value = "";
  resultado = 0;
  num2 = 0;
});

boton_borrar.addEventListener("click",()=>{

  let valor = pantalla.value;
  let nuevoValor;

  if(valor.length>0){
    nuevoValor = valor.slice(0,-1);
    resultado = parseInt(nuevoValor);
    if(valor.length === 1){
      resultado = 0;
      num2 = 0;
    }
  }

  pantalla.value = nuevoValor;
});

boton_dividir.addEventListener("click",()=>{
  if(pantalla.value){
    num1 = parseInt(pantalla.value);
    pantalla.value = "";
    simbolo = '/';
    pantalla2.value = simbolo;
  }
});

boton_multiplicar.addEventListener("click",()=>{
  if(pantalla.value){
    num1 = parseInt(pantalla.value);
    pantalla.value = "";
    simbolo = 'X';
    pantalla2.value = simbolo;
  }
  
});

boton_sumar.addEventListener("click",()=>{
  if(pantalla.value){
    num1 = parseInt(pantalla.value);
    pantalla.value = "";
    simbolo = '+';
    pantalla2.value = simbolo;
  }
  
});

boton_restar.addEventListener("click",()=>{
  if(pantalla.value){
    num1 = parseInt(pantalla.value);
    pantalla.value = "";
    simbolo = '-';
    pantalla2.value = simbolo;
  }
  
});

boton_igual.addEventListener("click",()=>{
  if(pantalla.value){
    pantalla2.value = '=';
    
    if(num1 === 0){

      if(simbolo === "/") resultado = funDividir(resultado,num2);
      
      else if(simbolo === "X") resultado = funMultiplicar(resultado,num2);
      
      else if(simbolo === "+") resultado = funSumar(resultado,num2);

      else if(simbolo === "-") resultado = funRestar(resultado,num2);

      pantalla.value = resultado; 

    }else if(num1){

        num2 = parseInt(pantalla.value);

        if(simbolo === "/") resultado = funDividir(num1,num2);
      
        else if(simbolo === "X") resultado = funMultiplicar(num1,num2);
      
        else if(simbolo === "+") resultado = funSumar(num1,num2);

        else if(simbolo === "-") resultado = funRestar(num1,num2);

        num1 = 0;

        pantalla.value = resultado; 
    }

  }

});

let funDividir = (n1,n2)=>{

  if(resultado===0){
     return n1/n2;
  }else{
    return resultado/2;
  }

};

let funMultiplicar = (n1=0,n2=0)=>{

  if(!resultado){
      return n1*n2;
 }else{
   return resultado*n2;
 }

};

let funRestar = (n1=0,n2=0)=>{

  if(!resultado){
    return (n1-n2);
}else{
 return resultado-n2;
}

};

let funSumar = (n1=0,n2=0)=>{

  if(!resultado){
    return n1+n2;
}else{
 return resultado+n2;
}

};