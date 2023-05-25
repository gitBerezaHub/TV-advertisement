<template>
  <div>
    <MyHeader></MyHeader>
    <CoffeeList></CoffeeList>
    <MyToolbar></MyToolbar>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "vue";
import MyHeader from "@/components/MyHeader.vue";
import MyToolbar from "@/components/MyToolbar.vue";
import CoffeeList from "@/components/CoffeeList.vue";

export default defineComponent({
  components: {CoffeeList, MyToolbar, MyHeader}
})
</script>

<style lang="scss">
body {
  background-color: #FFEFDF;
}
</style>
