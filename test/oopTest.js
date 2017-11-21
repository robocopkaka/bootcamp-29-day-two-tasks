const chai = require('chai')
const expect = chai.expect
import {Gun} from '../code/gun'
import {HandGun} from '../code/handgun'
import {AssaultRifle} from '../code/assaultrifle'

describe('Should create gun class and it\'s methods and properties', () => {
  it('should confirm that the instance created of the gun class is an object', () =>{
    const expectedResult = "object"
    const gun = new Gun()
    expect(typeof gun).to.equal(expectedResult)
  })

  it('should confirm that firing reduces the bullet count by one', () => {
    const gun = new Gun("blanks", 20)
    const bullets = gun.numberOfBullets - 1
    gun.fire()
    expect(gun.numberOfBullets).to.equal(bullets)
  })

  it('should alert the user if the safety is off', ()=>{
    const expectedResult = "Safety is off"
    const gun = new Gun()
    expect(gun.safetyOff()).to.equal(expectedResult)
  })

  it('should alert the user if the safety is on', ()=>{
    const expectedResult = "Safety is on"
    const gun = new Gun()
    expect(gun.safetyOn()).to.equal(expectedResult)
  })

  it('should increase the number of bullets by 10 when the user reloads', ()=>{
    const gun = new Gun("real", 20)
    const expectedResult = 30
    gun.reload();
    expect(gun.numberOfBullets).to.equal(expectedResult)
  })

  it('should initialise the bullet type to real, if no argument is passed', ()=>{
    const gun = new Gun()
    expect(gun.bulletType).to.equal("real")
  })

  it('should initialise the number of bullets to 20, if no argument is passed', ()=>{
    const gun = new Gun()
    expect(gun.numberOfBullets).to.equal(20)
  })

  it('should not be able to access the gun\'s range', ()=>{
    const gun = new Gun()
    expect(gun.range).to.equal(undefined)
  })
})

describe('should create a subclass of gun called handgun', ()=>{
  it('should confirm that the instance created from class Handgun is an object',()=>{
    const gun = new HandGun()
    expect(typeof gun).to.equal("object")
  })

  it('should be able to overwrite the fire method of the superclass', () =>{
    const gun = new HandGun("blanks", 20)
    const bullets = gun.numberOfBullets - 2
    gun.fire()
    expect(gun.numberOfBullets).to.equal(bullets)
  })
})

describe('should create a subclass of gun called AssaultRifle', () =>{
  it('should confirm that the instance created from class AssaultRifle is an object',()=>{
    const gun = new AssaultRifle()
    expect(typeof gun).to.equal("object")
  })

  it('should check that the burstFire method fires five bullets at a time', ()=>{
    const gun = new AssaultRifle("blanks", 300)
    const bullets = gun.numberOfBullets - 5
    gun.burstFire()
    expect(gun.numberOfBullets).to.equal(bullets)
  })

  it('should check that the automaticFire method fires ten bullets at a time', ()=>{
    const gun = new AssaultRifle("blanks", 300)
    const bullets = gun.numberOfBullets - 10
    gun.automaticFire()
    expect(gun.numberOfBullets).to.equal(bullets)
  })

  it('should inform the user that they have a scope, and give them a range when firing', () =>{
    const expectedResult = "Assault rifles have a scope and this one has a range of 1000m"

    const gun = new AssaultRifle("real", 400, 1000)
  })
})
