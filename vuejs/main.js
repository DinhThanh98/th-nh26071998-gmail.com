var vuejs = new Vue({
    el: '#app',
    data: {
        title: 'thành đẹp trai, lại bảo không được'
    },
    methods: {
        say: function(text) {
            return 'hello ' + text;
        }
    }
});
console.log(vuejs);
setTimeout(() => {
    vuejs.title = 'thành cực kì đẹp trai'

}, 3000);