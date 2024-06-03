<template>
  <div className="product-card" style="margin:auto">
    <h2 style="text-align: left;">Shopping Cart</h2>
    <ul style=" list-style-type: none;    padding: 0;">
      <li v-for="item in showData" :key="item.id">
        {{ item.name }} - ${{ item.price }}
      </li>

    </ul>
    <form @submit.prevent="checkout" className="checkout-form">
      <label htmlFor="name" className="form-label">Name:</label>
      <input type="text" id="name" name="name" v-model="uname" onChange={handleChange} className="form-input" required />
      <label htmlFor="email" className="form-label">Email:</label>
      <input type="email" id="email" name="email" v-model="email" onChange={handleChange} className="form-input"
        required />
      <button type="submit" className="submit-button">Submit</button>
    </form>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CheckoutComponent',
  data() {
    return {
      name: '',
      email: "",
      error: false
    }
  },
  methods: {
    async checkout() {
      this.validateMsg()
      if (this.email == '' && this.uname == '') {
        return
      }
      let result = await axios.post("http://localhost:5000/users", {
        email: this.email,
        uname: this.uname,
        data: this.$store.state.selectedUserData

      });
      if (result.status == 201) {
        alert(result.data.message)
        this.$router.push({ name: 'Home' })
      }

    },
    validateMsg() {
      if (this.email == '' || this.uname == '') {
        this.error = true
      }
      else {
        this.error = false
      }
    }
  },
  computed: {
    showData() {
      return this.$store.state.selectedUserData ? this.$store.state.selectedUserData : ''

    }
  },
  beforeUnmount() {
    this.$store.dispatch("clearSelectedUserData");
  }
};
</script>
<style scoped>
@import "@/assets/style.scss";
</style>
