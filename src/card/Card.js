import "./Card.scss";
import imageUrl from "../img/upic.jpg";

function Card() {
  return (
    <div className="k-card">
      <div
        className="k-card__modules"
        tabIndex="0"
        role="button"
        aria-describedby="rbd-hidden-text-0-hidden-text-0"
        data-rbd-drag-handle-draggable-id="5521249184514048"
        data-rbd-drag-handle-context-id="0"
        draggable="false"
      >
        <div
          className="kui-button-dropdown kui-button-dropdown--67c318db-49ad-4703-8085-e6cd67003186 kui-button-dropdown--portal
                k-card__actions
                k-card__control
            "
        >
          <button
            className="kui-button kui-button--variant_icon kui-button-dropdown__item k-card__actions-button"
            type="button"
            aria-haspopup="true"
            aria-label="Card actions"
          >
            <span className="kui-icon kui-icon--24">
              <svg className="kui-icon__svg" viewBox="0 0 24 24">
                <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
              </svg>
            </span>
          </button>
        </div>
        <div className="k-card__module k-card__module--color-tags">
          <div
            className="
            color-tags
            color-tags--20

        "
          >
            <div
              className="color-tags__item color-tags__item--orange"
              aria-label="Research"
            >
              Research
            </div>
            <div
              className="color-tags__item color-tags__item--cyan"
              aria-label="Back-end"
            >
              Back-end
            </div>
          </div>
        </div>
        <div className="k-card__module k-card__module--indicators">
          <span className="k-card__indicator">
            <div className="k-card__priority" aria-label="Medium">
              <span className="kui-icon k-card__priority-icon">
                <svg className="kui-icon__svg" viewBox="0 0 16 16">
                  <path
                    d="M15 8A7 7 0 111 8a7 7 0 0114 0zM6.646 5H4.789v6h1.235V6.79h.017L7.511 11h1.017l1.47-4.252h.018V11h1.235V5H9.394L8.066 9.126H8.05L6.646 5z"
                    fill="#2196F3"
                  ></path>
                </svg>
              </span>
              <span className="k-card__priority-label">Medium</span>
            </div>
          </span>
        </div>
        <div className="k-card__module k-card__module--title">
          <div className="k-card__title-inner">
            <span className="k-card__title">
              KNB-367: kanbanchi test maximum user limit exceeded
            </span>
          </div>
        </div>
        <div className="k-card__module k-card__module--tags">
          <div className="k-card__tags">
            <span>#strategic</span>
          </div>
        </div>
        <div className="k-card__module k-card__module--counters">
          <span
            className="
                k-card__count-indicator

            "
            aria-label="Card has Description"
          >
            <span className="kui-icon k-card__count-icon">
              <svg className="kui-icon__svg" viewBox="0 0 16 16">
                <path d="M2 3a1 1 0 011-1h10a1 1 0 110 2H3a1 1 0 01-1-1zm0 5a1 1 0 011-1h5a1 1 0 010 2H3a1 1 0 01-1-1zm1 4a1 1 0 100 2h7a1 1 0 100-2H3z"></path>
              </svg>
            </span>
          </span>
          <span
            className="
                k-card__count-indicator

            "
            aria-label="Comments"
          >
            <span className="kui-icon k-card__count-icon">
              <svg className="kui-icon__svg" viewBox="0 0 16 16">
                <path d="M3 2a2 2 0 00-2 2v6a2 2 0 002 2h2v2a1 1 0 001.707.707L9.414 12H13a2 2 0 002-2V4a2 2 0 00-2-2H3zm0 2h10v6H9a1 1 0 00-.707.293L7 11.586V11a1 1 0 00-1-1H3V4zm2 4a1 1 0 100-2 1 1 0 000 2zm4-1a1 1 0 11-2 0 1 1 0 012 0zm2 1a1 1 0 100-2 1 1 0 000 2z"></path>
              </svg>
            </span>
            <span>1</span>
          </span>
          <span
            className="
                k-card__count-indicator

            "
            aria-label="Attachments"
          >
            <span className="kui-icon k-card__count-icon">
              <svg className="kui-icon__svg" viewBox="0 0 16 16">
                <path d="M3.273 2.003C4.041 1.32 5.037 1 6 1c.963 0 1.959.32 2.727 1.003C9.513 2.702 10 3.729 10 5v5c0 1.3-1.233 2-2.5 2S5 11.3 5 10V5a1 1 0 012 0v4.904c.062.035.212.096.5.096.288 0 .438-.061.5-.096V5c0-.729-.263-1.202-.602-1.503C7.041 3.18 6.537 3 6 3c-.537 0-1.041.18-1.398.497C4.263 3.798 4 4.271 4 5v5c0 1.176.469 1.874 1.081 2.311.66.47 1.562.689 2.419.689.822 0 1.728-.251 2.404-.753C10.546 11.77 11 11.058 11 10V5a1 1 0 112 0v5c0 1.742-.796 3.03-1.904 3.853C10.021 14.65 8.678 15 7.5 15c-1.143 0-2.49-.282-3.581-1.061C2.78 13.126 2 11.824 2 10V5c0-1.271.487-2.298 1.273-2.997z"></path>
              </svg>
            </span>
            <span>12</span>
          </span>
          <span
            className="
                k-card__count-indicator

            "
            aria-label="Checklist items"
          >
            <span className="kui-icon k-card__count-icon">
              <svg className="kui-icon__svg" viewBox="0 0 16 16">
                <path d="M13.707 3.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L6 9.586l6.293-6.293a1 1 0 011.414 0z"></path>
              </svg>
            </span>
            <span>0 / 2</span>
          </span>
        </div>
        <div className="k-card__module">
          <div className="k-card__dates k-card__dates--all">
            <span
              className="k-card__date-value"
              aria-label="Start date: 1 Aug 2020"
            >
              <span className="kui-icon">
                <svg className="kui-icon__svg" viewBox="0 0 16 16">
                  <path d="M9.768 10.261l1.292 1.185V14.4a.6.6 0 00.6.6h.24a.6.6 0 00.6-.6v-3.843l-1.44-1.184.387-2.207c.696.736 1.703 1.269 2.836 1.43.234.033.717-.014.717-.531 0-.518-.52-.63-.764-.683-.885-.187-1.608-.692-2.014-1.342l-.646-.948c-.258-.355-.646-.592-1.098-.592-.097 0-.177.015-.258.03-.08.014-.162.03-.258.03l-3.36 1.302v2.184a.6.6 0 00.6.6h.092a.6.6 0 00.6-.6V6.632l1.163-.414L8 11.36l-2.515-.381a.6.6 0 00-.654.387l-.065.178a.6.6 0 00.503.804L9 12.726l.768-2.465zM13 2.5c0-.825-.675-1.5-1.5-1.5S10 1.675 10 2.5 10.675 4 11.5 4 13 3.325 13 2.5zM3 7h2v1H3V7zm2.5-2H2v1h3.5V5z"></path>
                </svg>
              </span>
              <span className="k-card__date-text">1st Aug</span>
            </span>
            <span
              className="k-card__date-value k-card__date-value--overdue"
              aria-label="Due date: 21 Aug 2020"
            >
              <span className="kui-icon">
                <svg className="kui-icon__svg" viewBox="0 0 16 16">
                  <path d="M8.5 10C8 9 7 7.5 6.5 7c-1.106 1.218-2.5 4.5-1 8-2-1-2.5-2.5-2.5-4.197C3 7.5 6 2.5 7.5 1c0 2.5.5 5.5 2.5 5.5.667 0 .889-.444 1.111-.889.111-.222.222-.444.389-.611.565 1.145 1.5 3.905 1.5 6 0 2.5-1.5 3.5-2.5 4 .5-.5 1.5-4.5-1-6l-1 1zm-1.645-.115c.233.667.44 1.258 1.13 1.59C9 11.5 9.5 10.5 9.5 10.5c.5.5.5 1.5.5 2C10 14 9 15 8 15s-2-1-2-2.5c0-.952 0-2.5.5-3.5.15.3.255.6.355.885z"></path>
                </svg>
              </span>
              <span className="k-card__date-text">21st Aug</span>
            </span>
            <span className="k-card__date-value" aria-label="Estimate: 2d">
              <span className="k-card__date-text">2d</span>
            </span>
          </div>
          <div className="k-card__assignees">
            <div
              className="
            users-tooltip
            users-tooltip--big
        "
            >
              <div
                className="users-tooltip__user"
                aria-label="

        Assignee:
                        Artur Blaim

                    "
              >
                <div className="kui-userpic kui-userpic--size_24">
                  <div
                    className="kui-userpic__img"
                    style={{ backgroundImage: `url(${imageUrl})` }}
                  ></div>
                </div>
              </div>
              <div
                className="users-tooltip__user"
                aria-label="

        Assignee:
                        Roman Pupkin

                    "
              >
                <div className="kui-userpic kui-userpic--size_24">
                  <div
                    className="kui-userpic__img"
                    style={{ backgroundImage: `url(${imageUrl})` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="k-card__state">
        <div className="k-card__collaborators"></div>
      </div>
    </div>
  );
}

export default Card;
