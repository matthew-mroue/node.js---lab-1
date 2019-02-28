"use strict";

const cartItems = {
    templateUrl: "app.component.html",
    controller: ["CartService", function(CartService) {
        const vm = this;

        CartService.getAllItems().then(response => {
            vm.shoppingcart = response.data;
        })
        vm.addItem = function(item) {
            CartService.addItem(item).then(response => {
                vm.shoppingcart = response.data
            })
        }
        vm.addQty = function(item) {
            item.quantity++;
            CartService.addQty(item).then(response => {
                vm.shoppingcart = response.data
            })
        }
        vm.subQty = function(item) {
            item.quantity--;
            CartService.subQty(item).then(response => {
                vm.shoppingcart = response.data
            })
        }
        vm.removeItem = function(item) {
        CartService.removeItem(item).then(response => {
            vm.shoppingcart = response.data
            })
        }
    }]
}
angular
.module("App")
.component("cartItems", cartItems);