const ENTRANCE_FEE = ethers.utils.parseEther("0.1");
const VRF_COORDINATOR_ADDR = "0x6168499c0cFfCaCD319c818142124B7A15E857ab";
const GAS_LANE =
  "0xd89b2bf150e3b9e13446986e571fb9cab24b13cea0a43ea20a6049a85cc807cc";
const VRF_SUBSCRIPTION = "4613";
const CALLBACK_GAS_LIMIT = "500000";

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();

  const args = [
    ENTRANCE_FEE,
    "300", // interval
    VRF_COORDINATOR_ADDR,
    GAS_LANE,
    VRF_SUBSCRIPTION,
    CALLBACK_GAS_LIMIT,
  ];

  const raffle = await deploy("Raffle", {
    from: deployer,
    args: args,
    log: true,
    waitConfirmations: 6,
  });
};
