export class Users {
    _id!:string;
    _rev!: string
    name!: string
    email!: string
    password!: string
    role!: string
    type!: string
    userStatus!: boolean

    constructor() {
        this.type = "user";// type will be same for all objects
    }

    setData(userObj:any){
        this.name=userObj.name;
        this.email=userObj.email;
        this.password=userObj.password;
        this.role=userObj.role;
        this.userStatus=userObj.userStatus;
    }
}
