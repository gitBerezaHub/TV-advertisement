<template>
    <h1>Your account in FLSN</h1>
    <small>15+<br/>24-</small>
    <p>Your current name is {{ $store.state.name }}</p>
    <p>Your current age is {{ $store.state.age }}</p>
    <p>Your current hobbies will be here later</p>
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
                        :class="{'selected_button': name == $store.state.name}"
                        :key="name"
                        @click="$store.commit('changeName', name)"
                >
                    {{ name }}
                </button>
            </div>
        </div>
        <input :value="$store.state.name" @input="changeNameByEvent" type="text" maxlength="64">
        <h3>Age</h3>
        <div class="button-store">
            <div class="button-store-content">
                <button
                        v-for="age in ages"
                        :class="{'selected_button': age==$store.state.age}"
                        :key="age"
                        @click="changeAge(age)"
                >
                    {{ age }}
                </button>
            </div>
        </div>
        <input
                min=15 max="24" maxlength="64"
                id="age_input"
                v-model="inputAge"
        />
        <button
                @click="changeAgeByEvent"
                :class="{'changed_button': inputAge.toString()!==$store.state.age.toString()}"
        >
            Save age
        </button>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';


export default defineComponent({
    select_name: 'App',
    data() {
        let ages: Array<number | string> = [...Array(10).keys()].map(i => i + 15)
        ages.push('old')
        ages.push('young')
        return {
            isOpenEditAccount: false,
            inputAge: this.$store.state.age.toString(),
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
        changeNameByEvent(event: Event) {
            let obj = event.target as HTMLInputElement
            this.$store.commit('changeName', obj.value)
        },
        changeAge(value: string | number){
            this.$store.commit('changeAge', value)
            this.inputAge = this.$store.state.age
        },
        changeAgeByEvent() {
            let inputElement = document.getElementById('age_input') as HTMLInputElement
            this.changeAge(inputElement.value.toLowerCase())
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

.changed_button {
  border: 2px solid #0F0;
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
