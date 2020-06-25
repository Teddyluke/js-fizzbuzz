// Per l'esercizio di oggi, scrivi un programma che stampi i numeri da 1
// a 100.
// Per i multipli di 3 stampi “Fizz” al posto del numero.
// Per i multipli di 5 stampi "Buzz" al posto del numero.
// Per i numeri che sono sia multipli di 3 che di 5 stampi "FizzBuzz" al posto del numero.

//  creo arrey vuoto dove inserire tutti i valori
var numeri = [];
// creo un ciclo for che scorra fino a 100 inserendo i valori nell'arrey come definiti nell if
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

//  stampo nell html la lista degli elementi.
var listaNumeri = document.getElementById('listaNumeri');

for (var i = 0; i < numeri.length; i++) {
  listaNumeri.innerHTML += "<li>" + numeri[i] + "</li>";
}
