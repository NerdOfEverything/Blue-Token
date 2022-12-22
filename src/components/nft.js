import React from "react";
import "./nft.css";
const Nft = () => {
  return (
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
        <div className="content-card">
          <p className="pre-sale">
            Buy BST during our <br /> Pre-Sale
          </p>
          <p className="bonus-tile">
            <span className="large-num">112%</span> Bonus
            <br />
            $0.085 Per Token - Pre-Sale Price
            <br /> $0.18 Per Token - IDO Price (March 2023)
          </p>
          <div className="token-input">
            <p>Enter number of tokens</p>
            <input type="text" /> <p className="float">Tokens</p>
            <button className="connect-btn">Connect Wallet</button>
          </div>
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default Nft;
