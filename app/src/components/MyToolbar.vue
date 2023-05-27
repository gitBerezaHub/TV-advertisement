<template>
  <div>
    <ul>
      <li>
        <svg
            width="32"
            height="32"
            xmlns="http://www.w3.org/2000/svg">
          <circle cx="2.5" cy="2.5" r="2.5" fill="black" />
          <rect x="9" y="1" height="3" width="23" rx="1.5"/>
          <circle cx="2.5" cy="16" r="2.5" fill="black" />
          <rect x="9" y="14.5" height="3" width="23" rx="1.5"/>
          <circle cx="2.5" cy="29.5" r="2.5" fill="black" />
          <rect x="9" y="28" height="3" width="23" rx="1.5"/>
        </svg>
      </li>
      <li>
        <svg
            width="32"
            height="32"
            xmlns="http://www.w3.org/2000/svg">
          <circle cx="22" cy="10" r="10" fill="black" />
          <circle cx="22" cy="10" r="8" stroke="black" fill="#fff5ef"/>
          <rect x="" y="29" height="3" width="21" rx="2" transform="rotate(135 11 26.5)"/>
        </svg>
      </li>
      <li>
        <svg
            width="32"
            height="32"
            xmlns="http://www.w3.org/2000/svg">
          <rect y="14" height="3" width="32" rx="2"/>
          <rect y="17.5" height="3" width="32" rx="2" transform="rotate(90 17.5 17.5)"/>
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
  left: 0;
  width: 100%;
  margin: 0;
}
li{
  margin: auto;
  padding: 10px;
}
</style>