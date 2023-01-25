import React from "react";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import Head from "next/head";
import "../styles/globals.css";
import { AppProps } from "next/app";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mainnet;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
      <Head>
        <title>Blue Social PreSale</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Blue Social Pre Sale token drop 100,000,000 valued at $0.085 each"
        />
        <meta
          name="keywords"
          content="Blue Social Pre Sale token drop 100,000,000 valued at $0.085 each"
        />
        
      </Head>
      <div className="nft-section">
      <div className="nft-flex">
        <div className="content-nft">
          <h1 className="nft-heading">
            GET IN EARLY ON THE BLUE <br className="desk" /> SOCIAL TOKEN
            PRE-SALE. <br className="desk" /> BUY THE $BST TOKEN NOW!
          </h1>

          <p>
            The $BST tokens is the currency that powers the Blue Social app and
            layer-2 protocol.
          </p>
          <p>
            You can buy directly with your USDT, or you can buy with the Eth in
            your wallet. After the private pre-sale ends. You can use the claim
            page to claim your purchased BST.
          </p>
          <p>
            Get in on the ground floor of our pre-sale by purchasing your $BST
            tokens today!
          </p>
        </div>
        <Component {...pageProps} />
      </div>
      {/*  */}
    </div>
    </ThirdwebProvider>
    
  );
}

export default MyApp;
