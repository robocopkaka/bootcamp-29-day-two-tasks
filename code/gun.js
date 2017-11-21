export class Gun{
  constructor(bulletType, numberOfBullets){
    if(bulletType === undefined){
      this.bulletType = "real"
    }
    else
      this.bulletType = bulletType
    if(numberOfBullets === undefined){
      this.numberOfBullets = 20
    }
    else
      this.numberOfBullets = numberOfBullets
    this._range = 200 //prefixing the property with an underscore makes it private to the class
  }

  fire(){
    this.numberOfBullets = this.numberOfBullets - 1
  }

  safetyOff(){
    return "Safety is off"
  }

  safetyOn(){
    return "Safety is on"
  }

  reload(){
    this.numberOfBullets += 10
  }
}
