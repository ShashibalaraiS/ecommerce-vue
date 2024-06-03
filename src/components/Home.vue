<template>
  <div class="">
    <h1>Product List</h1>
  </div>
  <button className="checkout-button" @click="goToCart">Checkout ({{ showVal }}) items</button>
  <div class="span-err" v-if="err">Please add atleast 1 product to continue</div>
  <div className="product-container">
    <div v-for="product in products" :key="product.id" className="product-card">
      <h2>{{ product.name }}</h2>
      <p>Price: ${{ product.price }}</p>
      <p>Category: {{ product.category }}</p><br>
      <button type="submit" className="button-add-to-cart" @click="addToCart(product.id)">Add to Cart</button>
    </div>

  </div>
</template>

<script>
import apiService from '@/apiService';

export default {
  name: "HomeView",
  data() {
    return {
      products: [],
      Num: 0,
      err:false
    };
  },
  created() {
    this.fetchProducts();
  },
  methods: {
    fetchProducts() {
      apiService.getProducts()
        .then(response => {
          this.products = response.data;
          console.log(" this.products", this.products)
        })
        .catch(error => {
          console.log('There was an error:', error.response);
        });
    },
    addToCart(productId) {
      this.$store.dispatch("getProductDetail", productId);
    },
    goToCart() {
      if(this.showVal >0){
        this.err = false
        this.$router.push({ name: 'CheckoutView' });
      }else{
        this.err = true;
        return
      }
      
    }

  },
  computed: {
    showVal() {
      return this.$store.state.selectedUserData ? this.$store.state.selectedUserData.length : '0'

    }
  }, 
  
}
</script>

<style scoped>
@import "@/assets/style.scss";
</style>
