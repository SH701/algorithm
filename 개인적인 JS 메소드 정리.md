# [JS] 코딩테스트 필수 메서드 33가지 정리 (Array & String)

코딩테스트에서 빈번하게 사용되는 자바스크립트의 핵심 메서드 33가지를 정리했습니다. 이 메서드들만 숙달해도 구현 속도가 2배는 빨라집니다.

---

## 1. 배열 (Array) 메서드

### 기초: 요소 추가 및 제거
* **`push()`**: 배열 끝에 요소 추가
* **`pop()`**: 배열 끝 요소 제거
* **`unshift()`**: 배열 앞에 요소 추가
* **`shift()`**: 배열 앞 요소 제거

### 중간: 조작 및 추출
* **`concat()`**: 두 배열 합치기
* **`slice(start, end)`**: 배열 일부를 복사해 새 배열 반환 (원본 보존)
* **`splice(pos, count, item)`**: 요소 추가·삭제·교체 (원본 수정)
* **`reverse()`**: 배열 순서 뒤집기
* **`join(separator)`**: 배열을 문자열로 합치기

### 고급: 고차 함수 (반복 및 조건)
* **`forEach()`**: 각 요소에 대해 콜백 실행 (반환값 없음)
* **`map()`**: 각 요소를 변환해 새 배열 반환
* **`filter()`**: 조건에 맞는 요소만 추출
* **`reduce((acc, cur) => ..., initial)`**: 누적값 계산 (합계, 최댓값 등)
* **`sort()`**: 배열 정렬 (숫자 정렬 시 `(a, b) => a - b` 필수)

### 검색 및 검사
* **`find()` / `findIndex()`**: 조건을 만족하는 첫 번째 요소 혹은 인덱스 반환
* **`some()` / `every()`**: 하나라도 만족하는지 / 모두 만족하는지 확인 (boolean)
* **`includes()`**: 특정 값 포함 여부 확인
* **`indexOf()`**: 특정 값의 첫 번째 인덱스 반환

---

## 2. 문자열 (String) 메서드

### 치환 및 변환
* **`split(separator)`**: 문자열을 배열로 분리
* **`replace()` / `replaceAll()`**: 특정 문자열 치환
* **`toUpperCase()` / `toLowerCase()`**: 대소문자 변환
* **`repeat(n)`**: 문자열 n번 반복

### 공백 및 부분 추출
* **`trim()` / `trimStart()` / `trimEnd()`**: 공백 제거
* **`substring(start, end)`**: 문자열 일부 추출
* **`charAt(index)`**: 특정 위치의 문자 반환

### 검색 및 배열화
* **`includes()`**: 특정 문자 포함 여부
* **`Array.from(str)` / `[...str]`**: 문자열을 문자 배열로 변환

---

## 3. 원본 변경 여부 체크 (중요!)

코딩테스트 버그의 주범입니다. 메서드가 원본 배열을 바꾸는지 반드시 확인하세요.

| 구분 | 메서드 종류 |
| :--- | :--- |
| **원본 변경 (Mutable)** | `push`, `pop`, `shift`, `unshift`, `splice`, `sort`, `reverse` |
| **원본 보존 (Immutable)** | `concat`, `slice`, `map`, `filter`, `reduce`, `find`, `includes`, `join`, `split` |

---

## 💡 활용 예시: `split()` + `join()`

문자열의 구분자를 한 번에 바꿀 때 매우 유용합니다.

```javascript
const text = "1-2-3-4";
const result = text.split("-").join(","); // "1,2,3,4"
