class Product {

  constructor(productName){
    this.product = productName;
  }

  getProduct(){
    console.log(this.product);
  }

  addProduct(item){
    this.product += item;
  }
}

const product = new Product("ใในใ");
console.log(product.product);
product.getProduct();
product.addProduct("test");
product.getProduct();