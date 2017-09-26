window.onload = function(){
            let table = document.querySelector('tbody');
    console.log(1);
    table.ondblclick = function(e){
        let element = e.target;
        console.log(element.className)
        if(element.nodeName=='TD'){
        let oldv = element.innerHTML;
         element.innerHTML = '';
        let inputs = document.createElement('input');
        inputs.value = oldv;
        element.appendChild(inputs);
        inputs.onblur=function(){
            let newv = this.value;
            element.removeChild(inputs);
            element.innerHTML = newv;
        }
        }else if(element.className=='delbtn'){
            console.log(element)
            let trs = element.parentNode.parentNode;
            table.removeChild(trs);
        }
        }
    let addbtn = document.querySelector('button.addbtn');
    let student = [{name:'zhangsan.萨达',age:'999',sex:'女',class:'wuif1707',tel:123456,address:'山西 运城'},{name:'lisi',age:'888',sex:'女',class:'wuif1707',tel:123456,address:'山西 阳泉'},{name:'wangwu',age:'777',sex:'女',class:'wuif1707',tel:123456,address:'山西 晋城'}];
    console.log(student)
        addbtn.onclick = function(){
            student.forEach((element)=>{
            let addtr = document.createElement('tr')
            addtr.innerHTML = `<td>${element.name}</td>
                <td>${element.age}</td>
                <td>${element.sex}</td>
                <td>${element.class}</td>
                <td>${element.tel}</td>
                <td>${element.address}</td>
                <td><button class="delbtn">删除</button></td>`;
                table.appendChild(addtr);
         })
    }
}