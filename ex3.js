const obj ={
    id:1,
    name:"sok",
    add : {
        st:"123 main",
        city:"pp"
    }
}
let {id,name,add:{st,city}}= obj;

console.log(st,city);