function Showdata(){
    var data=JSON.parse(localStorage.getItem("products"))||[]
data.forEach(function(elem,index){
    var div=document.createElement("div");

    var img=document.createElement("img");
    img.src=elem.image;

    var p1=document.createElement("p");
    p1.innerText="Type :"+elem.type;

    var p2=document.createElement("p");
    p2.innerText="Description :"+elem.desc;

    var p3=document.createElement("p");
p3.innerText="Price :"+elem.price;

var btn=document.createElement("button");
btn.innerText="REMOVE";
btn.addEventListener("click",function(){ 
    Remove(index);
});


div.append(img,p1,p2,p3,btn);

all_products.append(div);

});

}



Showdata();

function Remove(index){
    var data=JSON.parse(localStorage.getItem("products"))||[];
   // console.log(data)
    var newproducts=data.filter(function(el,i){
if(i===index)
{
    var trash=JSON.parse(localStorage.getItem("trash"))||[];
    //console.log(trash)
    trash.push(el);
    localStorage.setItem("trash",JSON.stringify(trash))
}

else{
    return i !==index
}
 });

 localStorage.setItem("products",JSON.stringify(newproducts));
 window.location.reload();
    
}
Showdata();


