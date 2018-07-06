import vueToast from './vue-toast';

const toast = {
	install(Vue,options){
		Vue.component('toast',vueToast);
	}
};

//为了使用script标签引入的时候
if (typeof window !== 'undefined' && window.Vue) {
    window.toast = toast;
    Vue.use(toast);
};

export default toast;