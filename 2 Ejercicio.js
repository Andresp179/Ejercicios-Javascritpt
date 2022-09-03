function miFuncion(nom, ced, tel, email) {
    let i;
    var esp = ' ';
    let cont = 0;
    var Fl = false;
    numDigits = 0;

    

    for (i = 0; i <= nom.length; i++) {
        if (nom[i] = esp) {
            cont++;
        }
        if (cont > 0) {
            Fl = true;
        } else {
            Fl = false;
        }
    }

    if (ced < 1000000000) {
        console.log("La cedula debe contener mas digitos");
    }
    while (tel > 0) 
    { integers = (integers - integers % 10) / 10; numDigits++; }
    if(numDigits<10 || numDigits>10){
        console.log("El numero de telefono debe tener 10 digitos");
    }
    



}