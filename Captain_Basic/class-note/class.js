function Person(name, age){
    this.name = name;
    this.age = age;
}
var capt = new Person('캡틴', 100);

// ES2015 (ES6)
class Person {
    // 클래스
    constructor(name, age){
        console.log('생성 완료');
        this.name = name;
        this.age = age;
    }
}

const hangyeol = new Person('hangyoel', '21'); // 생성 되었습니다.
console.log(hangyeol.name, hangyeol.age);