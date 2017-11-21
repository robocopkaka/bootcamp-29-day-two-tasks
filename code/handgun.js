import {Gun} from '../code/gun' // imports the gun class

export class HandGun extends Gun{
  constructor(bulletType, numberOfBullets){
    super(bulletType, numberOfBullets)
    if(numberOfBullets === undefined)
      this.numberOfBullets = 300
  }

  fire(){
    this.numberOfBullets -= 2
  }

}

// let gun = new HandGun()
// console.log(gun.numberOfBullets)
