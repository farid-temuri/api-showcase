import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from 'pinia'

import "~/styles/index.scss";
import "uno.css";
import "element-plus/theme-chalk/src/message.scss";
import { router } from "./router";


const app = createApp( App );
const pinia = createPinia()

app.use(router)
app.use( pinia )

app.mount("#app");
