<template>
  <div class="new_tv">
    <div class="left_text">
      <h3>Brand New Tv</h3>
      <h4>Telik 3000</h4>
      <p>Telik 3000 - это lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nunc rutrum a elit quis
        laoreet. Curabitur nec urna et tortor congue porttitor
        convallis in felis.</p>
    </div>

    <div class="tv_pic">
      <img height="250" src="../../public/img/tv1.png" alt="MainTv">
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.left_text {
  border: black solid 2px;
  width: 25%;
  padding: 10px;
}

.new_tv {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
  margin: auto;
}

.tv_pic {

}


</style>