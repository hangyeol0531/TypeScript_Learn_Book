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

// 제네릭 타입 제한2 - 정의된 타입 이용하기
interface LengthType {
    length: number;
}

// 위 속성이 있을 것이다.
function logTextLength2<T extends LengthType>(text: T): T{
    text.length;
    return text;
}

logTextLength2('a');
logTextLength2({ length : 10})

// 제네릭 타입 제한3 - keyof
interface ShoppingItem{
    name: string;
    price: number;
    stock: number;
}

// 키들 중에 한 가지가 T가 된다.
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T{
    return itemOption;
}

// getShoppingItemOption(10);
// getShoppingItemOption<string>('a');
getShoppingItemOption("name");