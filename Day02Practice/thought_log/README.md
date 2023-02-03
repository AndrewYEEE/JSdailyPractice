# Day2: A Simple React App - "Thought Log"
## Getting Started



### How to use?
```
npm i
npm start
```
![finish1](./img/finish.jpg)


---

主要觀念:
* React Form Component的邏輯操作
* React Function Component的邏輯操作
* 透過父元件整合map功能取得index一並傳入children，就不用煩惱指定對象是誰:
    ```
    let thoughts = (
        <div>
            {
                thoughtList.map((thought, index) => {
                return <Thought 
                    key={"item:"+index}
                    content = {thought.content}
                    time = {thought.time}
                    clickHandle = {()=>deleteThoughtHandler(index)}
                />
                }).reverse() //reversing the array so the latest post shows first
            }  
        </div> 
    ); //純JSX寫法，以()內包<div>運作
    ```
*善用 event.preventDefault() 防止瀏覽器執行form submit時因預設功能而跳轉或刷新頁面。


HTML特性:
* Img Alt: 圖片失效的時候，Alt替代文字可以描述圖像的內容
    ```
    Img Title：作為圖片標題，用來標示圖片說明文字，當滑鼠移到圖片上就會顯示出來。
    Img Alt：作為圖片替代文字，用來描述圖片內容，當圖片失效時才會顯示
    ```

* Input placeholder: 該屬性可在文字框中顯示提示訊息，可用於以下<input> 的類型：text, search, url, telephone, email 以及 password。
```
<input 
    type="text"
    placeholder="Type Something..."/>
```