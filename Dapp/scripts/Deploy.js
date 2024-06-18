const{ethers}=require("hardhat")

async function main() {
    const Whitelistcontract=await ethers.getContractFactory("Whitelist");

    const deployedWhitelistcontract= await Whitelistcontract.deploy(10);

   

    await deployedWhitelistcontract.waitForDeployment();

    const deployedWhitelistcontractAddress=await deployedWhitelistcontract.getAddress();

    console.log("Whitelist contract address : ",deployedWhitelistcontractAddress);


    //const contract=await ethers.getContractFactory("NFT");

    //const deployedContract= await contract.deploy();
    // wait for deployment
    

     // Wait for the deployment to be mined
     //await deployedContract.waitForDeployment();

      // Get the address of the deployed contract
    //const contractAddress = await deployedContract.getAddress();

    // Log the address of the deployed contract
    //console.log("NFT contract deployed to:", contractAddress);



}
main()
    .then(()=>{process.exit(0)})
    .catch(error=>{
        console.log(error)
        process.exit(1)});
