const LOAD_NUMBER = 4;
let watcher;

new Vue({
  el: "#app",
  data: {
    total: 0,
    products: [],
    results: [],
    cart: [],
    search: "cat",
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
            this.results = response.body;
            this.lastSearch = this.search;
            this.appendResults();
            this.loading = false;
          }.bind(this), 3000);
          //console.log(response)
        });
    },
    appendResults: function () {
      console.log("Append results...");
      if (this.products.length < this.results.length) {
        let toAppend = this.results.slice(
          this.products.length,
          LOAD_NUMBER + this.products.length
        );
        this.products = this.products.concat(toAppend);
      }
    }
  },
  filters: {
    currency: function (price) {
      return "$".concat(price.toFixed(2));
    }
  },
  created: function () {
    this.onSubmit();
  },
  updated: function () {
    let sensor = document.querySelector("#product-list-bottom");
    watcher = scrollMonitor.create(sensor);

    watcher.enterViewport(this.appendResults);
    // watcher.enterViewport(function () {
    //   console.log("Sensor has entered the viewport.")
    // });
  },
  beforeUpdate: function () {
    if (watcher) {
      watcher.destroy();
      watcher = null;
    }
  }
});
