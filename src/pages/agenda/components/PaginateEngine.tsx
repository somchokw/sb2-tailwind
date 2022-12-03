import React from "react";

interface PaginateEngineProps {
  btnActive: any;
  handleActiveBtn: (day: any) => void;
  onChangeSearch: (value: any) => void;
  onSubmitSearch: () => void;
}

export const PaginateEngine: React.FC<PaginateEngineProps> = (
  props: PaginateEngineProps
) => {
  const { btnActive, handleActiveBtn, onChangeSearch, onSubmitSearch } = props;

  return (
    <div className="agenda-engine-paginate">
      <div className="agenda-search-engine">
        <input
          className="input-search-agenda"
          type="text"
          placeholder="Search Agenda"
          onChange={onChangeSearch}
        />
        <button className="btn-agenda-active" onClick={onSubmitSearch}>
          <p className="btn-text">Search</p>
        </button>
      </div>
      <div className="agenda-select-mode">
        <button
          className={btnActive === "all" ? "btn-agenda-active" : "btn-agenda"}
          onClick={() => handleActiveBtn("all")}
        >
          <p className="btn-text">ALL</p>
        </button>
        <button
          className={btnActive === 1 ? "btn-agenda-active" : "btn-agenda"}
          onClick={() => handleActiveBtn(1)}
        >
          <p className="btn-text">DAY 1</p>
        </button>
        <button
          className={btnActive === 2 ? "btn-agenda-active" : "btn-agenda"}
          onClick={() => handleActiveBtn(2)}
        >
          <p className="btn-text">DAY 2</p>
        </button>
      </div>
    </div>
  );
};

export default PaginateEngine;
