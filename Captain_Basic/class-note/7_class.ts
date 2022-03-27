class PersonTs{
    // class에서는 맴버 변수를 선언해 줘야한다.
    private name: string;
    public age: number;
    readonly log: string;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}