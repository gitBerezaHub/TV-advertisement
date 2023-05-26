<template>
<div>
  <ul>
    <li>
      <svg
          width="42"
          height="42"
          xmlns="http://www.w3.org/2000/svg">
        <circle cx="3" cy="3" r="3" fill="black" />
        <rect x="12" y="1" height="4" width="30" rx="2"/>
        <circle cx="3" cy="20" r="3" fill="black" />
        <rect x="12" y="18" height="4" width="30" rx="2"/>
        <circle cx="3" cy="37" r="3" fill="black" />
        <rect x="12" y="35" height="4" width="30" rx="2"/>
      </svg>
    </li>
    <li>
      <svg
          width="42"
          height="42"
          xmlns="http://www.w3.org/2000/svg">
        <circle cx="26" cy="14" r="13" fill="black" />
        <circle cx="26" cy="14" r="9" stroke="black" stroke-width=".1" fill="#fff5ef"/>
        <rect x="" y="36" height="4" width="25" rx="2" transform="rotate(135 13 33)"/>
      </svg>
    </li>
    <li>
      <svg
          width="42"
          height="42"
          xmlns="http://www.w3.org/2000/svg">
        <rect y="20" height="4" width="42" rx="2"/>
        <rect y="21" height="4" width="42" rx="2" transform="rotate(90 22 22)"/>
      </svg>
    </li>
  </ul>
</div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
ul{
  list-style-type: none;
  padding: 0;
  display: inline-flex;
  background-color: #fff5ef;
  border-top: 3px solid rgb(136, 136, 136, .7);
  position: fixed;
  bottom: 0;
  width: 100%;
  margin: 0;
}
li{
  margin: auto;
  padding: 10px;
}
</style>