class loginData{

    private username: string;

    constructor(username:string){
           this.username=username
    }

    public get readUserName(){
        return this.username;
    }


}

const user=new loginData("Demosalesmanager");
console.log(user.readUserName)

