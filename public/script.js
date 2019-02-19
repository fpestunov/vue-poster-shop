new Vue({
  el: "#app",
  data: {
    total: 0,
    products: [],
    cart: [],
    search: "",
    lastSearch: "",
    loading: false
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
    },
    inc: function (item) {
      item.qty++;
      this.total += item.price;
    },
    dec: function (item) {
      item.qty--;
      this.total -= item.price;
      if (item.qty <= 0) {
        let itemIndex = this.cart.indexOf(item);
        this.cart.splice(itemIndex, 1);
      }
    },
    onSubmit: function () {
      this.loading = true;
      this.products = [];
      let path = "/search?q=".concat(this.search);
      this.$http.get(path)
        .then(function (response) {
          setTimeout(function() {
            this.products = response.body;
            this.lastSearch = this.search;
            loading = false;
          }.bind(this), 3000);
          //console.log(response)
        });
    }
  },
  filters: {
    currency: function (price) {
      return "$".concat(price.toFixed(2));
    }
  },
  cre
});
