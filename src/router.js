/**
 * Created by aresn on 16/8/22.
 */
const routers = {
    '/index': {
        component (resolve) {
            require(['./views/index.vue'], resolve);
        }
    },

    '/t/form': {
        component (resolve) {
            require(['./views/t/form.vue'], resolve);
        }
    },

    '/t/form1': {
        component (resolve) {
            require(['./views/t/form1.vue'], resolve);
        }
    },

    '/t/form2': {
        component (resolve) {
            require(['./views/t/form2.vue'], resolve);
        }
    },

    '/t/form3': {
        component (resolve) {
            require(['./views/t/form3.vue'], resolve);
        }
    }
};
export default routers;