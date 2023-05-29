<template>
  <div>
  <ul>
    <li>
      <img width="250" src="../../public/img/tv2.png" alt="otherTVs">
      <strong>Telik 2000</strong>
      <p>Telik 2000 - это lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nunc rutrum a elit quis
        laoreet. Curabitur nec urna et tortor congue porttitor
        convallis in felis.</p>
    </li>
    <li>
      <img width="250" src="../../public/img/tv2.png" alt="otherTVs">
      <strong>Telik 2000</strong>
      <p>Telik 2000 - это lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nunc rutrum a elit quis
        laoreet. Curabitur nec urna et tortor congue porttitor
        convallis in felis.</p>
    </li>
    <li>
      <img width="250" src="../../public/img/tv2.png" alt="otherTVs">
      <strong>Telik 2000</strong>
      <p>Telik 2000 - это lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nunc rutrum a elit quis
        laoreet. Curabitur nec urna et tortor congue porttitor
        convallis in felis.</p>
    </li>
  </ul>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "OtherTV"
})
</script>

<style scoped lang="scss">
ul {
  list-style-type: none;
  padding: 0  ;
}
li {
  width: 250px;
  border: gray solid 2px;
  padding: 10px;
  float: left;
}
li:hover {
  background-color: #888;
}
</style>