function calculateTotal(cart) {
    console.log("Function calculateTotal called with cart:", cart); // Debug input

    let total = 0;
    cart.forEach(item => {
        console.log("Processing item:", item); // Debug each item
        total += item.price * item.quantity;
        console.log(`Updated total after ${item.name}:`, total); // Debug total after each item
    });

    console.log("Final calculated total:", total); // Debug final result
    return total;
}