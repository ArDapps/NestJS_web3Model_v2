import "../styles.css";
import { Web3Modal } from "@web3modal/react";
import { useEffect, useState } from "react";
import { ethereumClient, wagmiClient } from "../../utils/WalletConnect";
import { WagmiConfig } from "wagmi";
// 4. Wrap your app with WagmiProvider and add <Web3Modal />   import "../styles.css";

export default function App({ Component, pageProps }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <>
      {ready ? (
        <WagmiConfig client={wagmiClient}>
          <Component {...pageProps} />
        </WagmiConfig>
      ) : null}

      <Web3Modal
        projectId={process.env.NEXT_PUBLIC_PROJECT_ID}
        ethereumClient={ethereumClient}
      />
    </>
  );
}
