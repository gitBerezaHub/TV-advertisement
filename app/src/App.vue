<template>
  <div>
    <MyHeader></MyHeader>
    <LastModel></LastModel>
    <hr>
    <OtherTV></OtherTV>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "vue";
import MyHeader from "@/components/UI/MyHeader.vue";
import LastModel from "@/components/LastModel.vue";
import OtherTV from "@/components/OtherTV.vue";

export default defineComponent({
  components: {OtherTV, LastModel, MyHeader}
})
</script>

<style lang="scss">
</style>
