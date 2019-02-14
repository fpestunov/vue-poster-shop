new Vue({
  el: "#app",
  data: {
    total: 1,
    products: [
        { title: "Product 1", id: 1, price: 8},
        { title: "Product 2", id: 2, price: 9},
        { title: "Product 3", id: 3, price: 9},
        { title: "Product 4", id: 4, price: 10}
    ],
    cart: []
  },
  methods: {
    addToCart: function (product) {
        this.total += product.price
        this.cart.push(product)
    }
  }
});
