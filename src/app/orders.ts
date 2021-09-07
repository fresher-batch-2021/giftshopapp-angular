import { Product } from "./product";

export class Orders {
    _id!:string;
    _rev!:string;
    name!: string;
    email!:string;
    address!: string;
    phonenumber!:number;
    type!: string;
    products!: Product[];
    payment!: string;
    totalAmount!:number;
    status!:string;
    comments!: string;
    orderedDate!:string;
    createdDate!:string;
    modifiedDate!: string;
    deliveredDate!:string;
    cancelledDate!: string

    setData(orderObj:any){
        this.name=orderObj.name;
        this.email=orderObj.email;
        this.address=orderObj.address;
        this.phonenumber=orderObj.phonenumber;
        this.type="orders";
        this.products=orderObj.products;
        this.payment=orderObj.payment;
        this.totalAmount=orderObj.totalAmount;
        this.status=orderObj.status;
        this.comments=orderObj.comments;
        this.orderedDate=orderObj.orderedDate;
        this.createdDate=orderObj.createdDate;
        this.modifiedDate=orderObj.modifiedDate;
        this.deliveredDate=orderObj.deliveredDate;
        this.cancelledDate=orderObj.cancelledDate;
    }
}


