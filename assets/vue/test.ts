import {createApp} from 'petite-vue';

export default function (defaultOptions: object) {
    const options = {
        variable: "test",
    }

    createApp({...defaultOptions, ...options}).mount('#vue--test');
}