const arrow1 = (a: number, b: number) : number => {return a+ b} //실행문 방식 return은 괄호안에만
const arrow2 = (a: number, b: number) : number => a + b // 표현문 방식
arrow1(1, 2)
arrow2(1, 2)
// 실행문은 CPu에서 실행한 결과를 안알려주고 return을 써야함
// 표현식은 실행된 결과를 return 을 안해도 알려줌