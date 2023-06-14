# Solidity Error Handling

기존의 JavaScript 처럼 try&catch 문을 사용하지 않음
함수 실행시 비용이 발생하는 것에 대해 일부 소모되는 가스비용을 돌려줌

1. Assert
- Type false
- 내부적 오류를 캐치함 (0으로 나누기, 잘못된 array index acccess)
- 괄호에 논리연산을 넣어 false 발생시 assert 발동

2. Revert
- Type Message 
- Transaction 실패 발동시킨 후 message 출력
- revert 만으로는 조건 판단이 불가함으로 조건문(if)와 같이 사용

3. Require
- Revert 와 if 의 조합 버전
- ㅊ첫 인자에 논리연산 삽입 후 false 발생시 트랜잭션 실패 후 메시지 출력

4. Try & catch

- 오류가 발생해도 실패시키지 않고 catch 문에서 조치함
1. 함수 내 정의
2. 함수를 외부에서 호출시, Instance 화 과정에서 적용
3. try/catch 내부에서 오류시 트랜잭션 실패

- Try
- Catch Error
1. revert
2. require

- Catch Panic
1. assert

- catch
1. Error & panic 에서 잡지못한 오류 catch

** Solidity 에서는 엄격한 테스트코드를 적용함으로 try & catch 대체가능
