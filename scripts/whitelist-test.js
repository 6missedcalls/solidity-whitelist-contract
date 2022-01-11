const main = async () => {
    const whitelistContracted = await hre.ethers.getContractFactory('Whitelist');
    const whitelistContract = await whitelistContracted.deploy();
    await whitelistContract.deployed();
    console.log("Contract deployed to:", whitelistContract.address);

    // Test the addToWhitelist function
    let txn = await whitelistContract.addToWhitelist('0xe1446ae614c477FcAD783CDdc1D52E4B6a2E7026');
    await txn.wait();
    console.log("addToWhitelist:", txn.hash);

    // Test the isWhitelisted function
    let isWhitelisted = await whitelistContract.isWhitelisted('0xe1446ae614c477FcAD783CDdc1D52E4B6a2E7026');
    console.log("isWhitelisted:", isWhitelisted);

    // Test the removeFromWhitelist function
    txn = await whitelistContract.removeFromWhitelist('0xe1446ae614c477FcAD783CDdc1D52E4B6a2E7026');
    console.log("removeFromWhitelist:", txn.hash);

    // Test the isWhitelisted function
    isWhitelistedNow = await whitelistContract.isWhitelisted('0xe1446ae614c477FcAD783CDdc1D52E4B6a2E7026');
    console.log("isWhitelisted:", isWhitelistedNow);
}

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

runMain();