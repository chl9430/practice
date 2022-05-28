// boolean

// let isDone: boolean = false;

// isDone = true;

// console.log(typeof isDone);

// let isOkay: Boolean = true;

// let isNotOkay: boolean = new Boolean(true);

// number

// let decimal: number = 6;

// let hex: number = 0xf00d;

// let binary: number = 0b1010;

// let octal: number = 0o744;

// let notANumber: number = NaN;

// let underscoreNum: number = 1_000_000;

// string

// let fullName: string = "Mark Lee";
// let age: number = 39;

// let sentence: string = `Hello, My name is ${fullName}.

// I'll be ${age} years old next month!.`;

// console.log(sentence);

// symbol

// console.log(Symbol("foo") === Symbol("foo"));

// const sym = Symbol();

// const obj = {
//   [sym]: "value", // Symbol 함수로 만들어진 반환값으로만 접근이 가능
// };

// obj[sym] = "dog";

// null & undefined

// let myName: number = undefined;

// let u: undefined = null;
// let v: void = undefined;

// let union: string | null = null; // union 문법

// union = "Mark";

// object

// const person1 = { name: "Mark", age: 39 };

// const person2 = Object.create({ name: "Mark", age: 39 });

// Array

// let list: (number | string)[] = [1, 2, 3, "4"];

// let list: Array<number> = [1, 2, 3];

// tuple

// let x: [string, number];

// x = ["hello", 39];

// x = [10. "Mark"];

// x[2];

// const person: [string, number] = ["Mark", 39];

// const [first, second, third] = person;

// any

// function returnAny(message: any): any {
//   console.log(message);
// }

// const any1 = returnAny("리턴은 아무거나");

// any1.toString();

// let looselyTyped: any = {};

// const d = looselyTyped.a.b.c.d;

// function leakingAny(obj: any) {
//   const a = obj.num;
//   const b = a + 1;
//   return b;
// }

// const c = leakingAny({ num: 0 });
// c.indexOf("0");

// unknown

// declare const maybe: unknown;

// const aNumber: number = maybe;

// if (maybe === true) {
//   const aBoolean: boolean = maybe;

//   const aString: string = maybe;
// }

// if (typeof maybe === "string") {
//   const aString: string = maybe;

//   const aBoolean: boolean = maybe;
// }

// never

// function error(message: string): never {
//   throw new Error(message);
// }

// function fail() {
//   return error("failed");
// }

// function infiniteLoop(): never {
//   while (true) {}
// }

// declare const a: string | number;

// if (typeof a !== "string") {
//   a;
// }

// type Indexable<T> = T extends string ? T & { [index: string]: any } : never;

// const b: Indexable<{}> = "";

// void

// function returnVoid(message: string): void {
//   console.log(message);

//   return undefined;
// }

// returnVoid("리턴이 없다");

// ====================================

// const a: void = undefined;

// interface: optional property

// interface Person {
//   name: String;
//   age?: Number;
// }

// function hello(person: Person): void {
//   console.log(person.name);
// }

// hello({ name: "Mark", age: 39 });
// hello({ name: "Anna" });

// interface: optional property2

// interface Person {
//   name: String;
//   age?: Number;
//   [index: string]: any;
// }

// function hello(person: Person): void {
//   console.log(person["name"]);
// }

// const person: Person = {
//   name: "chris",
//   license: false,
// };

// hello(person);

// function in interface

// interface Person {
//   name: String;
//   age: Number;
//   hello(): void;
// }

// const person: Person = {
//   name: "Mark",
//   age: 39,
//   hello: function (): void {
//     console.log(this.name);
//   },
// };

// const person2: Person = {
//   name: "Mark",
//   age: 39,
//   hello(): void {
//     console.log(this.name);
//   },
// };

// person.hello();
// person2.hello();

// const p43: Person4 = {
//   name: "Mark",
//   age: 39,
//   hello(): void => {
//     console.log(this.name);
//   },
// };

// class implements interface

// interface IPerson {
//   name: String;
//   age?: Number;
//   hello(): void;
// }

// class Person implements IPerson {
//   name: String;
//   age?: Number | undefined;

//   constructor(name: String) {
//     this.name = name;
//   }

//   hello(): void {
//     console.log(this.name);
//   }
// }

