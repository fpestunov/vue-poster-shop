new Vue({
  el: "#app",
  data: {
    total: 12,
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
        this.total += product.price;
        let isFound = false;
        for (var i = 0; i < this.cart.length; i++) {
          if (this.cart[i].id === product.id) {
            this.cart[i].qty++;
            isFound = true;
          }
        }
        if (!isFound) {
          this.cart.push({
            id: product.id,
            title: product.title,
            price: product.price,
            qty: 1
          });
        }
    }
  }
});
