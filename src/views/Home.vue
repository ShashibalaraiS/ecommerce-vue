<template>
  <div>
   <HomeV />
  </div>
</template>

<script>
import HomeV from '@/components/Home.vue';
export default {
  name: 'HomeView',
  components: {
    HomeV
  },
  methods: {
    goToCheckout() {
      this.$router.push({ name: 'checkoutView' });
    },
  },
};
</script>
