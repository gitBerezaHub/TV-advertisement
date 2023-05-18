import { InjectionKey } from 'vue'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { createStore, Store } from 'vuex'
// define your typings for the store state
export interface State {
    name: string,
    age: number | string
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol()

export const store =  createStore<State>({
    state: {
        name: "Lawrence",
        age: 17 as number | string,
    } ,
    getters: {},
    mutations: {
        changeName(state: State, name: string) {
            state.name = name
        },
        changeAge(state: State, age: string | number) {
            if (typeof age == "string" && !isNaN(Number(age))) {
                age = Number(age)
            }
            if (typeof age == "number") {
                if (age < 15) age = 15
                if (age > 24) age = 24
            }
            state.age = age
            return age
        },
    },
    actions: {},
    modules: {}
})
