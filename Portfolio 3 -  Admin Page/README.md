# 숙제 설명

(▼ PC사이즈)

![](https://velog.velcdn.com/images/gil0127/post/165847fc-6b42-4dbd-a684-fcf83c8e08b4/image.png)

(▼ 모바일 사이즈)

![](https://velog.velcdn.com/images/gil0127/post/bf9dce64-bf02-471a-bfe3-e797de6cbdbc/image.png)▲ 다음과 같은 레이아웃을 만들어봅시다



- Bootstrap 쓰든 말든 상관없습니다. 저는 귀찮아서 쓸 것임 

- 아이콘 따로 구하기 귀찮으니 Bootstrap에 있는 Icon 또는 Font Awesome을 이용합니다.

- 실력향상을 원하시는 분들은 Bootstrap 설치하지말고 col, row 이런 클래스를 직접 만들어서 사용해보는건 어떨까요. 

----------

![](https://velog.velcdn.com/images/gil0127/post/ee7fa46e-d985-4ea9-9dba-66678c71abb5/image.gif)
**1. 상단 검색바 input은 커서가 찍혀있을시 (focus시) 길이가 서서히 늘어나야합니다.**

- 아무튼 클릭시 width를 키우면 됩니다.


![](https://velog.velcdn.com/images/gil0127/post/5026970b-e235-44cc-9c82-54db33f29724/image.gif)

**2. 좌측 메뉴는 마우스를 올리면 (hover) 이렇게 커집니다.** 

- 일단 사이트가 두개의 세로 선으로 쪼개져야할 것 같습니다. 좌측 40px 정도는 메뉴, 나머지 우측은 내용란이요. 

- 내부 글자들 등장 애니메이션은 알아서 이쁘게 만들어봅시다. 

**3. 차트는 똑같이 만들 필요 없는데 간단하게 Chart.js 라이브러리를 이용합니다.** 

차트 라이브러리인 Chart.js 사용법은 

자바스크립트 몰라도 그냥 예제코드 복붙만 하시면 누구나 사용할 수 있습니다.

 

1) [chartjs.org](https://www.chartjs.org/) 로 들어가면 됩니다.

2) Get started 버튼을 누릅니다.

3) 거기 나오는 예제코드를 html 파일에 붙하시면 됩니다. 


```js
<canvas id="myChart"></canvas>

<script>
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
</script>

```
(저는 필요없는 부분 약간 줄여봤습니다)

4) 하단처럼 생긴 chart.js 라이브러리 설치 파일도 거기서 찾아서 복붙합시다.

그럼 차트 잘 보임

```js
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

```
(아까 복붙한 긴 코드 위에 복붙하셔야합니다)

5) 커스터마이징 하려면
```js
type: 'bar',
```
이라고 되어있는 부분을 line, pie, doughnut 등으로 바꾸면 각각 라인, 파이, 도넛차트를 만들 수 있고 

```js
labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        fill : true,

```

이 부분을 조작하시면 차트안의 데이터와 라벨을 수정가능합니다. 맘대로 바꿔봅시다. 

`fill : true`, 이걸 저처럼 추가하면 라인차트의 경우 하단이 색칠됩니다. 

 

 

 backgroundColor 이런 것도 다른 색으로 바꾸시면 색깔도 수정가능 

아무튼 커스터마이징 하고싶으면 `<script>`태그 안을 눈치껏 수정하면 됩니다. 

실패하면 `ctrl + z` 누르면 되니 맘대로 해보십시오. 

-----------------------

# 나의 시행착오 및 새롭게 배운점

- chart.js 사용법에 대해서 알게 됐다.

1.  레이아웃 사이즈가 줄어들면서, Dashboard 밑의 4개의 박스 컨텐츠들의 내용물들이 점점 밑으로 내려갔다.
![](https://velog.velcdn.com/images/gil0127/post/90bcd8b3-76e9-43b7-bbc5-0131c56a10bf/image.png)

  - 다양한 시도
    - 일단 각각의 박스들은 내부에 flex로 정렬되있다. 그리고 %로 일정량의 패딩과 마진이 넣어져있는 상황이었는데, 정확한 문제 파악을 위해 패딩과 마진을 0으로 만들고 사태 파악에 나섰다.
      - 아무래도, 패딩과 마진으로 내용물들의 위치를 잡는 것은 그 특정한 레이아웃에 한해서만 좋은 위치가 나오기 때문에, 1000px이나 1200px 같은 다른 레이아웃에서는 원하는 결과가 안 나오는 것같았다. 앞으로는 가능하면, 마진과 패딩을 사용을 최소화하고, flex를 이용해서 내용물들을 정렬해야겠다.
    ![](https://velog.velcdn.com/images/gil0127/post/c36fe9fc-09d2-4dcd-84ed-d51f879f49e1/image.PNG)
    ```js
	  <div class="card-itag">
              <i class="fa-solid fa-dollar-sign card-right"></i>
            </div>
	```
    => 이렇게 해서 세로로 가운데 정렬시키고, 반응형 레이아웃 테스트 해본 결과, 잘 됐다. 
  
2. Dashboard를 구성하는 h1 영역이 밑의 박스들에 의해서 침범당하고 있다.
    - 다양한 시도 
      - 이 문제는 조금 당황스러운게, 맥북 크롬에서는 아무 문제가 발생하지 않는데, 윈도우 환경에서는 이런 문제가 발생한다.
      - 아무튼, 문제 해결을 위해 `margin: 0;`으로 주었다.

3. Tasks들의 숫자들을 가운데 정렬시키고 싶은데, padding으로 가운데 정렬시키면, PC 사이즈 레이아웃에서도 숫자들의 위치가 다른 곳으로 밀려나간다.
![](https://velog.velcdn.com/images/gil0127/post/d6c51cf9-07b0-4a2a-b547-ee882244a4e0/image.PNG)
  - 해결방안
    - 이 문제 역시도 상단의 4개의 card들 안의 i 태그를 정렬시켰던 방식과 동일하게 flex와 `align-items: center;`를 사용해서 해결할 수 있었다.
