<template>
  <div class="about">
    <div class="tv-img">
      <img height="300" src="../../public/img/tv1.png" alt="MainTv">
    </div>
    <div class="about-txt">
      <h3>TV Seller</h3>
      <ul>
        <li>Инновационная компания</li>
        <li>Признаны по всему миру</li>
        <li>Качественный товар</li>
        <li>Лучшие в своём деле</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "AboutUs"
})
</script>

<style scoped lang="scss">
.about {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
  margin: auto;
  background-color: #f0f0f0;
}


</style>