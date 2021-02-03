export class User {
    email:string;
    password:string;
    remember:boolean;
    gender:string;
    role:string;
    constructor(email,password,remember,gender,role){
        this.email=email;
        this.password=password;
        this.remember=remember;
        this.gender=gender;
        this.role=role;
    }
   

}
