<template>
  <hr>
  <div class="info">
    <div class="company">
      <h4>TV seller</h4>
      <ul>
        <li>Телевизоры1</li>
        <li>Телевизоры2</li>
        <li>Телевизоры3</li>
      </ul>
    </div>

    <div class="support">
      <h4>Поддержка</h4>
      <ul>
        <li>О компании</li>
        <li>Акции</li>
        <li>Магазины</li>
        <li>Оплата</li>
        <li>Доставка</li>
        <li>Возврат</li>
      </ul>
    </div>

    <div class="contact">
      <h4>Контакты</h4>
      <ul>
        <li>Email: support@gmail.com</li>
        <li>Телефон: +7 (123) 123 10 10</li>
        <li>Адрес: г. Москва ул.Несущесвующая стр.15</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "InfoFooter"
})
</script>

<style scoped lang="scss">

.info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
  margin: 100px auto auto;
}

ul {
  padding: 0;
  list-style-type: none;
}
</style>