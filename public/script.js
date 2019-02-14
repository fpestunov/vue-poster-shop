new Vue({
  el: "#app",
  data: {
    total: 1
  },
  methods: {
    addToCart: function () {
        this.total += 9.99
    }
  }
});
