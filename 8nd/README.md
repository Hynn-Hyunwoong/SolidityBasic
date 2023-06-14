# Referencec Type - Struct

## Strct

```solidity
struct UserInfo {
    address user;
    uint balance; 
    uint lastUpdateTime;
}
```

TypeScript 의 Interface와 유사
== 구조쳋

1. Mapping, Array의 값으로 Struct 사용가능
- ex) mapping (address => UserInfo) userInfos;
userInfo[] userInfos;

2. Struct의 내부 값으로 Array, Mapping 사용가능
- ex) Struct UserInfo {
    address [] tokens;
    mapping(address => uint) tokenBalance;
    uint lastUpdateTime;
}