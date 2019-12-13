import Vue from "vue";


// UI
import appBar from "@/components/ui/appbar.vue";
Vue.component('app-main-bar', appBar);

import splashScreen from "@/components/ui/splash.vue"
Vue.component("app-splash", splashScreen);

import typeuserbar from "@/components/ui/typeuserbar.vue";
Vue.component("app-type-user-bar", typeuserbar);

// Dialogs