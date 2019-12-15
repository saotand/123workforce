import Vue from 'vue';
import Vuetify, { VLazy, VIcon, VCard, VRating, VToolbar } from 'vuetify/lib';

Vue.use(Vuetify,
    {
        components: {
            VLazy,
            VIcon,
            VCard,
            VRating,
            VToolbar,
        },
        options: {
            customProperties: true
        },
        iconfont: "mi"
    });

export default new Vuetify({
});
