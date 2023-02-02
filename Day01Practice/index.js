let container = document.querySelector(".container");
let gridButtom = document.getElementById("submit-grid");
let clearGridButton=document.getElementById("clear-grid");
let gridWidth = document.getElementById("width-range");
let gridHeight = document.getElementById("height-range");
let colorButton = document.getElementById("color-input");
let eraseBtn = document.getElementById("erase-btn");
let paintBtn = document.getElementById("paint-btn");
let widthValue = document.getElementById("width-value");
let heightValue = document.getElementById("height-value");



let events = {
    mouse: {
        down: "mousedown", // key : eventname
        move: "mousemove",
        up: "mouseup",
    },
    touch: {
        down: "touchstart",
        mobe: "touchmove",
        up: "touchend",
    }
}

let deviceType = "";
let draw = false;
let erase = false;

const isTouchDevice = () => { //如果能建立Touch事件，則將deviceType設為"touch"
    try{
        document.createEvent("TouchEvent"); //create a event
        deviceType="touch";
        return true;
    }catch (e) {
        deviceType="mouse";
        return false;
    }
}


isTouchDevice(); //create event;

gridButtom.addEventListener("click",()=>{
    container.innerHTML=""; //清空畫布
    let count = 0;
    for(let i=0; i< gridHeight.value; i++){ //取得gridHeight input值 (高)
        count +=2;
        let div = document.createElement("div");  //???
        div.classList.add("gridRow");  //classList.add 是為元素添加 class的寫法

        for (let j=0;j < gridWidth.value;j++){ //取得gridWidth input值 (寬)
            count +=2;
            let col = document.createElement("div"); //建立一個col格子
            col.classList.add("gridCol"); //為劃格添加 class
            col.setAttribute("id", `gridCol${count}`); //為劃格添加ID //setAttribute(name, value)
            col.addEventListener(events[deviceType].down, ()=>{ //為劃格添加mousedown事件
                draw=true;
                if(erase){  
                    col.style.backgroundColor = "transparent"; //如果erase啟用則將該畫格設成透明
                }else{
                    col.style.backgroundColor = colorButton.value; //如果erase不啟用則將該畫格設成指定顏色
                }
            });

            col.addEventListener(events[deviceType].move, (e)=>{  //為劃格添加mousemove事件
                let elementId = document.elementFromPoint( 
                    !isTouchDevice()?e.clientX: e.touches[0].clientX,
                    !isTouchDevice()?e.clientY:e.touches[0].clientY,
                );//根據坐標獲得元素，可用於觸屏設備上獲取當前點擊元素的名稱
                checker(elementId.id);
            });

            col.addEventListener(events[deviceType].up, ()=>{ //為劃格添加mouseup事件
                draw = false;
            })

            div.appendChild(col); //將劃格加入div

        }

        container.appendChild(div);//加入包含整列col的div
    }
});

function checker(elementId){
    let gridColumns = document.querySelectorAll(".gridCol"); //取得所有classname = "gridCol"的元素
    gridColumns.forEach((element)=>{
        if(elementId==element.id){
            if (draw&&!erase){
                element.style.backgroundColor= colorButton.value;
            }else if (draw && erase){
                element.style.backgroundColor= "transparent";
            }else{
                //do nothing....
            }
        }
    });
}


clearGridButton.addEventListener("click",()=>{
    container.innerHTML="";
});

eraseBtn.addEventListener("click",()=>{
    erase = true;
});
paintBtn.addEventListener("click",()=>{
    erase = false;
});
gridWidth.addEventListener("input",()=>{
    widthValue.innerHTML=gridWidth.value < 9 ? `0${gridWidth.value}`: gridWidth.value;
});
gridHeight.addEventListener("input",()=>{
    heightValue.innerHTML=gridHeight.value < 9 ? `0${gridHeight.value}`: gridHeight.value;
});

window.onload = () =>{
    gridHeight.value = 0;
    gridWidth.value = 0;
} //用於在網頁加載完成後立刻執行的操作

