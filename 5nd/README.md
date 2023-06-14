# Modifier 

1. 선언
- modifier onlyevenNumber(uint value){
    require(value %2 == 0, "value must be even number)
}

2. 적용
- function setEvenNumber(uint num) public onlyEvenNumber(num) {
    return num;
}


3. 예시처리
- modifier onlyOwner(){
    require(msg.sender == owner, "caller is not owner')
}

**  "_;" **

Modifier 적용한 함수의 실행시점 지정