import {Gun} from '../code/gun' // imports the gun class

export class AssaultRifle extends Gun{
  constructor(bulletType, numberOfBullets, range){
    super(bulletType, numberOfBullets)
    if(range === undefined){
      this._range = 1000
    }
    else {
      this._range = range
    }
  }

  // Implements Polymorphism by using the _range property which is only native to the
  // AssaultRifle class to overwrite the fire() method it inherited from the Gun class.
  fire(){
    return "Assault rifles have a scope and this one has a range of " + this._range +"m"
  }

  //fires 5 bullets at a time
  burstFire(){
    this.numberOfBullets -=5
  }

  //fires 10 bullets at a time
  automaticFire(){
    this.numberOfBullets -= 10
  }
}
