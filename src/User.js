class Fruits{
	constructor(color, shape){
    	this.color = color;
        this.shape = shape;
    }
}

class Apple extends Fruits{
	constructor(isImported){
    	super("Red", "round");
        this.isImported = isImported;
    }
}

class Orange extends Fruits{
	constructor(isImported, taste){
    	super("Orange", "round");
        this.isImported = isImported;
        this.taste = taste;
    }
}

class GreenApple extends Apple{
    constructor(){
    	super(true);
    }
}

let redFruit = new Apple(false);
let greenApple = new GreenApple();

console.log(redFruit.color);

class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
    
    getPassword(){
    	return "Your default password is " + this.password;
    }
    
    setPassword(value){
    	this.password = value;
    }
    
    isActive(){
    	return true;
    }
    
    hasEmail(){
    	return this.email != "";
    }
       
}

class PersonalInfo extends User{
	constructor(email, password, firstName, lastName){
    	super(email, password);
    	this.firstName = firstName;
        this.lastName = lastName;
    }
    
    getFullName(){
    	return this.firstName + " " + this.lastName;
    }
   
}

class Employee extends PersonalInfo{
	

}

class Client extends User{
	constructor(email, password, clientName){
    	super(email,password);
        this.clientName = clientName;
    }
}


let user1 = new PersonalInfo("juan@kodego.ph","12345678", "Juan", "dela Cruz");
let user2 = new PersonalInfo("maria@kodego.ph","12345678", "Maria", "Makiling");

user2.setPassword("87654321");

if(user2.hasEmail()){
	document.write(user2.getPassword());
}