import React from "react";

const RecentPosts = () => {
  return (
    <div className="wallet__balance">
      <div className="card">
        <h3>Wallet Balance</h3>
        <hr />
        graph
        <div className="number">
          <span>USDT</span>
          <span>$300.56</span>
        </div>
        <div className="number">
          <span>NBST</span>
          <span>270.72</span>
        </div>
        <div className="number">
          <span>EFT</span>
          <span>203.04</span>
        </div>
        <div className="number">
          <span>WET</span>
          <span>329.76</span>
        </div>
        <hr />
        <div className="text__center start__trading">
          <button>Manage Wallet</button>
        </div>
      </div>
    </div>
  );
};

export default RecentPosts;
