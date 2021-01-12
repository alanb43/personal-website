var executed = false;
function swap() {
    if (!executed) {
        var cart0 = document.getElementById("cart0");
            cart1 = document.getElementById("cart1");
        cart_0_src = cart0.src;
        cart_1_src = cart1.src;
        
        cart0.src = cart_1_src;
        cart1.src = cart_0_src;
        
        executed = true;
    }
}