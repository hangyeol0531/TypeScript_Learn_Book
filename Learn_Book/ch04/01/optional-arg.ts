//! 선택적 매개변수
function fn(arg1: string, arg? : number){
    console.log(`arg : ${arg}`)
}

fn('hllo', 1)
fn('hello')
