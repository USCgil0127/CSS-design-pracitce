## 완성본

![](https://velog.velcdn.com/images/gil0127/post/2fb0f411-b61a-4a9d-b151-9df96cbf97a8/image.gif)


움직이는 캐릭터들을 클릭하면, 사라지게 하는 페이지를 만들어보았다.

## 새롭게 배운점

- 먼저 DOM을 작성할 때, 전역변수를 최대한 사용하지 말자는 취지에서 익명 함수 안에 모든 script를 작성하기 시작했다.

```js

<script>
    (function () {
      const tg = document.querySelectorAll("img");

      for (let i = 0; i < tg.length; i++) {
        tg[i].addEventListener("click", function () {
        //   this.style.display = "none";
          this.style.visibility = "hidden";
        });
      }
    })();
</script>

```

`( 함수(){ ... } )();` 이런 식으로 익명함수를 즉시 실행 시키면, 변수들은 함수 내에서 활용되고 사라지기 때문에, 동료들의 script 파일을 합치더라도, 동일한 tg라는 변수가 등장했을 때, 충돌할 일이 없다.
