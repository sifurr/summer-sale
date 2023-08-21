let productCount = 0;

// kitchenware one
document.getElementById('kid-one').addEventListener('click', function () {
    const productTitle = document.getElementById('k-title-one').innerText;

    productCount += 1;
    const p = document.createElement('p');
    p.innerText = productCount + '. ' + productTitle;
    const cardTop = document.getElementById('products');
    cardTop.appendChild(p);

    const totalPriceElement = document.getElementById('total-price');
    let totalPrice = calculateTotalPrice('k-price-one', 'total-price');
    totalPriceElement.innerText = totalPrice;

    if (totalPrice >= 200) {
        document.getElementById('btn-apply-coupon').removeAttribute('disabled');
    }

    if (totalPrice > 0) {
        document.getElementById('btn-purchase').removeAttribute('disabled');
    }
    setGrandTotal('total-price', 'discount', 'grand-total');
})

// kitchenware two
document.getElementById('kid-two').addEventListener('click', function () {
    const productTitle = document.getElementById('k-title-two').innerText;

    productCount += 1;
    const p = document.createElement('p');
    p.innerText = productCount + '. ' + productTitle;
    const cardTop = document.getElementById('products');
    cardTop.appendChild(p);

    const totalPriceElement = document.getElementById('total-price');
    let totalPrice = calculateTotalPrice('k-price-two', 'total-price');
    totalPriceElement.innerText = totalPrice;

    if (totalPrice >= 200) {
        document.getElementById('btn-apply-coupon').removeAttribute('disabled');
    }

    if (totalPrice > 0) {
        document.getElementById('btn-purchase').removeAttribute('disabled');
    }
    setGrandTotal('total-price', 'discount', 'grand-total');
})

// kitchenware three
document.getElementById('kid-three').addEventListener('click', function () {
    const productTitle = document.getElementById('k-title-three').innerText;

    productCount += 1;
    const p = document.createElement('p');
    p.innerText = productCount + '. ' + productTitle;
    const cardTop = document.getElementById('products');
    cardTop.appendChild(p);

    const totalPriceElement = document.getElementById('total-price');
    let totalPrice = calculateTotalPrice('k-price-three', 'total-price');
    totalPriceElement.innerText = totalPrice;

    if (totalPrice >= 200) {
        document.getElementById('btn-apply-coupon').removeAttribute('disabled');
    }

    if (totalPrice > 0) {
        document.getElementById('btn-purchase').removeAttribute('disabled');
    }
    setGrandTotal('total-price', 'discount', 'grand-total');
})

// Sportswear one
document.getElementById('sid-one').addEventListener('click', function () {
    const productTitle = document.getElementById('s-title-one').innerText;

    productCount += 1;
    const p = document.createElement('p');
    p.innerText = productCount + '. ' + productTitle;
    const cardTop = document.getElementById('products');
    cardTop.appendChild(p);

    const totalPriceElement = document.getElementById('total-price');
    let totalPrice = calculateTotalPrice('s-price-one', 'total-price');
    totalPriceElement.innerText = totalPrice;

    if (totalPrice >= 200) {
        document.getElementById('btn-apply-coupon').removeAttribute('disabled');
    }

    if (totalPrice > 0) {
        document.getElementById('btn-purchase').removeAttribute('disabled');
    }
    setGrandTotal('total-price', 'discount', 'grand-total');
})

// Sportswear two
document.getElementById('sid-two').addEventListener('click', function () {
    const productTitle = document.getElementById('s-title-two').innerText;

    productCount += 1;
    const p = document.createElement('p');
    p.innerText = productCount + '. ' + productTitle;
    const cardTop = document.getElementById('products');
    cardTop.appendChild(p);

    const totalPriceElement = document.getElementById('total-price');
    let totalPrice = calculateTotalPrice('s-price-two', 'total-price');
    totalPriceElement.innerText = totalPrice;

    if (totalPrice >= 200) {
        document.getElementById('btn-apply-coupon').removeAttribute('disabled');
    }

    if (totalPrice > 0) {
        document.getElementById('btn-purchase').removeAttribute('disabled');
    }
    setGrandTotal('total-price', 'discount', 'grand-total');
})

// Sportswear three
document.getElementById('sid-three').addEventListener('click', function () {
    const productTitle = document.getElementById('s-title-three').innerText;

    productCount += 1;
    const p = document.createElement('p');
    p.innerText = productCount + '. ' + productTitle;
    const cardTop = document.getElementById('products');
    cardTop.appendChild(p);

    const totalPriceElement = document.getElementById('total-price');
    let totalPrice = calculateTotalPrice('s-price-three', 'total-price');
    totalPriceElement.innerText = totalPrice;

    if (totalPrice >= 200) {
        document.getElementById('btn-apply-coupon').removeAttribute('disabled');
    }

    if (totalPrice > 0) {
        document.getElementById('btn-purchase').removeAttribute('disabled');
    }
    setGrandTotal('total-price', 'discount', 'grand-total');
})

document.getElementById('btn-apply-coupon').addEventListener('click', function (){
    let totalDiscount = calculateDiscount('coupon-code', 'SELL200');
    setDiscount('discount', totalDiscount);
    setGrandTotal('total-price', 'discount', 'grand-total');
})


document.getElementById('congratulate').addEventListener('click', function () {
    window.location.href = "http://127.0.0.1:5500/index.html";
})

document.getElementById('use-promo').addEventListener('click', function(){
    document.getElementById('coupon-code').value = 'SELL200';
})