// const person: IPerson = new Person("Mark");
// // 인터페이스의 타입을 명시해주는게 좋다.
// person.hello();

// interface extends interface

// interface IPerson {
//   name: String;
//   age?: Number;
// }

// interface IKorean extends IPerson {
//   city: String;
// }

// const korean: IKorean = {
//   name: "김아무개",
//   city: "seoul",
// };

// function interface

// interface HelloPerson {
//   (name: string, age?: number): void;
// }

// const helloPerson: HelloPerson = function (name: string) {
//   console.log("안녕하세요 ${name} 입니다");
// };

// helloPerson("Mark", 39); // 함수의 구현체와는 관계없이 interface를 기준으로 한다.

// readonly interface properties

// interface Person {
//   name: string;
//   age?: number;
//   readonly gender: string;
// }

// const person: Person = {
//   name: "Mark",
//   gender: "Male",
// };

// person.gender = "Female";

// class quick start

// class Person {
//   name;

//   constructor(name: string) {
//     this.name = name;
//   }
// }

// const p1 = new Person("Mark");

// console.log(p1);

// constructor & initialize

// class Person {
//   name: string = "Mark";
//   age!: number; // 클래스의 속성을 런타임에 직접 넣어주겠다!

//   constructor(age?: number) {
//     if (age == undefined) this.age = 20;
//     else this.age = age;
//   }
// }

// const p1: Person = new Person(13); // 디폴트 생성자도 있다
// const p2: Person = new Person();
// console.log(p1);
// console.log(p2);

// 접근 제어자

// class Person {
//   protected name: string = "Default";
// }

// class Korean extends Person {
//   private _age!: number; // 프라이빗은 관습으로 언더바를 붙여준다

//   constructor(name: string, age?: number) {
//     super();

//     this.name = name;

//     if (age == undefined) this._age = 20;
//     else this._age = age;
//   }
// }

// const korean1: Korean = new Korean("Min Jae Kim", 13);
// console.log(korean1);

//initialization in constructor parameter

// class Person {
//   public constructor(public name: string, private age: number) {}
// }

// const p1: Person = new Person("Mark", 13);
// console.log(p1);

// getters, setters

// class Person {
//   public constructor(private _name: string) {}

//   get getName() {
//     // get을 하는 함수 getter
//     return this._name;
//   }

//   set setName(n: string) {
//     // set을 하는 함수 setter
//     this._name = n;
//   }
// }

// const p1: Person = new Person("Mark");
// console.log(p1.getName);
// p1.setName = "Chirs"; // 함수지만 프로퍼티 처럼 작용한다.
// console.log(p1.getName);

// readonly properties

// class Person {
//   readonly name: string = "Mark";
//   readonly country: string = "Korea";

//   constructor(name: string, country: string) {
//     this.name = name;
//     this.country = country;
//   }

//   changeCountry() {
//     this.country = "China";
//   }
// }

// const p1: Person = new Person("Mark", "US");
// p1.name = "Jake";

// index signatures in class

// class Students {
//   [index: string]: "male" | "female";

//   teacher: "male" = "male"; // 타입을 명시하지 않으면, teacher는 string타입이 된다.
// }

// const a = new Students();
// a.mark = "male";
// a.jade = "male";

// console.log(a);

// const b = new Students();
// b.chloe = "female";
// b.alex = "male";
// b.anna = "female";

// console.log(b);

// static properites & methods

// class Person {
//   public static CITY = "SEOUL";

//   public tellMyCity() {
//     console.log(Person.CITY);
//   }

//   public changeCity() {
//     Person.CITY = "NEW YORK";
//   }
// }

// const p1 = new Person();
// const p2 = new Person();

// Person.CITY = "BARCA";
// p1.tellMyCity();
// p2.tellMyCity();

// p1.changeCity();
// p1.tellMyCity();
// p2.tellMyCity(); // p1에서 change를 했는데도 p2의 CITY도 바뀌어 있다!

// singletons

// class ClassName {
//   private static instance: ClassName | null = null;

//   public static getInstance(): ClassName {
//     // ClassName으로 부터 만든 오브젝트가 없으면 만든다
//     if (ClassName.instance === null) {
//       ClassName.instance = new ClassName();
//     }

//     return ClassName.instance;
//   }

