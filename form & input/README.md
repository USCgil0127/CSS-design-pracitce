숙제 : 다음 시간까지 위의 레이아웃을 만들어오십시오

![](https://velog.velcdn.com/images/gil0127/post/0bf84798-73b4-4318-8a02-beb7baa0dbfa/image.png)


### form은 form 태그로 만들어냅니다.

```js
<form>
  <input>
</form>

```

> input태그는 닫지 않습니다. 

----------

### input의 type

```js
<input type="text">
<input type="email">
<input type="password">
<input type="radio">
<input type="file">
<input type="checkbox">
<input type="submit">
<select>
  <option>옵션1</option>
</select>
<textarea></textarea>

```

10개는 더 있지만 가장 자주 쓰는 것만 모아봤습니다. 

나머지는 필요할 때 구글에 찾아쓰도록 합시다.  

### input에 넣는 속성들

```js
<input placeholder="어쩌구" value="어쩌구" name="age">

```

placeholder는 배경 글자,

value는 미리 입력된 값,

name은 서버 기능개발에 필요한 인풋의 이름을 설정 가능합니다.


### HTML의 속성으로 CSS셀렉터를 사용할 수 있습니다.

```js
input[type=email] {
  color : grey
}

```

input의 type속성이 email인 요소만 찾아서 스타일을 줄 수 있습니다. 

폼에서 특히 유용하게 사용합니다. 

### 전송버튼은 

```js
<button type="submit">전송</button>
<input type="submit">

```

둘 중 하나 쓰시면 됩니다.

그리고 물론 `<form>` 태그 안에 있어야 잘 작동합니다.

----------------

### 시행착오 및 배운점




