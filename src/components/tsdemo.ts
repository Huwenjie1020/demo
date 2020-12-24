import { Component, Prop, Vue } from "vue-property-decorator";

interface MsgProps {
    text: string;
    readonly code: number;
    flag?: boolean;
}
// 函数类型
interface SearchFunc {
    (source: string, subString: string): boolean;
}

//枚举
enum CardType {
    IQYCard = 1,
    JDCard = 2,
    CityCard = 3,
}

@Component
export default class HelloWorld extends Vue {
    @Prop()
    msg!: MsgProps;

    @Prop({
        type: String,
        default: 'vueDemo', 
        required: true,
    })
    title!: string;

    mySearch: SearchFunc = function (source: string, subString: string) {
        const result = source.search(subString);
        return result > -1;
    }
    handleMsg(msg: MsgProps): string {
        // 当访问元组类型中一个已知索引的元素，会得到正确的类型：
        const x: [string, number] = ['hello', 10];
        console.log(x[0].substr(1)); 
        // console.log(x[1].substr(1));
        
        // 枚举
        if (msg.code === CardType.CityCard) {
            console.log('hh')
        }

        //类型断言有两种写法
        // let someValue: any = "this is a string";
        // let strLength: number = (<string>someValue).length;
        // let strLength1: number = (someValue as string).length;
        // const obj: MsgProps = {} as MsgProps;

        // console.log(this.msg.name)
        return msg.text;
    }

     //Void 当一个函数没有返回值时，通常会将其返回值类型设置为 void：
    warnUser(text: string): void {
        //声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null：
        const unusable: void = undefined;
        console.log("This is my warning message", unusable, text);
    }

    // 泛型
    identity<T>(arg: T): T {
        return arg;
    }
    output = this.identity<string>("myString");
    output1 = this.identity("myString"); // 不传类型参数，使用类型推论

}