//   private constructor() {} // 객체 생성을 막는다
// }

// const a = ClassName.getInstance();
// const b = ClassName.getInstance();

// console.log(a === b);

// 상속

// class Parent {
//   protected _name: string;
//   private _age: number;

//   constructor(name: string, age: number) {
//     this._name = name;
//     this._age = age;
//   }

//   public print(): void {
//     console.log(`이름은 ${this._name} 이고, 나이는 ${this._age} 입니다`);
//   }
// }

// const p = new Parent("Mark", 39);
// p.print();

// class Child extends Parent {
//   private gender: string;

//   constructor(name: string, age: number, gender: string) {
//     super("Mark.jr", age); // 부모의 생성자를 호출한다. 항상 먼저 super 키워드를 쓴다.

//     this.gender = gender;
//   }
// }

// const c = new Child("Mark Jr", 1, "male");
// c.print();

// abstract classes

// abstract class AbstractPerson {
//   // abstract 키워드가 있으면 클래스 앞에도 반드시 쓴다.
//   protected _name: string = "Mark";

//   abstract setName(name: string): void; // 구현을 하지 않는다.
// }

// // new AbstractPerson

// class Person extends AbstractPerson {
//   setName(name: string): void {
//     this._name = name;
//   } // 상속으로 완전하게 만든다.
// }

// const p = new Person();
// p.setName("Son");

// generic

// function helloString(message: string): string {
//   return message;
// }

// function helloNumber(message: number): number {
//   return message;
// }

// function hello(message: any): any {
//   return message;
// }

// function helloGeneric<T>(message: T): T {
//   return message;
// }

// console.log(helloGeneric("Mark").length); // T는 문자열 리터럴로 지정됨
// console.log(helloGeneric(39)); // 숫자 리터럴로 지정됨
// console.log(helloGeneric(true)); // true 리터럴

// generic basic

// function helloBasic<T, U>(message: T, comment: U): T {
//   return message;
// }

// helloBasic<string, number>("Mark", 39);
// helloBasic(36, 39); // 자동으로 T가 추론됨. 36으로 추론됨

// generic Array & Tuple

// function helloArray<T>(message: T[]): T {
//   return message[0];
// }

// helloArray(["Hello", "World"]);
// helloArray(["Hello", 5]);

// function helloTuple<T, K>(message: [T, K]): T {
//   return message[0];
// }

// helloTuple(["Hello", "World"]);
// helloTuple(["Hello", 5]);

// generics function

// type HelloFunctionGeneric1 = <T>(message: T) => T;

// const helloFunction1: HelloFunctionGeneric1 = <T>(message: T): T => {
//   return message;
// };

// interface HelloFunctionGeneric2 {
//   <T>(message: T): T;
// }

// const helloFuncion2: HelloFunctionGeneric2 = <T>(message: T): T => {
//   return message;
// };

// generic class

// class Person<T, K> {
//   private _name: T;
//   private _age: K;

//   constructor(name: T, age: K) {
//     this._name = name;
//     this._age = age;
//   }
// }

// new Person("Mark", 39);
// new Person<string>(39);
// new Person<string, number>("Mark", "age");

// generic with extends

// class PersonExtends<T extends string | number> {
//   private _name: T;

//   constructor(name: T) {
//     this._name = name;
//   }
// }

// new PersonExtends("Mark");
// new PersonExtends(39);
// new PersonExtends(true);

// keyof & type lookup system

// interface IPerson {
//   name: string;
//   age: number;
// }

// const person: IPerson = {
//   name: "Mark",
//   age: 39,
// };

// IPerson[keyof IPerson]
// => IPerson["name" | "age"]
// => IPerson["name"] | IPerson["age"]
// => string | number
// function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
//   return obj[key];
// }

// getProp(person, "name"); // 해당 속성(name)에 들어올 수 있는 값의 타입이 설정된다.

// function setProp<T, K extends keyof T>(obj: T, key: K, value: T[K]): void {
//   obj[key] = value;
// }

// setProp(person, "name", "Anna"); // 해당 속성(name)에 들어올 수 있는 값의 타입이 설정된다.

// function func2(a: number) {
//   if (a > 0) {
//     return a * 38;
//   }
// }

// console.log(func2(5)); //190
// console.log(func2(-5)); // NaN
