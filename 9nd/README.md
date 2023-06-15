# Payable

Ethereum 전송할 때 사용(NativeToken)

## Payable keywoard

1. payable 
- 주소형(address), 함수(function) 에 사용가능
1. address payable
    - transfer & send 를 사용하여 native-token 전송가능
2. function a() payable{}
    - 함수 호출과 함께 native-token 전송가능
3. msg.value, msg.sender
    - msg.sender : 호출 메시지 발신자
    - msg.value : 전송된 native-token 갯수(wei)



2. send
- payable(address).send(uint256 amount)
- 성공시 true, 실패시 false 반환 (성공시 2300wei gas)

3. Call
- payable(address).transfer(uint256 amount)
- 실패시 transaction 실패 (성공시 2300wei gas)

4. Transfer
- (address).call(byte memory)
- 주어진 bytes 대로 저수준 Call 실행
- 성공 시 true, 실패시 false
- 가스 사용제한 없음( Re-entrancy attach 위험존재)

5. Fallback
6. receive
