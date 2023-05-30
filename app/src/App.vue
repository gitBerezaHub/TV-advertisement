<template>
  <div>
    <MyHeader></MyHeader>
    <LastModel></LastModel>
    <OtherTV></OtherTV>
    <AboutUs></AboutUs>
    <InfoFooter></InfoFooter>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "vue";
import MyHeader from "@/components/UI/MyHeader.vue";
import LastModel from "@/components/LastModel.vue";
import OtherTV from "@/components/OtherTV.vue";
import AboutUs from "@/components/AboutUs.vue";
import InfoFooter from "@/components/InfoFooter.vue";

export default defineComponent({
  components: {InfoFooter, OtherTV, AboutUs, LastModel, MyHeader}
})
</script>

<style lang="scss">
</style>
