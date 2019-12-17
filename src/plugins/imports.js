import Vue from "vue";

// UI
import appBar from "@/components/ui/appbar.vue";
Vue.component('app-main-bar', appBar);

import splashScreen from "@/components/ui/splash.vue"
Vue.component("app-splash", splashScreen);

import splashScreen2 from "@/components/ui/splash2.vue";
Vue.component("app-splash2", splashScreen2);

import typeuserbar from "@/components/ui/typeuserbar.vue";
Vue.component("app-type-user-bar", typeuserbar);

import searchuser from "@/components/ui/searchprofile.vue";
Vue.component("app-search-user", searchuser);

import mainfooter from "@/components/ui/footer.vue";
Vue.component("app-main-footer", mainfooter);

import tooltipcomp from "@/components/ui/tooltip.vue";
Vue.component("app-tooltip", tooltipcomp);

import cmpDialog from "@/components/ui/dialog.vue";
Vue.component("app-dialog", cmpDialog);

import cmpPayment from "@/components/ui/payment.vue";
Vue.component("app-payment-plans", cmpPayment);

// user
import cardprofile from "@/components/user/cardprofile.vue"
Vue.component("app-card-profile", cardprofile);

// Dialogs