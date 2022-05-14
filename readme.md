바닐라 JS 로 redux 만들기
---
<br/><br/>


>옵저버 패턴:
> --
>상태변화에 대해서 관찰자(observer)가 상태변화를 관찰(observe)하게 하고, 변화가 생길때 마다 관찰자(observer)들에게 변경사항이 있음을 알려주는 것이 옵저버 패턴
![image](https://user-images.githubusercontent.com/46067837/168451568-214dada4-e3b2-47ef-8e40-5b73a02c6888.png)

<br/><br/>

>구현방식
> --
>->옵저버들의 목록을 객체에 등록 <br/>
-> 상태변화 <br/>
->객체가 직접 옵저버에게 통지