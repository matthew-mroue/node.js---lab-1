"use strict";

const cartItems = {
    templateUrl: "app.component.html",
    controller: ["CartService", function(CartService) {
        const vm = this;

        CartService.getAllItems().then(response => {
            vm.cartList = response.data
        })
    }]
}
angular
.module("App")
.component("cartItems", cartItems);