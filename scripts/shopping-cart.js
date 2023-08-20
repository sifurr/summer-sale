let productCount = 0;
document.getElementById('kid-one').addEventListener('click', function(){
    const productTitle = document.getElementById('k-title-one').innerText;

    // cart top
    productCount += 1;
    const p = document.createElement('p');
    p.innerText = productCount + '. ' + productTitle;
    const cardTop = document.getElementById('products');
    cardTop.appendChild(p);

    // total price
    const productPriceText = document.getElementById('k-price-one').innerText;
    const productPrice = parseFloat(productPriceText);

    const totalPriceElement = document.getElementById('total-price');
    const totalPriceText = totalPriceElement.innerText;
    const previousTotalPrice = parseFloat(totalPriceText);
    let totalPrice =  (previousTotalPrice + productPrice);

    totalPriceElement.innerText = totalPrice;
})
