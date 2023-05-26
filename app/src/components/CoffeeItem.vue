<template>
  <img src="@/assets/coffee.png" class="coffee-img" alt="">
  <div class="coffee-item">
    <p class="coffee-name">Cappuccino</p>
    <button class="btn-more">More</button>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">

.coffee-item {
  background-color: #fdfcf7;
  margin: -60px auto;
  border-radius: 16px;
  max-width: 330px;

}

.coffee-img {
  width: 180px;
  display: block;
  margin: 120px auto 0;
}

.coffee-name {
  font-size: 36px;
  font-family: IBM Plex Serif, serif;
  font-weight: lighter;
  text-align: center;
  margin: 0;
  padding: 50px 30px 10px 30px
}

.btn-more {
  font-size: 36px;
  font-family: IBM Plex Serif, serif;
  font-weight: lighter;
  text-align: center;
  border-radius: 0 0 16px 16px;
  width: 100%;
}

</style>