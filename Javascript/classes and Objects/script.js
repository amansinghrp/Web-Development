let data = "Website ka secret data"
class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log("Welcome to the website");
        console.log("Data = ", data);
        console.log("Name: " + this.name);
        console.log("Email: "+ this.email);
    }
}
class Admin extends User{
    constructor(name, email){
        super(name, email);
    }
    editData(){
        data = "College hmara sbse achaa hai";
        console.log("Data editted successfully");
        console.log("New data = ", data);
    }
}
let user1 =new  User("Aman", "rajputaman6554gmail.com");
let adm = new Admin("Administartor", "admin@college.com");
