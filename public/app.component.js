"use strict";

const cartItems = {
    templateUrl: 
    `
`,
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