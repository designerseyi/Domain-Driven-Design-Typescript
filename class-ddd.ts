
class PersonEntity{
    #uid:number;
    #name:Name;
    #email:Email;
    #phonenumber:number;
    

}



class Email
{
    #email:string;

    private constructor(value:string){
        this.#email = value;
    }

    createEmail(email:string){
        //validation
        if (!email || email.length === 0 ){
            throw new Error("email cannot be empty");
        }
        else if(!(email.includes("@"))){
            throw new Error("not a valid email");
        }
      new Email(email);
    }

    public toValue(){
        return this.#email;
    }
    

}

class Name
{
    #name:string;

    private constructor(value:string){
        this.#name = value;
    }

    createName(name:string){
        //validation
        if (!name || name.length === 0 ){
            throw new Error("name cannot be empty");
        }
      new Name(name);
    }

    public toValue(){
        return this.#name;
    }


}


class PersonAggregate {

}