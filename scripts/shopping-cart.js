let productCount = 0;
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
    if(totalPrice >= 200){
        document.getElementById('btn-apply-coupon').removeAttribute('disabled');
    }
})


document.getElementById('btn-apply-coupon').addEventListener('click', function(){
    let totalDiscount = calculateDiscount('k-price-one', 'total-price', 'coupon-code', 'SELL200');
    showDiscount('discount', totalDiscount);
    setGrandTotal('total-price', 'discount', 'grand-total');
})



function calculateDiscount(productPriceId, totalPriceId, couponCodeId, coupon){ 
    let productPriceText = document.getElementById(productPriceId).innerText;
    let productPrice = parseFloat(productPriceText);

    let totalPrice = calculateTotalPrice(productPriceId, totalPriceId);
    let discount = 0;
    const couponCode = document.getElementById(couponCodeId).value;
    if(couponCode === coupon){
        discount = (totalPrice - productPrice) * 0.2;
    }
    return discount;
}

function showDiscount(discountId, discount){    
    document.getElementById(discountId).innerText = discount.toFixed(2); 
}

function calculateTotalPrice(priceId, totalPriceId) {
    let productPriceText = document.getElementById(priceId).innerText;
    let productPrice = parseFloat(productPriceText);

    let totalPriceElement = document.getElementById(totalPriceId).innerText;
    let previousTotalPrice = parseFloat(totalPriceElement);
    previousTotalPrice += productPrice;
    return previousTotalPrice ;
}

function setGrandTotal(totalPriceId, discountId, grandTotalId) {        
    let totalPriceElement = document.getElementById(totalPriceId).innerText; 
    let totalPriceAmount = parseFloat(totalPriceElement);

    let discountElement = document.getElementById(discountId).innerText;
    let discountAmount = parseFloat(discountElement);

    let grandTotal = totalPriceAmount - discountAmount;
    document.getElementById(grandTotalId).innerText = grandTotal;
}

