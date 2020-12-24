<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld :msg=msg :title=title />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";

interface MsgProps {
    text: string;
    code: number;
    flag?: boolean;
}

@Component({
  components: {
    HelloWorld
  }
})

export default class App extends Vue {
  msg: MsgProps = {
    text: 'typescript',
    code: 3,
    flag: true,
  };
  title = 'vue-demo'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
