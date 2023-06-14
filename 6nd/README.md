# Array

1. Storage
- BlockChain 에 영구저장
- SmartContract 내외부 접근 * 접근제어자
- 전역변수는 명시하지 않는 경우 Storage 

2. Memory
- BlockChain 에 저장안됨
- 휘발성
- 함수내에서 정의하면 memory 저장
- 함수 동작 후 소멸
- 함수 외부 접근 불가



## ReferenceType Array

1. Calldata
- Transaction or Call 함수에 매개변수가 유지되는 "읽기 저장 공간"
- 주로 외부 Contract의 call 을 받는 external 함수의 매개변수에 사용
- memory 처럼 동작
- 수정 불가

2. Stack
- EVM 휘발성 데이터 관리
- 최대 1024MB

## Array Write

- uint [] public array
- 자료형 배열 접근제어자 배열명

- 동적 vs 정적
1. 동적의 예
- uint[] public array1;

2. 정적의 예
- string[5] public array2 = ["123", "123","123","123","123"]

## Array Member 

1. Length
- 배열의 길이를 반환
2. push()
- 배열끝에 0으로 초기화된 요소 추가 및 참조 반환
3. push(x)
- 새로운값을 저장하면서 배열길이 증가시킴
4. pop()
- 배열 끝 요소를 제거

## Datatype

1. Bytes
- 문자를 저장하는 특수 array
2. String
- 동적크기의 utf-8 로 인코딩된 배열

**
- Solidity 는 문자는 index 를 이용한 접근 불가
- 문자열 처리 함수가 없어 라이브러리 사용 필요
- 해시함수를 이용한 문자열 비교는 가능

```solidity
keccat256(abi.encodePacked(s1)) == keccat256(abi.encodePacked(s2))
```
**

3. Concat 
- 결합함수는 존재함
1. bytes.concat
2. string.conccat