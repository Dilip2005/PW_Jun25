import{Page} from "playwright";

export abstract class PwWrapper{

page:Page

constructor(page:Page){
this.page=page
}

async clearandType(locator:string,data:string){
    try{
    const ele=this.page.locator(locator)
    await ele.clear()
    await ele.fill(data)
    }catch(error){
        console.error(`Error in clearandType: ${error}`);
    }
}

async typeValue(locator:string,data:string){
    try{
await this.page.locator(locator).fill(data)
}catch(error){
    console.error(`Error in typeValue: ${error}`);
}
}




}