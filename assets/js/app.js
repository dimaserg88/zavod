
const app = {
    data() {
        return {
            message: 'Привет, Vue.js!',
            navMobile: false,
            popupCallback: false,
            popupCalculator: false
        }
    },
    methods: {
        openMobileNav() {
            this.navMobile = !this.navMobile
            document.querySelector("html").classList.toggle("hidden");
        },
        setAppColor(color) {
            localStorage.setItem('appColor', color)
            document.documentElement.style.setProperty('--main-yellow-color', color);
        },
        openPopupCallback() {
            this.popupCallback = !this.popupCallback
        },
        openPopupCalculator() {
            this.popupCalculator = !this.popupCalculator
        }
    },
    mounted() {
        const appColor = localStorage.getItem('appColor')
        if (appColor) {
            document.documentElement.style.setProperty('--main-yellow-color', appColor);
        } else {
            localStorage.setItem('appColor', '#FDDA07')
            document.documentElement.style.setProperty('--main-yellow-color', '#FDDA07');
        }
        document.querySelector("#app").classList.add("show");
    }
}

Vue.createApp(app).mount('#app')