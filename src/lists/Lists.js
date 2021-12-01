import "./Lists.scss";
import List from "../list/List";
import React, { useEffect, useState } from "react";

function Lists({ listNumber, cardNumber }) {
  const [step, setStep] = useState(0);
  const [list, setList] = useState([]);
  const [isFetching, setIsFetchig] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", handleHorizonScroll);

    if (step === 0) getLists(step);
    if (isFetching && list.length <= listNumber) {
      getLists(step);
    }
  }, [isFetching, step]);

  const handleHorizonScroll = (e) => {
    const widthScroll = e.target.scrollingElement.scrollWidth;
    const widthToTop = e.target.scrollingElement.scrollLeft;
    const viewWidth = e.target.scrollingElement.clientWidth;

    if (widthScroll - (widthToTop + viewWidth) < 20) {
      setStep((prevState) => prevState + 5);
      setIsFetchig(true);
    }
  };

  const getLists = function (step) {
    let lists = [];
    for (let i = step; i < 5 + step; i++) {
      lists.push(<List key={i} cardNumber={cardNumber} />);
    }
    console.log(list.length);
    // return lists;
    setIsFetchig(false);
    setList((prevState) => [...prevState, ...lists]);
  };
  //   return <div className="lists-container">{getLists()}</div>;
  return <div className="lists-container">{list}</div>;
}

export default Lists;
