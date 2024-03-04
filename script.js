// OTTENERE LA SOMMA DEL CARRELLO MENO LO SCONTO

// inserire il costo del pane
const costOfBread = prompt('Costo del pane');
// converto il testo in numero
const costOfBreadAsNumber = parseInt(costOfBread);


// inserire il costo del latte
const costOfMilk = prompt('Costo del latte');
// converto il testo in numero
const costOfMilkAsNumber = parseInt(costOfMilk);


// inserire il costo della farina
const costOfFlour = prompt('Costo della farina');
// converto il testo in numero
const costOfFlourAsNumber = parseInt(costOfFlour);


// sommare il carrello
let cartSum = costOfBread + costOfMilk + costOfFlour;
document.getElementById('cart').innerHTML = `Il tuo carrello è ${costOfBreadAsNumber + costOfMilkAsNumber + costOfFlourAsNumber}`;
console.log(cartSum);


// aggiungere lo scondo di 2€
const discount = 2;


// stampare il risultato
const eCom = costOfBreadAsNumber + costOfMilkAsNumber + costOfFlourAsNumber - discount;
document.getElementById('result').innerHTML = `Il tuo saldo finale è ${eCom}`;
console.log(eCom);