 # Solidity 전역 

 1. Ether Units
- 1 wei = 1
1 gwei == 1e9
1 ether =1e18

 2. Time units

- 1 seconds
- 1 minutes == 60 seconds
- 1 hours == 60minutes
- 1 days = 24 hours
- 1 weeks == 7 days

 3. Message data

- msg.data(bytes calldata)
    완전한 calldata 변수
    function methodId, parameter info
- msg.sender(address)
    함수를 호출한 caller address
- msg.sig(bytes4)
    함수의 시그니처
    함수명과 매개변수 타입을 sha3 암호화하여 나온 결과값 앞의 4바이트
- msg.value(uint)
    msg와 함께 전달되는 eth의 수량

 4. Block Data

 - blockhash(uint blockNumber) returns (bytes32) - 인자로 받은 blockNumber가 최근 256 블록 중 하나일 경우 반환
 - block.basefee(uint) - 현재 블록 수수료
 - block.chainid(uint) - 현재 체인 id
 - block.coinbase(address payable) - 현재 블록채굴자의 주소
 - block.difficulty(uint) -현재블록난이도
 - block.gaslimit(uint) - 현재 블록 가스 제한
 - block.number(uint) - 현재 블록 넘버
 - block.timestamp(uint) - 블록 타임스탬프(유닉스)

 5. Transaction Data
 - tx.gasprice(uint) - transaction 의 가스가격
 - tx.origin(address) - 최초 tx발생시킨 address
    ex) A(user) -> B(Contract) -> C(Contract)
    1. C의 msg.sender(B)
    2. C의 tx.origin(A)


# 연산자

1. Bit 연산자

- x << y  // x * 2 ** y
왼쪽으로 비트 시프트 

- x >> y. // x /2 **y
오른쪽으로 비트 시프트

- 비트 and &
비트가 같을때 1

- 비트 XOR ^
비트가 다를 때 1

- 비트 OR |
둘다 0일때 제외 1

비트 NOT ~
0은 1로, 1은 0으로


2. 할당 연산자

- a = b // a = b
- a |= b // a = a | b
- a^= b // a = a^b
- a &= b // a = a&b
- a <<= b // a = a << b
- a >>= b // a = a >> b
- a += b// a = a+b
- a -= b // a = a-b
- a *= b // a * b
- a /= b // a = a/b
- a &= b // a = a % b

