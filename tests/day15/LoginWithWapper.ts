// Import or define WapperClass before using it
import {PwWrapper} from './WrapperClass'; // Use default import if WapperClass is exported as default

export class LoginPage extends PwWrapper {
	

    async loadUrl(url:string){
        await this.page.goto(url)

    }

    async logindata(user:string,pass:string){

      
        await this.typeValue("#username", user);
        await this.clearandType("#password",pass)
     

    }
}