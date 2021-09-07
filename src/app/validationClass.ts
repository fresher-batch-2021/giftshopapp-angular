import { Injectable } from "@angular/core";

@Injectable({
        providedIn:'root'
    })

export class ValidationService{

isValidString(value:string,errMessage:string){
if(value==null||value==undefined){
    throw new Error(errMessage)
}
}

isValidEmail(value:string,errMessage:string){
    this.isValidString(value,"email can't be empty")
    // email validati0on are here
    if(value.trim() == ""){
        throw new Error(errMessage)
    }
}

isValidPassword(value:string,errMessage:string){
    this.isValidString(value,"password can't be empty")
    // password validation are here
    if(value.trim() == ""){
        throw new Error(errMessage)
    }
}

}