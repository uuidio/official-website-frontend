import Vue from 'vue';
import {
Input,
  Button,
  Form,
  FormItem,
  Carousel,
  CarouselItem,
  Message,
} from 'element-ui';

const element = {
  install: function (Vue) {
    Vue.use(Input);
    Vue.use(Button);
    Vue.use(Form);
    Vue.use(FormItem);
    Vue.use(Carousel);
    Vue.use(CarouselItem);
    Vue.prototype.$message = Message;
  }
}

export default element
