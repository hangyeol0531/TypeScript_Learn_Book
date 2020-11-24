//! type ㅈㅏ료형은 고전에 존재하는 타입을 단순히 이름만 바꿔서 사용가능
type stringNumberfunc = (string, number) => void
let f : stringNumberfunc = function(a : string, b: number) : void {}
let g : stringNumberfunc = function(c : string, d: number) : void {}