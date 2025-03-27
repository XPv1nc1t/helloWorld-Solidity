async function main() {
    // Get the contract to deploy
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    const HelloWorld = await ethers.getContractFactory("helloWorld");
    const helloWorld = await HelloWorld.deploy();
    console.log("Contract deployed to:", helloWorld.address);

    // Call the sayHello function
    const tx = await helloWorld.sayHello();
    console.log("Transaction sent, waiting for confirmation...");
    await tx.wait();
    console.log("Hello, World! event emitted");
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
