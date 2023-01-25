"use strict";

window.addEventListener("DOMContentLoaded",
    function(){

        if(typeof localStorage === "undefined"){
            window.alert("このブラウザはLocal Storage機能が実装されていません");
            return;
        }else{
            viewStorage();
            SaveLocalStorage();
            delLocalStorage();
            selectTable();
            allClearLocalStorage();
        }
    },false
);

function SaveLocalStorage(){
    const save = document.getElementById("save");
    save.addEventListener("click",
        function(e){
        e.preventDefault();
            const key = document.getElementById("textKey").value;
            const value = document.getElementById("textMemo").value;

        if (key=="" || value==""){
            Swal.fire({
                title: "Memo app"
               ,html:"Key、Memoはいずれも必須です。"
               ,type:"error"
               ,allowOutsideClick:false
            });
            return;
        }else{
            let w_msg = "localStorageに\r\n「"+key+" "+value+"」\r\nを保存しますか。";
            Swal.fire({
                title:"Memo app"
               ,html:w_msg
               ,type:"question"
               ,showCancelButton:true
                }).then(function(result){
                    if(result.value === true){
                        localStorage.setItem(key,value);
                        viewStorage();
                        let w_msg = "LocalStorageに" +key+ " " +value+ "を保存しました。";
                        Swal.fire({
                            title:"Memo app"
                            ,html:w_msg
                            ,type:"success"
                            ,allowOutsideClick:false
                        });
                        document.getElementById("textKey").value = "";
                        document.getElementById("textMemo").value = "";
                    }
                })
        }
    });
};



function delLocalStorage(){
    const del = document.getElementById("del");
    del.addEventListener("click",
        function(e){
            e.preventDefault();
            const chkbox1 = document.getElementsByName("chkbox1");
            const table1 = document.getElementById("table1");
            let w_cnt = 0;
            w_cnt = selectCheckBox("del");

            if(w_cnt >= 1){
                let w_1 = "LocalStorageから選択されている"+ w_cnt +"件を削除しますか。";
                Swal.fire({
                    title:"Memo app"
                   ,html:w_1
                   ,type:"question"
                   ,showCancelButton:true
                    }).then(function(result){
                        if(result.value === true){
                            for(let i=0;i<chkbox1.length;i++){
                                if(chkbox1[i].checked){
                                    localStorage.removeItem(table1.rows[i+1].cells[1].firstChild.data);
                                    let w_msg = "LocalStorageから" + w_cnt + "件を削除しました。";
                                    Swal.fire({
                                        title:"Memo app"
                                        ,html:w_msg
                                        ,type:"success"
                                        ,allowOutsideClick:false
                                    });
                                    document.getElementById("textKey").value = "";
                                    document.getElementById("textMemo").value = ""; 
                                }
                            }
                            viewStorage(); // 再表示   
                        }
                    });
                }
        });
};

function allClearLocalStorage(){
    const allClear = document.getElementById("allClear");
    allClear.addEventListener("click",
        function(e){
            e.preventDefault();
            let w_2 = "LocalStorageのデータを全て削除します。\r\nよろしいでしょうか。";
            Swal.fire({
                title:"Memo app"
               ,html:w_2
               ,type:"question"
               ,showCancelButton:true
                }).then(function(result){
                    if(result.value === true){
                    localStorage.clear();
                    viewStorage();
                    let w_3 = "LocalStorageのデータを全て削除しました。";
                    Swal.fire({
                        title:"Memo app"
                       ,html:w_3
                       ,type:"success"
                       ,allowOutsideClick:false
                    });
                    document.getElementById("textKey").value = "";
                    document.getElementById("textMemo").value = ""; 
                }
            });
        }
    );
};


function selectTable(){
    const select = document.getElementById("select");
    select.addEventListener("click",
        function(e){
            e.preventDefault;
            selectCheckBox("select");
        },false
    );
    };


    function selectCheckBox(mode){
        // let w_sel="0";
        let w_cnt = 0;
        const chkbox1 = document.getElementsByName("chkbox1");
        const table1 = document.getElementById("table1");
        let w_textKey = "";
        let w_textMemo = "";
        
        for(let i=0;i<chkbox1.length;i++){
            if(chkbox1[i].checked){
                if(w_cnt === 0){
                    w_textKey = table1.rows[i+1].cells[1].firstChild.data;
                    w_textMemo = table1.rows[i+1].cells[2].firstChild.data;
//                    document.getElementById("textKey").value = table1.rows[i+1].cells[1].firstChild.data;
//                    document.getElementById("textMemo").value = table1.rows[i+1].cells[2].firstChild.data;
//                    return w_sel = "1"; 
            }
            w_cnt++;
        }
    }

    document.getElementById("textKey").value = w_textKey;
    document.getElementById("textMemo").value = w_textMemo;

    if(mode==="select"){
        if(w_cnt===1){
            return w_cnt;
        }else{
            let w_4 = "一つ選択してください。";
            Swal.fire({
                title:"Memo app"
               ,html:w_4
               ,type:"error"
               ,allowOutsideClick:false
            });
            document.getElementById("textKey").value = "";
            document.getElementById("textMemo").value = ""; 
        }
    }

    if(mode==="del"){
        if(w_cnt>=1){
            return w_cnt;
        }else{
            let w_5 = "一つ以上選択してください。";
            Swal.fire({
                title:"Memo app"
               ,html:w_5
               ,type:"error"
               ,allowOutsideClick:false
            });
            document.getElementById("textKey").value = "";
            document.getElementById("textMemo").value = ""; 
        }
    }
};

function viewStorage(){
    const list = document.getElementById("list");
    while(list.rows[0]) list.deleteRow(0);
    for(let i=0;i<localStorage.length;i++){
        let w_key = localStorage.key(i);

        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td"); 
        let td3 = document.createElement("td");
        list.appendChild(tr);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        td1.innerHTML = "<input name='chkbox1' type='checkbox'>";
        td2.innerHTML = w_key;
        td3.innerHTML = localStorage.getItem(w_key);
    }

    $("#table1").tablesorter({
        sortList:[[1,0]]
    });

    $("#table1").trigger("update");
};