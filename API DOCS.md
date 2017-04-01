# RESPECTYO API DOCS

##### 모든 요청은 POST로 이루어집니다.

### 등록

* 요청
  * `/register`
* 인자
  * age: int 
    * 10, 20, 30, 40, 50...
  * gender: int
    * man is 0, woman. is 1
  * nickname: String
    * unique
* 반환값
  * 등록 성공 `{"success": true}`
  * 등록 실패 `{"success": false}`