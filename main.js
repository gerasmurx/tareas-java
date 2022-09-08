function deteTrin(){
    let ladoA = Number(document.querySelector("#ladoA").value);
    let ladoB = Number(document.querySelector("#ladoB").value);
    let base = Number(document.querySelector("#base").value);

    if ((ladoA == ladoB) && (ladoA == base)){
        document.getElementById("resul").value = "Triangulo Equilatero";
    } else if (ladoA == ladoB){
        document.getElementById("resul").value = "Triangulo Isoseles";
    } else if (ladoA == base){
        document.getElementById("resul").value = "Triangulo Isoseles";
    } else if (ladoB == base){
        document.getElementById("resul").value = "Triangulo Isoseles"; 
    } else {
        document.getElementById("resul").value = "Triangulo Escaleno";
    }
    
}


// Cual es el tipo de triangulo?

/*Crea un programa que pregunte al usuario por las medidas de un triangulo. 

1. Imprime "triangulo Equilatero" si los 3 lados son iguales.
2. Imprime "triangulo isosceles" si dos de los lados son iguales.
3. Imprime "Triangulo escaleno" Si ninguno de los lados son iguales. 

Mejora tu programa tanto como el tiempo te lo permita.
Comparte un screenshot de tu programa funcionando por discord, no compartas tu codigo, solo los prints de tu resultado*/
