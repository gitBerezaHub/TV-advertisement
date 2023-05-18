<template>
    <h1>Your account in FLSN</h1>
    <small>15+<br/>24-</small>
    <p>Your current name is {{ select_name }}</p>
    <p>Your current age is {{ select_age }}</p>
    <button
            @click="isOpenEditAccount = !isOpenEditAccount"
    >
        {{ isOpenEditAccount ? 'Close' : 'Edit' }}
    </button>
    <div v-if="isOpenEditAccount">
        <h3>Name</h3>
        <div class="button-store">
            <div class="button-store-content">
                <button
                        v-for="name in names"
                        :class="{'selected_button': name == select_name}"
                        :key="name"
                        @click="changeName(name)"
                >
                    {{ name }}
                </button>
            </div>
        </div>
        <input v-model="select_name" type="text" maxlength="64">
        <h3>Age</h3>
        <div class="button-store">
            <div class="button-store-content">
                <button
                        v-for="age in ages"
                        :class="{'selected_button': age==select_age}"
                        :key="age"
                        @click="changeAge(age)"
                >
                    {{ age }}
                </button>
            </div>
        </div>
        <input id="age_input" min=15 max="24" maxlength="64"/>
        <button @click="changeAgeByEvent">Set age</button>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';


export default defineComponent({
    select_name: 'App',
    data() {
        let ages: Array<number | string> = [...Array(10).keys()].map(i => i + 15)
        ages.push('Old')
        ages.push('Young')
        return {
            isOpenEditAccount: false,
            select_name: "Link",
            select_age: 17 as number | string,
            names: [
                "John",
                "Lawrence",
                "Kirill",
                "Link"
            ],
            ages
        }
    },
    methods: {
        changeName(name: string) {
            this.select_name = name
        },
        changeAge(age: string | number) {
            if (typeof age == "string" && !isNaN(Number(age))) {
                age = Number(age)
            }
            if (typeof age == "number") {
                if (age < 15) age = 15
                if (age > 24) age = 24
            }
            this.select_age = age
            return age
        },
        changeAgeByEvent(){
            let inputElement = document.getElementById('age_input') as HTMLInputElement
            this.changeAge(inputElement.value)
        }
    },
    watch: {
        select_age(){
            let inputElement = document.getElementById('age_input') as HTMLInputElement
            inputElement.value = this.select_age.toString()
        }
    }
})
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.button-store {
  display: flex;
  margin-bottom: 5px;
}

.button-store-content {
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

button {
  text-align: center;
  border: none;
  padding: 5px;
  margin: 5px;
}

.selected_button {
  border: 2px solid #2c3e50;
  padding: 3px;
}
input {
  border: 2px solid #aaa;
  padding: 3px;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
