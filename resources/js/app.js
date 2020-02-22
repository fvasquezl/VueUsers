require('./bootstrap');

window.Vue = require('vue');

import Swal from 'sweetalert2'
window.Swal = Swal;
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
});
window.Toast = Toast;


Vue.component('table-component', require('./components/TableComponent.vue').default);


const app = new Vue({
    el: '#app',
});
