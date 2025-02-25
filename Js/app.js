// ciclo per scrivere i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {

    
    if ((i % 3 == 0) && (i % 5 == 0)) { // controllo inizialmente se il numero è multiplo di 3 o 5
        console.log ('FizzBuzz');
    } else if (i % 3 == 0 ) { // controllo se il numero è multiplo di 3
        console.log ('Fizz');
    } else if (i % 5 == 0 ) { // controllo se il numero è multiplo di 5
        console.log ('Buzz');
    } else { // se non è multiplo di 5 o 3, stampo il numero
        console.log (i);
    }
}