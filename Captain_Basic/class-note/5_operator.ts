// union typen
function logMessage(value: string | number){
    // 타입 가드  특정 타입으로 범위를 좁혀나감
    if(typeof value === 'number'){
        value.toLocaleString();
    }
    if(typeof value === 'string'){
        value.toString();
    }
    throw new TypeError('value must be string or Number');
}

logMessage('helllo');
logMessage(100)

interface Developer1{
    name: string;
    skill: string;
}

interface Person1{
    name: string;
    age: number;
}

// Union
function askSomeoneUnion(someone: Developer1 | Person1){
    // 위 인터페이스의 공통된 속성만 접근이 가능하다.
    someone.name;
    someone.skill
    someone.age
}

// InterSection
function askSomeoneIntersection (someone: Developer1 & Person1){
    // 위 인터페이스의 공통된 속성만 접근이 가능하다.
    someone.name;
    someone.skill
    someone.age
}

askSomeoneUnion({name: '디벨러퍼', skill : '웹 개발'});
askSomeoneUnion({ name : '캡틴', age: 100});

// 속성을 모두 합쳐야한다.
askSomeoneIntersection({ name : '캡틴', age: 100, skill: ' 웹 개발'})