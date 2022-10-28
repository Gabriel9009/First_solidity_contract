require("@nomiclabs/hardhat-ethers")
const {ethers} = require("hardhat")

async function deploy(){
    const gabriel = await ethers.getContractFactory("gabriel")
    const name = await gabriel.deploy()
    await name.deployed()

    return name
}

async function printName(name){
    console.log(await name.name())
}

deploy().then(printName)