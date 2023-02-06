# Day5: A Simple React App - "Random Person Generator"
## Getting Started

### How to use?
```
npm i
npm start
```
![finish1](./img/finish.jpg)

---
重點觀念:
1. RandomUser API : 使用API取得模擬的用戶資料，藉此可以用來測試一個假的使用者。
    API網址: https://randomuser.me/

2. React中嘗試直接使用state儲存一個JSX的List，JSX特性是如果是List會直接整個渲染。
    ```
    let pictures = data.results.map((person) => {
        return (
            <div>
            <img src={person.picture.large}/> 
            <p>{person.email}</p>
            </div>
        )
    });
    this.setState({ pictures: pictures });
    ```

3. AbortController: 利用此controller控制fetch擷取API的時間
    ```
    async function fetchWithTimeout(resource, options = {}) {
        const { timeout = 8000 } = options;
        
        const controller = new AbortController();
        const id = setTimeout(() => controller.abort(), timeout);
        const response = await fetch(resource, {
            ...options,
            signal: controller.signal  
        });
        clearTimeout(id);
        return response;
    }
    ```
4. 使用display:flex排版


