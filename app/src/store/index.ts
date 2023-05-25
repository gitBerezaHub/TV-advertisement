import {InjectionKey} from 'vue'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {createStore, Store} from 'vuex'

export interface State {
    name: string,
    age: number | string
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {}
})
