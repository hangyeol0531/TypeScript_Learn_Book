// function logText(text){
//     console.log(text);
//     return text;
// }

function logTextGen<T>(text: T): T{
    console.log(text);
    return text;
}

logTextGen<string>('hi');

// 유니온 타입을 하면 반환값에 대한 문제가 있음
function logText<T>(text: T): T{
    console.log(text);
    return text;
}

const str = logText<string>('a');
// generic으로 string 타입을 명확하게 해주어서 에러가 안뜬다.
str.split('');

const login = logText<boolean>(true)

logText(10);

// 제네릭 타입 제한
function logTextLength<T>(text: T[]): T[]{
    console.log(text.length);
    text.forEach((text) => console.log(text))
    return text;
}

logTextLength<string>(['hi', 'abc']);