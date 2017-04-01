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



### 게시글 등록

* 요청
  * `/board/write/:category`
* 인자
  * if :category is 0
    * title: String
    * content: String
    * category: 0
    * nickname: String // if (null) 익명
  * if :category is 1
    * title: String
    * content: String
    * category: 1
    * nickname: String // if (null) 익명
* 반환값
  * 등록 성공 `{"success": true}`
  * 등록 실패 `{"success": false}



### 게시글 보기

* 요청

  * `/board/all/`
  * `/board/view/:category`

* 인자

  * `/board/all`
    * 없음
  * `/board/view/:category`
    * if :category is 0
      * print document what category is 0
    * if :category is 1
      * print document what category is 1

* 반환값

  * ```Json
    {
        "_id": "58dfbfaac8f2e90681da8394",
        "title": "제목",
        "category": 0, // 0 or 1
        "content": "내용",
        "__v": 0
    }
    ```

