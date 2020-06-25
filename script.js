// Per l'esercizio di oggi, scrivi un programma che stampi i numeri da 1
// a 100.
// Per i multipli di 3 stampi “Fizz” al posto del numero.
// Per i multipli di 5 stampi "Buzz" al posto del numero.
// Per i numeri che sono sia multipli di 3 che di 5 stampi "FizzBuzz" al posto del numero.

var numeri = [];

for (var i = 1; i < 101; i++) {
  if ((i % 3 == 0) && (i % 5 == 0)) {
    numeri.push("FizzBuzz")
  } else if ((i % 5 == 0))  {
    numeri.push("Buzz")
  } else if ((i % 3 == 0))  {
    numeri.push("Fizz")
  } else {
    numeri.push(i)
  }

}

console.log(numeri)
