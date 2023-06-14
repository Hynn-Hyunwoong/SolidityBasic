# DataType for Mapping

```solidity
mapping (address => uint) public balances 
-----------------------------------------
Type.    Key => value     접근제어  매핑명
```

- 키에는 기본 타입 선언 가능
- 변수값에는 기본+참조 타입 사용가능
- 배열과 다르게 length 처럼 전체반복 불가, 상태변수로만 
- 키는 실제 저장안됨 / keccak256 해시 값이 검색에 사용
- 매핑에 key에 delete 적용시 쌍으로 연결된 값도 삭제

