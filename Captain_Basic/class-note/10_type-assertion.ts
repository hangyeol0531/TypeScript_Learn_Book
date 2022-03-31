// 타입 단언(type assertion)
var a;
a = 20;
a = 'a';
// ts는 상관하지 않고 개발자가 선언 한 타입으로 간주해라
var b = a as string;

// DOM API 조작할떄 주로 사용함
var div = document.querySelector('div') as HTMLDivElement;
div.innerHTML;