export class Product {
    _id!: string;
    _rev!: String;
    name!: string;
    price!: number;
    imageUrl!: string;
    quantity!: number;
    description!: string;
    type!: string;

    constructor() {
        this.type = "products";// type will be same for all objects
    }

    setData(productObj: any) {
        this.name = productObj.name;
        this.price = productObj.price;
        this.imageUrl = productObj.imageUrl;
        this.quantity = productObj.quantity;
        this.description = productObj.description;

    }
}