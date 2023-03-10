# Day1 - Pixel Art Generator

## How to use?

Type your file path to search bar and enjoy!
![finish](img/finish.jpg)

---
html相關:
* input: type="color"、"range"
* label、input、snap組合

JS相關:
* input輸入取值採用"input"事件 (addListener("input",()=>{}))
* document.querySelectorAll(".classname"); 可以取得所有該classname的元素
* element.classList.add("gridCol"); //為element添加 classname
* container.innerHTML=""; //清空container內容
* container.appendChild(element); //將element加入container
* window.onload=()=>{}方法用於在網頁加載完成後立刻執行的操作
* element.style.attribute  為element添加style屬性 (css屬性) ex: col.style.backgroundColor = xxx ;  

css相關:
* padding屬性 : 內距
    ```
    padding:上 右 下 左;　
    padding:上下 左右;　
    padding:上 左右 下;　
    padding:全;
    ```

* margin屬性 : 定義一個區域（例如 DIV 或 span）的外邊界距離。俗稱外距，與常用的 padding（內距）剛好不同。
    ```
    margin:上 右 下 左;　
    margin:上下 左右;　
    margin:上 左右 下;　
    margin:全;
    ```

* box-sizing : 控制 width 與 height 作用的對象空間
    ```
    box-sizing: content-box; //(default) 寬高設定作用在內容(content)範圍
    box-sizing: border-box;  //寬高設定作用包含邊框外緣(boder)的範圍
    ```

    ![box-sizing](img/box-sizing1.jpg)
    
    content-box效果 & border-box效果:
    ![box-sizing](img/box-sizing2.jpg)

* width、height: 長、寬
    ```
    width: px
    width: %
    width: vh  //代表的是view height，也就是螢幕可視範圍高度的百分比
    width: vw  //vw表示的是view width，也就是螢幕可是範圍寬度的百分比
    width: vmin、vmax //抓取「長或寬較小/較大的那個的百分比」
    ```

* Top 、Right 、Bottom 、Left 4個 CSS 屬性是搭配 position 一起使用
    ```
    position: static;
    position: fixed;
    position: relative;
    position: absolute;
    ```

    ![position](img/position1.jpg)

* display: 控制元素的佈局規則
    ```
    display: [Outer] [Inner]
    [Outer]: inline、block
    [Inner]: flow、flow layout、flow root、flex、grid
    ```

    ![display](img/display1.jpg)
    ![display2](img/display2.jpg)

* display: flex 隨著網頁縮放去改變比例
    ```
    * flex-wrap: nowrap | wrap | wrap-reverse; //告訴它能不能換行，因為flex的預設是不換行
    * flex-direction: row | row-reverse | column | column-reverse; //(row為預設值，由左至右，從上到下)
    * flex-flow: column wrap; (同時設定flex-direction和flex-wrap)
    * justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;
    * align-item: stretch | flex-start | flex-end | center | baseline; //和jusitfy-content的用法類似，但它是用來控制「垂直對齊」的位置
    * align-content: stretch | flex-start | flex-end | center | space-around | space-between | space-evenly;
    * align-self: stretch | flex-start | flex-end | center | baseline; //和align-item的功能一樣，但它是針對「單一」對象
    * order //重新定義內元件的排列順序
    * flex  //flex-grow、flex-shink、flex-basis的縮寫
    ```

    以下只特別顯示justify-content特性差異:
    ![flex1](img/flex1.jpg)

* gap : 網隔間細，用來控制網格間的距離，網格來源包含flex、grid、muti-column。
    ```
    gap: all;
    gap: row-gap column-gap;
    ```
    ![gap1](img/gap1.jpg)

* keyframes CSS3動畫圖像
    基本參數:
    ```
    @keyframes : 建立規則
    animation : 指定元素啟用規則實現動畫

    注意: 不同瀏覽器需使用不同前綴， -webkit- for chrome/safari， -moz- for Firefox
    ```

    範例:
    ```
    div
    {
        width:100px;
        height:100px;
        background:red;
        position:relative;
        animation:myfirst 5s;
        -webkit-animation:myfirst 5s; /* Safari and Chrome */
    }

    @keyframes myfirst
    {
        0%   {background:red; left:0px; top:0px;}
        25%  {background:yellow; left:200px; top:0px;}
        50%  {background:blue; left:200px; top:200px;}
        75%  {background:green; left:0px; top:200px;}
        100% {background:red; left:0px; top:0px;}
    }

    @-webkit-keyframes myfirst /* Safari and Chrome */
    {
        0%   {background:red; left:0px; top:0px;}
        25%  {background:yellow; left:200px; top:0px;}
        50%  {background:blue; left:200px; top:200px;}
        75%  {background:green; left:0px; top:200px;}
        100% {background:red; left:0px; top:0px;}
    }
    ```

