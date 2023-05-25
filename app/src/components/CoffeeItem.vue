<template>
  <div>
    <div class="coffee-item">
      <img src="@/assets/coffee.png" class="coffee-img" alt="">
      <p class="coffee-name">Cappuccino</p>
      <button class="btn-more">More</button>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.coffee-item{
  background-color: rgb(255, 255, 255, .75);
  margin: auto 30px;
  position: absolute;
  top: 25%;
  left: 0;
  right: 0;
  height: 25%;
  border-radius: 16px;
}
.coffee-name{
  font-size: 36px;
  font-family: IBM Plex Serif, serif;
  font-weight: lighter;
  text-align: center;
  margin: 0 auto auto auto;
}
.btn-more{
  font-size: 36px;
  font-family: IBM Plex Serif,serif;
  font-weight: lighter;
  text-align: center;
  margin-top: 10px;
  padding: 10px;
  width: 100%;
  border-radius: 0 0 16px 16px;
}
.coffee-img{
  width: 180px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: -18%;
}

</style>