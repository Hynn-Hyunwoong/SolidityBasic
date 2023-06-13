## Storage vs Memory

Solidity 의 변수는 Storage, memory 두곳에 저장됨


### Storage

1. BlockChain 에 영구저장
2. SmartContract 내/외부에 저장 ** 접근제어자에 따라 제한될 수 있음(Public, Private)
3. 모든 전역변수는 Storage에 저장

### Memory
1. BlockChain 에 기록되지 않음
2. 함수내에서 정의하고, memory에 저장
3. 함수 완료시 소멸됨
4. 함수 실행중에만 존재하므로 외부접근불가 

## 변수의 선언

### Type1 
다른 변수에 비해 GasFee 가 낮음

1. Constant
- Compile Time 에 고정되어 Runtime 에서 수정불가

2. Immutable
- 생성자에서 한번 수정가능 



### Type2 

1. Public
- 전체접근 가능
2. Internal
- 상속된 Contract에서 접근
3. private
- Contract내부에서만 동작 

** Private와 같은 경우 변수명에 "_"로 시작

### Basic DataTpye(Solidity Only)

1. Address

- 20byte 
- 40자, 16진수 string

2. address payable
- address payable have a transfer & send

3. Bytes
글자
1~32 , static bytes1~32
dynamic bytes

4. int 
음수를 포함한 숫자
1~256
static int1~256
dynamic int (256)

5. uint
음수를 제외한 숫자 1~256(bits)