import React, { useEffect, useState } from "react";
import "./Trade.css";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import RecentPosts from "./RecentPosts";

const Trade = () => {
  const [population, setPopulation] = useState([]);
  const [price, setPrice] = useState({});
  const handleData = async () => {
    const API_URL =
      "https://datausa.io/api/data?drilldowns=Nation&measures=Population";
    const data = await fetch(API_URL);
    const res = await data.json();
    setPopulation(res.data);
  };
  useEffect(() => {
    handleData();
    cryptoCurrencyPrice();
  }, []);

  const cryptoCurrencyPrice = async () => {
    const crypto_API_URL = "https://api.coindesk.com/v1/bpi/currentprice.json";
    const data = await fetch(crypto_API_URL);
    const res = await data.json();
    setPrice(res.bpi);
    console.log(res.bpi);
  };

  const assets = [
    {
      title: price?.USD?.code,
      desc: price?.USD?.description,
      price: price?.USD?.rate,
      perentage: 11.01,
    },
    {
      title: price?.EUR?.code,
      desc: price?.EUR?.description,
      price: price?.EUR?.rate,
      perentage: 9.15,
    },
    {
      title: price?.GBP?.code,
      desc: price?.GBP?.description,
      price: price?.GBP?.rate,
      perentage: 11.01,
    },
    // {
    //   title: "RET",
    //   desc: "Renewable Energy Token",
    //   price: 0.46,
    //   perentage: 0.56,
    // },
    // {
    //   title: "WET",
    //   desc: "Water Token",
    //   price: 0.48,
    //   perentage: 1.48,
    // },
  ];
  console.log(population, "hello population");
  console.log(price, "price");
  return (
    <div className="trade">
      <div className="heading">
        <div className="text">
          <h2>
            Hello, <span className="warm__welcome">Brooklyn Simmons</span> 🖐
          </h2>
          <p>
            Welcome to <span className="trading__name">Spot trading</span>
          </p>
        </div>
        <div className="start__trading">
          <button>Start Trading</button>
        </div>
      </div>
      <div className="overview">
        <div className="market__overview">
          <div className="market__overview__chart">
            Market Overview
            <hr />
            <Line
              // height={250}
              // width={500}
              options={{
                barPercentage: 1,

                scales: {
                  x: {
                    grid: {
                      display: "",
                    },
                  },
                  y: {
                    grid: {
                      display: "",
                    },
                  },
                },
                responsive: true,
                plugins: {
                  legend: {
                    position: "bottom",
                    display: true,
                  },

                  title: {
                    display: false,
                    text: "Towns/cities",
                  },
                },
              }}
              data={{
                labels: population.map((year) => year["ID Year"]),
                datasets: [
                  {
                    label: 0,
                    data: population.map((pop) => pop.Population),
                    borderColor: "#b0ef33",
                    backgroundColor: "#83AEF0",
                    type: "line",
                    order: 0,
                    pointRadius: 0,
                    tension: 0.4,
                  },
                ],
              }}
            />
            <div className="chart__align">
              Get in depth charts in Trade
              <span className="text__center start__trading">
                <button>Trade</button>
              </span>
            </div>
          </div>
        </div>
        {/* <div className="wallet__balance">
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
        <div className="recent__post">
          <RecentPosts />
        </div> */}
      </div>
      <div className="assets">Assets</div>
      <div className="assets__cards">
        <div className="cards__assets">
          {assets.map((asset) => {
            return (
              <div className="asset__card">
                <div className="title">{asset.title}</div>
                <div className="description">{asset.desc}</div>
                <div className="price">
                  <span>{asset.price}</span>
                  <span>{asset.perentage}</span>
                </div>
                <div className="trade__btn">
                  <span>i</span>
                  <button className="tr__btn">Trade</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Trade;
