//TypeScript 默认并不支持 *.vue 后缀的文件,让ts识别vue
declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}
