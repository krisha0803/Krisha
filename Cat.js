class Cat extends Animal{
  overwrite parent constuctor
  constructor(){
    //create a clone of parent 
  super("Cat", name, "mewww"); //calls parent creation
    
    //overwrite parent function 
 talk(){
   print(`hellooo, meooww. i am a ${this.breed}!`)
    }
  }
}
