import { Store } from 'vuex'

declare module '@vue/runtime-core' {
    // declare your own store states
    import {State} from "@/store";

    // provide typings for `this.$store`
    interface ComponentCustomProperties {
        $store: Store<State>
    }
}
