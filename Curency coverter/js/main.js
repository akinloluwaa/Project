const insertedDollar = document.getElementById('myInputDollar');
insertedDollar.addEventListener('input', function(event) {
    let convertedDollar = event.target.value;
    let dollarValue = document.getElementById('dollarId')
    dollarValue.innerHTML = convertedDollar * 1
    let nairaValue = document.getElementById('nairaId')
    nairaValue.innerHTML = convertedDollar * 388
    let poundsValue = document.getElementById('poundsId')
    poundsValue.innerHTML = convertedDollar / 1.26

});
const insertedNaira = document.getElementById('myInputNaira');
insertedNaira.addEventListener('input', function(event) {
    let convertedNaira = event.target.value;
    let dollarValue = document.getElementById('dollarId')
    dollarValue.innerHTML = convertedNaira / 388
    let nairaValue = document.getElementById('nairaId')
    nairaValue.innerHTML = convertedNaira * 1
    let poundsValue = document.getElementById('poundsId')
    poundsValue.innerHTML = convertedNaira / 489.35

})
const insertedPounds = document.getElementById('myInputPounds');
insertedPounds.addEventListener('input', function(event) {
    let convertedPounds = event.target.value;
    let dollarValue = document.getElementById('dollarId')
    dollarValue.innerHTML = convertedPounds * 1.26
    let nairaValue = document.getElementById('nairaId')
    nairaValue.innerHTML = convertedPounds * 489.35
    let poundsValue = document.getElementById('poundsId')
    poundsValue.innerHTML = convertedPounds * 1

})