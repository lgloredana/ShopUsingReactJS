class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    };

    // Getter
    name() {
        return this.name;
    }
    price() {
        return this.price;
    }
  
}
export default Product;