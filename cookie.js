
// 五秒後執行廣告
document.getElementById("myFull").style.display = "none";
end=5*1000;
function delay(){
  document.getElementById("myFull").style.display = "flex";
}
setTimeout(delay,end);



function adclose() {
  document.getElementById("myFull").style.display = "none";
}
function adgoto() {
  window.open("https://www.npac-weiwuying.org/programs/5e15d0eebe06470008182052", "blank");
}

cookie的增刪改查

// /*select*/
// console.log(document.cookie); //可以看到目前有哪些cookie
// /*insert*/
// document.cookie="watchedAd=no"; //寫入 cookie某變數 watchAd=yes
// /*update*/
// document.cookie="watchedAd=yes"; //再一次覆蓋就好
// /*delete*/
// 指定 N 秒無效的時間 UTC，所以先利用 date()->變數 d->跑出一個無效時間，再轉 UTC 表示法

// let dd = new Date();
// lifeSec = 5; //N=5
// dd.setTime(dd.getTime()+(lifeSec * 1000)); //先get調快時間再塞回set
// 幾秒後刪掉cookie
// dd.toUTCString() <=> "Wed, 24 Jul 2019 09:14:41 GMT" 改成utc時間
// expires 有效時間 若已過期則刪除cookie
// document.cookie="watchedAd=yes;expires="+dd.toUTCString();




// 雖然有很多套件可使用但以下嘗試用js寫方法去查詢cookie是否存在
//查詢cookie是否存在並return
function findCook(name) {
  let ckary = document.cookie.split("; "); //割除分開為array
  let getck = ckary.find(function(e) {
    return name == e.substr(0, name.length); //比對每個開頭名字與長度一致時，第一個就回傳設定為getck
  });
  if (getck != undefined) {
    return getck.split("=")[1];
  }else{
    return false;
  }
 
  // var value = getck.split("="); //將=拿掉分為陣列，第[1]格就是我們的值
  // return value[1];
}


// 第二種方法
// function findCook2(name) {
//   let ckary = document.cookie.split("; "); //根據關鍵字將字串割除分開為 array　，然後轉JSON
//   let objCookie = new Object(); //產生空物件
//   ckary.forEach(e => {
//     let kv = e.split("=");
//     objCookie[kv[0]] = kv[1];
//   });
//   if (name in objCookie) return objCookie[name]; //我們要回傳字串且不可使用 objCookie.name
//   else return false;
// }




//開始指定cookie，有同時有效時間為午夜前
//cookie=>watchedAd的有線期限到23:59:59 =>換新廣告q

let checkAd = findCook("watchedAd");
if (!checkAd) {
  //沒有cookie
  let end = new Date(); //先取得現在，再修改成午夜前的時間(以UTC時區+0為值)
  end.setHours(24), end.setMinutes(59), end.setSeconds(59);
  document.cookie = "watchedAd=yes;expires=" + end.toUTCString();
} else{
  document.getElementById("adFull").remove();
}