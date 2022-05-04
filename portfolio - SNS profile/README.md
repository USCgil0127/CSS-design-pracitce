# 요구사항

### - 웹 사이즈 레이아웃
![](https://velog.velcdn.com/images/gil0127/post/396ffa99-48a0-4ccc-a4f5-70c352a24ee9/image.png)

### - 모바일 사이즈 레이아웃 <br>
![](https://velog.velcdn.com/images/gil0127/post/f93e6634-0277-4955-922a-07aa7fe49d7b/image.png)


-  Bootstrap을 사용해서 제작하자!!

해설도 Bootstrap으로 진행할 예정입니다.

내가 만든 CSS 파일 사용하는건 제약이 없습니다. 

 

 

- 회색 배경색은 #f7f9fc 하늘색은 #6fbaf8 입니다.

- 세로정렬되는 기준 화면폭 (breakpoint) 은 임의로 정하셔도 무방합니다.

- 귀찮으니 아이콘 등은 fontawesome 라이브러리를 이용합니다. 

아니면 Bootstrap 홈페이지 잘 찾아보시면 간단한 Icon 사용도 가능합니다.

----------------

Bootstrap 없이, 연습을 위해 처음부터 다시 만들어봤습니다.

------------------

## 스프린트 진행시, 어려웠던 점

![](https://velog.velcdn.com/images/gil0127/post/fa54841a-2884-4d55-a2a3-3c2c03f18e4c/image.png)

![](https://velog.velcdn.com/images/gil0127/post/bc118bb2-f37a-4c08-b34e-e5ab37587c69/image.png)


필자가 원하는 것은 맨 위 이미지처럼 왼쪽 정렬이 먹히는 것이었는데, 오른쪽 정렬만 먹힐 뿐 왼쪽 정렬은 먹히지 않았다.

=> 문제를 분석해보니까, "서울 마포구", "신입" 등을 담고 있는 p 태그의 크기들이 담고 있는 글자에 따라 크기가 제각각이라서 그렇다. 문제를 해결해보려고,  p 태그 위에 div로 감싸서 그 안에서 왼쪽 정렬도 시도 해봤는데 소용이 없었다.

### 해결방법

현재, Location 쪽과 서울 마포구 쪽 col 두 곳에 flex-grow:1이 적용되있는 상황이다.

그런데, 내가 몰랐던 것은 flex-grow는 박스의 비율을 1:1로 만들어주는 속성이 아니라는 것이다. 박스 안에 내용물을 제외한 여백을 공정하게 1:1로 만들어주는 속성이다.

그렇기 때문에, 2개의 박스가 절반씩 차지하지 못했다.

```
.first {
  flex-grow: 1;
  flex-basis: 0;
}

.second {
  text-align: left;
  flex-basis: 0;
  flex-grow: 1;
}

```

그래서,  flex-basis: 0;를 적용해서 해결했다.

 flex-basis: 0;는 원래 내용물이 점유하는 폭이 0으로 인식이 되면서 정확하게 전체 박스의 너비를 균등하게 맞춰줄 수있다.
 

### 해결방법 2

아직 적용해보지는 않았지만, 각각의 박스를 width: 50%로 주고, 왼쪽 정렬을 먹여보는 것이다. 
