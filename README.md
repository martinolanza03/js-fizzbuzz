# FizzBuzz

### Esercizio 

Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per?
Abbiamo visto qualcosa di particolare che possiamo usare?

---

### Soluzione

- Inizio con il ciclo for, non serve inizializzare nessuna variabile
    - Le codizioni del ciclo for faccio in modo che vengano scritti i 100 numeri for (let i = 1; i <= 100; i++)
        - All'interno del for mettiamo un if dove inizialmente controlla se il numero è multiplo sia per 3 che per 5 utilizziamo il modulo e se il risultato è uguale a 0 if ((i % 3 == 0) && (i % 5 == 0))
            - Stampo "FizzBuzz"
        - Se non è così controlliamo se è solo multiplo di 3 con else if (i % 3 == 0)
            - Stampo "Fizz"
        - Se non è così controlliamo anche se è solo multiplo di 5 con else if (i % 5 == 0)
            - Stampo "Buzz"
        - Se non è nulla di tutto ciò
            - Stampo il numero