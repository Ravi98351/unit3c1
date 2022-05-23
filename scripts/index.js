//store the products array in localstorage as "products"
function product(t,d,p,i){
    this.type=t;
    this.desc=d;
    this.price=p;
    this.image=i;

}
var data=JSON.parse(localStorage.getItem("Product"))||[];

function storedata(evet){
    evet.preventDefault();

    var type=products.type.value

    var desc=products.desc.value;

    var price=products.price.value;

    var image=products.image.value;

    var everynew=new product(type,desc,price,image);

    data.push(everynew);
    localStorage.setItem("products",JSON.stringify(data))

}
