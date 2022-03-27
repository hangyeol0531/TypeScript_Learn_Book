enum Shoes {
    Nike = '나이키',
    Adidas = '아디다스',
}

const myShoes = Shoes.Nike;
console.log(myShoes);

enum Answer{
    yes = 'yes',
    no = 'no'
}
function askQuestion(answer: Answer){
    if (answer === Answer.yes)console.log('ok');
    if (answer === Answer.no) console.log('no');
}

askQuestion(Answer.yes);