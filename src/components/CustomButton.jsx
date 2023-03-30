import { useWeb3Modal } from "@web3modal/react";
import { useState } from "react";
import { goerli, useAccount, useDisconnect, useSigner } from "wagmi";
import { ethers } from "ethers";
import { EthereumClient, w3mProvider } from "@web3modal/ethereum";
import { wagmiClient } from "../../utils/WalletConnect";

export default function CustomButton() {
  const [loading, setLoading] = useState(false);
  const { open } = useWeb3Modal();
  const { isConnected, address } = useAccount();
  const { disconnect } = useDisconnect();
  const label = isConnected ? "Disconnect" : "Connect Custom";

  async function onOpen() {
    setLoading(true);
    await open();
    setLoading(false);
  }

  function onClick() {
    if (isConnected) {
      disconnect();
    } else {
      onOpen();
    }
  }
  console.log("wagmiClient", wagmiClient);
  console.log("wagmiClient", ethers.getDefaultProvider);

  const sendOne = async () => {
    let provider = new ethers.providers.Web3Provider(window.ethereum);

    // Acccounts now exposed
    const params = [
      {
        from: address,
        to: "0xC2Bb25B9d163b51840aefc0F440E4339dd82FBEA",
        value: ethers.utils.parseUnits("0.0001", "ether").toHexString(),
      },
    ];

    const transactionHash = await provider.send("eth_sendTransaction", params);
    console.log("transactionHash is " + transactionHash);
  };

  return (
    <>
      <button onClick={onClick} disabled={loading}>
        {loading ? "Loading..." : label}
      </button>
      <br />
      <button onClick={sendOne}>Send </button>
    </>
  );
}
