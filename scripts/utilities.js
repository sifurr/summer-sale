// function calculateDiscount(productPriceId, totalPriceId, couponCodeId, coupon){ 
//     let productPriceText = document.getElementById(productPriceId).innerText;
//     let productPrice = parseFloat(productPriceText);

//     let totalPrice = calculateTotalPrice(productPriceId, totalPriceId);
//     let discount = 0;
//     const couponCode = document.getElementById(couponCodeId).value;
//     if(couponCode === coupon){
//         discount = (totalPrice - productPrice) * 0.2;
//     }
//     return discount;
// }


function calculateDiscount(couponCodeId, coupon){     
    let totalPriceElement = document.getElementById('total-price').innerText;
    let totalPrice = parseFloat(totalPriceElement);
    let discount = 0;
    const couponCode = document.getElementById(couponCodeId).value;
    if(couponCode === coupon){
        discount = totalPrice * 0.2;
    }
    return discount;
}


function setDiscount(discountId, discount){    
    document.getElementById(discountId).innerText = discount.toFixed(2); 
}

function calculateTotalPrice(priceId, totalPriceId) {
    let productPriceText = document.getElementById(priceId).innerText;
    let productPrice = parseFloat(productPriceText);

    let totalPriceElement = document.getElementById(totalPriceId).innerText;
    let previousTotalPrice = parseFloat(totalPriceElement);
    previousTotalPrice += productPrice;
    return previousTotalPrice;
}

function setGrandTotal(totalPriceId, discountId, grandTotalId) {        
    let totalPriceElement = document.getElementById(totalPriceId).innerText; 
    let totalPriceAmount = parseFloat(totalPriceElement);

    let discountElement = document.getElementById(discountId).innerText;
    let discountAmount = parseFloat(discountElement);

    let grandTotal = totalPriceAmount - discountAmount;
    document.getElementById(grandTotalId).innerText = grandTotal;
}
