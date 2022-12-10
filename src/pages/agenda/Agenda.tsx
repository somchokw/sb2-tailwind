import React from "react";
import { exportAgendaData } from "../../components/utils";
import { AgendaCard, PaginateEngine } from "./components";

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
      <PaginateEngine
        btnActive={btnActive}
        handleActiveBtn={handleActiveBtn}
        onChangeSearch={onChangeSearch}
        onSubmitSearch={onSubmitSearch}
      />

      {(btnActive === "all" || btnActive === 1) && (
        <div style={{ paddingTop: "20px" }}>
          <p className="agenda-text">DAY 1</p>
          <p className="agenda-text">Thursday, February 24, 2022</p>
        </div>
      )}

      <AgendaCard data={data} filterDay={1} />

      {(btnActive === "all" || btnActive === 2) && (
        <div style={{ paddingTop: "30px" }}>
          <p className="agenda-text">DAY 2</p>
          <p className="agenda-text">Friday, February 25, 2022</p>
        </div>
      )}

      <AgendaCard data={data} filterDay={2} />
    </div>
  );
};

export default Agenda;
