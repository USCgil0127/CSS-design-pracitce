- 최종 완성본

![](https://velog.velcdn.com/images/gil0127/post/33f932b6-000d-4159-ba9b-d439a0f2b675/image.gif)




--------------

## position: sticky 사용하기


```js

<style>
      .card-box img {
        display: block;
        margin: auto;
        max-width: 80%;
      }

      .card-box {
        position: sticky;
        top: 400px;
        margin-top: 200px;
      }
    </style>
  </head>
  <body>
    <div class="card-background">
      <div class="card-box">
        <img src="img/card1.png" alt="" />
      </div>

      <div class="card-box">
        <img src="img/card2.png" alt="" />
      </div>

      <div class="card-box">
        <img src="img/card3.png" alt="" />
      </div>
      <!-- end of card-background -->
    </div>
</body>

```

이렇게  `position: sticky;`만 줘도,

![](https://velog.velcdn.com/images/gil0127/post/1d92bdb2-c7ab-4dd7-92bc-ffd3a765437c/image.gif)

너무 쉽게 구현이 된다.

--------------

## 스크롤 위치에 따라 opacity가 변하는 애니메이션 만들기


여기서부터가 살짝 까다로운데,

일정 스크롤 위치를 기준으로 이전 이미지가 fade되야한다.

![](https://velog.velcdn.com/images/gil0127/post/cf75fc48-c93e-4572-b60d-53f8138e504e/image.PNG)

여기서 1차 방정식을 사용해야하는데, 2번째 이미지가 등장하는 시점을 650이라고 하면 그때 opacity는 1이다.

그리고 최종적으로 완벽하게 덮히는 시점은 1150이다. 이 때의 opacity는 0이다.

2개의 방정식 그리고 a, b 구해야될 2개의 값!!

2차 방정식을 풀어서 답을 찾아낸 다음에, 

![](https://velog.velcdn.com/images/gil0127/post/ad7e91c5-177a-40b0-996d-9cc49cc265fa/image.svg)

여기에 대입하면 된다.

1 = 650a + b

0 = 1150a + b

그리고 해당 y 값을 opacity에 대입해주면 된다.

-----------

이 원리를 응용하면, fade효과뿐만 아니라, 사이즈를 작게 만드는 것도 가능하다.

- 추가 기능을 덮붙인 완성본

![](https://velog.velcdn.com/images/gil0127/post/5a0ca798-c082-437d-b3f2-791815f783be/image.gif)

width를 최종적으로 90%로 만드는 작업을 했는데, 사라지는 이미지가 제자리에서 작아지게 하고 싶은면, 

 `transform : scale(0.9);`를 사용하면 된다.
 
 -------------
 
 ## 마치며,
 
 학창 시절의 열심히 배웠던 수학들을 사용할 기회가 와서 너무 기쁘다.
