function applyDiscount(price, discountPercentage = 10) {
    const discountAmount = (price * discountPercentage) / 100;
    return price - discountAmount;
}
console.log(applyDiscount(100)); 
