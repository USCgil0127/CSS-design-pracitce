## 완성본

![](https://velog.velcdn.com/images/gil0127/post/2fb0f411-b61a-4a9d-b151-9df96cbf97a8/image.gif)


움직이는 캐릭터들을 클릭하면, 사라지게 하는 페이지를 만들어보았다.

## 새롭게 배운점

### "즉시 실행 익명함수"로 전역 변수 사용 줄이기 

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

### 이벤트 발생을 멈추고 싶을떄, CSS에서 처리법 => `pointer-events: none;`

```css

img{
    height: 80%;
    pointer-events: none;
}

```

예를 들어서,

script에서 img 태그는 클릭 이벤트를 안 받고 싶다면,

`pointer-events: none;`  을 넣어주면 된다.

### data-value와 dataset 사용법

```js

<div class="btn-container">
        <div class="btn" data-value="1">
          <img src="/images/ilbuni_3.png" alt="" class="one" />
          <span>일분이 1</span>
        </div>

        <div class="btn" data-value="2">
          <img src="/images/ilbuni_0.png" alt="" class="two" />
          <span>일분이 2</span>
        </div>

        <div class="btn" data-value="3">
          <img src="/images/ilbuni_1.png" alt="" class="three" />
          <span>일분이 3</span>
        </div>
 </div>

```

```js

 <script>

    (function(){
        const btn_container = document.querySelector('.btn-container');

    function afterClick(el){
        const nearest_btn = el.target.closest(".btn");
        if(!nearest_btn ) return;

        console.log( event.target.dataset.value );
    }

    btn_container.addEventListener('click', afterClick)
    })();

   

  </script>

```

- `data-value="1"` 로 class처럼 태그에 마킹을 해줄 수있다. 여러 태그가 동일한 value 넘버를 가질 수 있다.

해당 data-value 값을 출력하고 싶을 때는 `event.target.dataset.value` 를 사용하면 `1` 이 출력된다.

- `data-value`는 class처럼 getAttribute('data-value'); 으로도 가져올 수 있다.

- `setAttribute( );` 속성으로 JS에서 class처럼 삽입해줄 수도 있다.

------------------

## 이벤트 위임으로 리펙토링

```js

 (function () {
      const stage = document.querySelector(".container");

      stage.addEventListener("click", function (el) {
        const man = el.target.closest("img");
        if (!man) return;

        man.style.visibility = "hidden";

      });
    })();

```

이벤트 위임으로 리펙토링 해봄!
이미지가 천개가 될 때, 일일히 쿼리 셀렉터를 달아주는 것은 페이지 느려지는 원인이 된다.
그런 상황을 방지하고자 이벤트 위임을 써서, 동일한 기능을 심플하게 구현했다.
