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