import React from "react";
import { exportAgendaData } from "../../components/utils";

export const Agenda = () => {
  const [btnActive, setBtnActive] = React.useState<any>("all");
  const [searchTerm, setSearhTerm] = React.useState<string>("");
  const [filterLabel, setFilterLabel] = React.useState<string>("");

  const data = exportAgendaData(btnActive, filterLabel) as any;

  const onChangeSearch = (e: any) => {
    const { value } = e.target;
    setSearhTerm(value);
  };

  const onSubmitSearch = () => {
    setFilterLabel(searchTerm);
  };
  const handleActiveBtn = (mode: any) => {
    setBtnActive(mode);
  };

  return (
    <div className="agenda-container">
      <p className="agenda-header-text">AGENDA</p>
      <div className="agenda-search-engine">
        <input
          className="input-search-agenda"
          type="text"
          placeholder="Search Agenda"
          onChange={onChangeSearch}
        />
        <button className="btn-agenda-active" onClick={onSubmitSearch}>
          Search
        </button>
      </div>
      <div className="agenda-select-mode">
        <button
          className={btnActive === "all" ? "btn-agenda-active" : "btn-agenda"}
          onClick={() => handleActiveBtn("all")}
        >
          ALL
        </button>
        <button
          className={btnActive === 1 ? "btn-agenda-active" : "btn-agenda"}
          onClick={() => handleActiveBtn(1)}
        >
          DAY 1
        </button>
        <button
          className={btnActive === 2 ? "btn-agenda-active" : "btn-agenda"}
          onClick={() => handleActiveBtn(2)}
        >
          DAY 2
        </button>
      </div>

      {(btnActive === "all" || btnActive === 1) && (
        <div>
          <p>DAY 1</p>
          <p>Thursday, February 24, 2022</p>
        </div>
      )}

      {data?.length ? (
        data
          .filter((item: any, index: any) => item.day === 1)
          .map((item: any, index: any) => (
            <div key={`dayOne-${index}`} className="agenda-card">
              <p> {item.label} </p>
              <p> {item.periodFirst} </p>
              <p> {item.periodSecond} </p>
              <p> {item.periodThird} </p>
              {item.lecturers.map((lec: any, index: any) => (
                <div key={`lec-dayone-${index}`} className="row-avartar">
                  <li></li>
                  <div className="agenda-avartar"></div>
                  <p>{lec.content}</p>
                </div>
              ))}
              {item.moderatedBy?.length ? <p>Moderated by</p> : ""}
              {item?.moderatedBy?.length
                ? item.moderatedBy.map((mod: any, index: any) => (
                    <div key={`mod-dayone-${index}`} className="row-avartar">
                      <li></li>
                      <div className="agenda-avartar"></div>
                      <p>{mod.content}</p>
                    </div>
                  ))
                : ""}
            </div>
          ))
      ) : (
        <></>
      )}

      {(btnActive === "all" || btnActive === 2) && (
        <div>
          <p>DAY 2</p>
          <p>Friday, February 25, 2022</p>
        </div>
      )}

      {data?.length ? (
        data
          .filter((item: any, index: any) => item.day === 2)
          .map((item: any, index: any) => (
            <div key={`dayOne-${index}`} className="agenda-card">
              <p> {item.label} </p>
              <p> {item.periodFirst} </p>
              <p> {item.periodSecond} </p>
              <p> {item.periodThird} </p>
              {item.lecturers.map((lec: any, index: any) => (
                <div key={`lec-daytwo-${index}`} className="row-avartar">
                  <li></li>
                  <div className="agenda-avartar"></div>
                  <p>{lec.content}</p>
                </div>
              ))}
              {item.moderatedBy?.length ? <p>Moderated by</p> : ""}
              {item?.moderatedBy?.length
                ? item.moderatedBy.map((mod: any, index: any) => (
                    <div key={`mod-daytwo-${index}`} className="row-avartar">
                      <li></li>
                      <div className="agenda-avartar"></div>
                      <p>{mod.content}</p>
                    </div>
                  ))
                : ""}
            </div>
          ))
      ) : (
        <></>
      )}
    </div>
  );
};

export default Agenda;
