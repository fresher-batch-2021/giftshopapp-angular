import { Injectable } from "@angular/core";

@Injectable({
        providedIn:'root'
    })

export class ValidationService{

isValidString(value:any,errMessage:any){
if(value==null||value==undefined){
    throw new Error(errMessage)
}
}

isValidEmail(value:any,errMessage:any){
    this.isValidString(value,"email can't be empty")
    // email validati0on are here
    if(value.trim() == ""){
        throw new Error(errMessage)
    }
}

isValidPassword(value:any,errMessage:any){
    this.isValidString(value,"password can't be empty")
    // password validation are here
    if(value.trim() == ""){
        throw new Error(errMessage)
    }
}

}