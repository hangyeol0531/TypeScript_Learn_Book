function sum(a: number, b: number): number{
    return a + b;
}

// js는 함수 파라미터 개수를 제한을 안하지만 ts는 제한 한다.
// sum(10, 20, 30, 40, 50);

// 함수의 옵셔널 파라미터

function log(a: string, b?: string){
}

log('hello');
log('hello', 'bye');