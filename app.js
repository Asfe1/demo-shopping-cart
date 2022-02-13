function productNumber(product, value, price) {
    let productInput = document.getElementById(product + '-number');
    //caseInput.value++ //short cut
    const productprice = document.getElementById(product + '-Price');
    if (value == true) {
        productInput.value = parseInt(productInput.value) + 1;
        //caseprice.innerText = parseInt(caseprice.innerText) + 59;
    }
    else {
        if (productInput.value > 0) {
            productInput.value = parseInt(productInput.value) - 1;
        }
    }

    productprice.innerText = productInput.value * price;
    calculateTotal();
}
// function calculateTotal() {
//     const phoneNumber = document.getElementById('phone-number');
//     const caseNumber = document.getElementById('case-number');

//     document.getElementById('subtotal').innerText = parseInt(phoneNumber.value) * 1219 + parseInt(caseNumber.value) * 59;
// }
function getIputValue(product) {
    return parseInt(document.getElementById(product + '-number').value);
}
function calculateTotal() {
    const subtotal = getIputValue('phone') * 1219 + getIputValue('case') * 59;
    document.getElementById('subtotal').innerText = subtotal;

    document.getElementById('tax').innerText = subtotal / 10;

    document.getElementById('grandtotal').innerText = subtotal + subtotal / 10;

}


document.getElementById('case-plus').addEventListener('click', function () {
    productNumber('case', true, 59);

})
document.getElementById('case-minus').addEventListener('click', function () {
    productNumber('case', false, 59);


})


//for phone

document.getElementById('phonePlus').addEventListener('click', function () {
    productNumber('phone', true, 1219);

})
document.getElementById('phoneMinus').addEventListener('click', function () {
    productNumber('phone', false, 1219);


})

