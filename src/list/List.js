import "./List.scss";
import Card from "../card/Card";
import React, { useEffect, useState } from "react";

function List({ cardNumber }) {
  const [step, setStep] = useState(0);
  const [list, setList] = useState([]);
  const [isFetching, setIsFetchig] = useState(false);

  useEffect(() => {
    if (step === 0) getCards(step);
    if (isFetching) {
      getCards(step);
    }
  }, [isFetching, step]);

  const onScroll = (e) => {
    if (
      e.target.scrollHeight - (e.target.scrollTop + e.target.clientHeight) <
        20 &&
      list.length < cardNumber
    ) {
      setStep((prevState) => prevState + 5);
      setIsFetchig(true);
    }
    //window.innerHeight
    // console.log("scrollHeight", e.target.scrollHeight);
    // console.log("scrollLeft", e.target.scrollLeft);
    // console.log("scrollTop", e.target.scrollTop);
    // console.log("scrollWidth", e.target.scrollWidth);
    // console.log("clientHeight", e.target.clientHeight);
  };

  const getCards = function (step) {
    let cards = [];
    for (let i = step; i < 5 + step; i++) {
      cards.push(<Card key={i} />);
      console.log(i);
    }
    setIsFetchig(false);
    setList((prevState) => [...prevState, ...cards]);
    // return cards;
  };

  return (
    <div className="list-container">
      <section className="list-component">
        <header className="list-header">
          <span
            className="list-header__name"
            tabIndex="0"
            role="button"
            aria-describedby="rbd-hidden-text-0-hidden-text-0"
            data-rbd-drag-handle-draggable-id="5218064539582464"
            data-rbd-drag-handle-context-id="0"
            draggable="false"
          >
            <span aria-label="Testing">Testing</span>
          </span>
          <div className="list-header-actions">
            <span className="list-header__counter">1 </span>
            <span className="list-header__counter-filter">
              <span>1</span>
            </span>
            <div
              className="
                list-component__actions-dd
                list-control
            "
            >
              <div className="kui-button-dropdown kui-button-dropdown--29534d87-aee5-4f0e-bf26-967ee895d6d9 list-component__dots">
                <button
                  className="kui-button kui-button--variant_icon kui-button-dropdown__item list-component__dots-button"
                  type="button"
                  aria-haspopup="true"
                  aria-label="List actions"
                >
                  <span className="kui-icon kui-icon--24">
                    <svg className="kui-icon__svg" viewBox="0 0 24 24">
                      <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                    </svg>
                  </span>
                </button>
                <div
                  className="kui-dropdown kui-dropdown--direction_auto kui-dropdown--direction_left kui-button-dropdown__dropdown kui-button-dropdown__dropdown--kui-button-dropdown--29534d87-aee5-4f0e-bf26-967ee895d6d9"
                  tabIndex="-1"
                ></div>
              </div>
              <div
                className="list-details__move-to-dropdown"
                tabIndex="-1"
              ></div>
            </div>
            <div
              className="
                list-component__new-card-from-template
                list-control
            "
            >
              <div className="kui-button-dropdown kui-button-dropdown--c7182045-a19a-4ac4-810c-7df29c622846 list-component__new-card-from-template__dropdown">
                <button
                  className="kui-button kui-button--variant_icon kui-button-dropdown__item"
                  type="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                  aria-label="Create card from template"
                >
                  <span className="kui-icon kui-icon--24">
                    <svg className="kui-icon__svg" viewBox="0 0 24 24">
                      <path d="M5 3a3 3 0 00-3 3v12a3 3 0 003 3h14a3 3 0 003-3V6a3 3 0 00-3-3H5zM4 6a1 1 0 011-1h14a1 1 0 011 1v12a1 1 0 01-1 1H5a1 1 0 01-1-1V6zm3 1a1 1 0 00-1 1v2a1 1 0 001 1h3a1 1 0 001-1V8a1 1 0 00-1-1H7zm-1 7a1 1 0 011-1h3a1 1 0 011 1v2a1 1 0 01-1 1H7a1 1 0 01-1-1v-2zm11-7a1 1 0 011 1v2a1 1 0 01-1 1h-3a1 1 0 01-1-1V8a1 1 0 011-1h3z"></path>
                    </svg>
                  </span>
                </button>
                <div
                  className="kui-dropdown kui-dropdown--direction_auto kui-dropdown--direction_left kui-button-dropdown__dropdown list-cards__dropdown-scroll kui-button-dropdown__dropdown--kui-button-dropdown--c7182045-a19a-4ac4-810c-7df29c622846"
                  tabIndex="-1"
                ></div>
              </div>
            </div>
            <button
              className="kui-button kui-button--variant_icon
                                list-header__add-card
                                list-control
                            "
              type="button"
              aria-label="Create a new card"
            >
              <span className="kui-icon kui-icon--24">
                <svg className="kui-icon__svg" viewBox="0 0 24 24">
                  <path d="M12 4a1 1 0 011 1v6h6a1 1 0 110 2h-6v6a1 1 0 11-2 0v-6H5a1 1 0 110-2h6V5a1 1 0 011-1z"></path>
                </svg>
              </span>
            </button>
            <button
              className="kui-button kui-button--variant_icon
                                list-header__add-card-cancel
                                list-control
                            "
              type="button"
              aria-label="Cancel"
            >
              <span className="kui-icon kui-icon--24">
                <svg className="kui-icon__svg" viewBox="0 0 24 24">
                  <path d="M6.293 6.293a1 1 0 011.414 0L12 10.586l4.293-4.293a1 1 0 111.414 1.414L13.414 12l4.293 4.293a1 1 0 01-1.414 1.414L12 13.414l-4.293 4.293a1 1 0 01-1.414-1.414L10.586 12 6.293 7.707a1 1 0 010-1.414z"></path>
                </svg>
              </span>
            </button>
          </div>
        </header>
        <div className="list-cards" data-id="5218064539582464">
          <div onScroll={onScroll} className="list-cards__scroll">
            {/* {getCards()} */}
            {list}
          </div>
        </div>
      </section>
    </div>
  );
}

export default List;
