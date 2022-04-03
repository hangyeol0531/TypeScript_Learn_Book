// 새로운 타입으로 변환 해주는 문법

type Heroes = 'Hulk' | 'Capt' | 'Thor';
type HeroAges = { [K in Heroes] : number }

const ages: HeroAges = {
    Hulk: 33,
    Capt: 100,
    Thor: 1000,
}

// for in 반복문 코드
