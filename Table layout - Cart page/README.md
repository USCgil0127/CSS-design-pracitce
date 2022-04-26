다음 시간까지 위 레이아웃을 만들어오십시오 

셀 합치기 이런게 필요할 수 있는데 안배운건 당연히 구글에 검색해봐야합니다. 

![](https://velog.velcdn.com/images/gil0127/post/88855d2c-328a-459c-9667-38a5b195c296/image.png)

### vertical-align 속성을 실험해볼 이미지와 글자

```js
<div> <img src="https://mdn.mozillademos.org/files/12245/frame_image.svg" width="32" height="32"> image with a default alignment.</div> 

```

### 기본적인 table HTML 구성 

```js
<table>
  <thead></thead>
  <tbody>
    <tr>
      <td>내용</td>
      <td>내용</td>
    </tr>
  </tbody>
</table>

```

table태그 내에 tr은 row, td는 column을 의미합니다. 

내가 원하는 만큼 row, column을 넣어주면 표가 완성됩니다. 

tbody, thead는 그냥 헤드부분 영역구분을 위해 사용하며 td 대신 th 태그를 사용하면 기본적으로 제목처럼 굵게 처리됩니다. 

### 테이블 셀 내에서 상하정렬할 땐 vertical-align

```js
td, th {
  vertical-align : middle;
}

```

vertical-align 속성을 이용해 테이블 내에서의 상하정렬을 하실 수 있습니다.

top, bottom, middle 사용가능

### inline 요소 간 상하정렬할 땐 vertical-align 

```js
<p>
  <span style="font-size : 50px">Greetings</span>   
<span style="font-size : 20px">안녕</span>
</p>

```

`display : inline;` 혹은 `inline-block` 요소들을 나란히 배치하면 상하정렬이 이상한 경우가 있습니다.

특히 큰 이미지와 글,

또는 큰 글씨옆에 있는 작은 글씨

이런걸 나란히 배치했을 때 서로 높이가 맞지 않는 경우가 많은데

이럴 때 margin-top 이런거 대신 쓰는 속성입니다.

위의 예제에서 `<span>안녕</span>` 여기에 `vertical-align : top;` 이런거 넣어서 실험해보십시오. 

 

top, middle, bottom 말고도 super, sub, px 단위로 사용가능합니다. 

(table 안에선 top, middle, bottom만 사용가능합니다)


### display : table

```js
.box {
  display : table;
  display : table-row;
  display : table-cell;
}

```

가끔 div로 이루어진 요소들을 테이블화 시키고 싶을 때가 있습니다

그럴 땐 table태그로 변하길 원하는 요소에 display : table을 적어주신 뒤에

tr로 변하길 원하는 요소엔 display : table-row,

td로 변하길 원하는 요소엔 display : table-cell 을 넣어주면 됩니다. 

하지만 그럴 일은 거의 없기 때문에 참고로만 알아둡시다. 

-----------------


