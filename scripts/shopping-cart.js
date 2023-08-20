let productCount = 0;
document.getElementById('kid-one').addEventListener('click', function () {
    const productTitle = document.getElementById('k-title-one').innerText;

    // cart top
    productCount += 1;
    const p = document.createElement('p');
    p.innerText = productCount + '. ' + productTitle;
    const cardTop = document.getElementById('products');
    cardTop.appendChild(p);

    const totalPriceElement = document.getElementById('total-price');
    let totalPrice = calculateTotalPrice('k-price-one', 'total-price');
    totalPriceElement.innerText = totalPrice;
    if(totalPrice >= 200){
        document.getElementById('btn-apply-coupon').removeAttribute('disabled');
    }
})

// document.getElementById('btn-apply-coupon').addEventListener('click', function(){   
//     let productPriceText = document.getElementById('k-price-one').innerText;
//     let productPrice = parseFloat(productPriceText);

//     let totalPrice = calculateTotalPrice('k-price-one', 'total-price');
//     let discount = 0;
//     const couponCode = document.getElementById('coupon-code').value;
//     if(couponCode === 'SELL200'){
//         discount = (totalPrice - productPrice) * 0.2;
//     }
//     const discountElement = document.getElementById('discount');
//     discountElement.innerText = discount.toFixed(2);     
// })

document.getElementById('btn-apply-coupon').addEventListener('click', function(){
    handleDiscount('k-price-one', 'total-price', 'coupon-code', 'SELL200', 'discount');
})

function calculateTotalPrice(priceId, totalPriceId) {
    // total price
    let productPriceText = document.getElementById(priceId).innerText;
    let productPrice = parseFloat(productPriceText);

    let totalPriceElement = document.getElementById(totalPriceId).innerText;
    let previousTotalPrice = parseFloat(totalPriceElement);
    previousTotalPrice += productPrice;
    return previousTotalPrice ;
}

function handleDiscount(productPriceId, totalPriceId, couponCodeId, coupon, discountId){ 
        let productPriceText = document.getElementById(productPriceId).innerText;
        let productPrice = parseFloat(productPriceText);
    
        let totalPrice = calculateTotalPrice(productPriceId, totalPriceId);
        let discount = 0;
        const couponCode = document.getElementById(couponCodeId).value;
        if(couponCode === coupon){
            discount = (totalPrice - productPrice) * 0.2;
        }
        const discountElement = document.getElementById(discountId);
        discountElement.innerText = discount.toFixed(2); 
}
