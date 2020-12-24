import Vue from "vue";

export default class HelloWorld extends Vue {
    msg = {text: 'hh'};

    handleMsg() {
        return this.msg.text;
    }
}