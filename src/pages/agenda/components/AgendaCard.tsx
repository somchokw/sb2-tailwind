import React from "react";
import { AkiraMitsumasu } from "../../../static/images";

interface AgendaCardProps {
  data: any;
  filterDay: number;
}

export const AgendaCard: React.FC<AgendaCardProps> = (
  props: AgendaCardProps
) => {
  const { data, filterDay } = props;

  return (
    <>
      {data?.length ? (
        data
          .filter((item: any, index: any) => item.day === filterDay)
          .map((item: any, index: any) => (
            <div key={`${filterDay}-${index}`} className="agenda-card">
              <p className="agenda-text-label">{item.label}</p>
              <p className="agenda-text-time"> {item.periodFirst} </p>
              <p className="agenda-text-time"> {item.periodSecond} </p>
              <p className="agenda-text-time" style={{ paddingBottom: "16px" }}>
                {item.periodThird}
              </p>
              <div className="extra-content">
                <p className="agenda-content-text-1">
                  {item.extraContent?.content}
                </p>
                <p className="agenda-content-text-2">
                  {item.extraContent?.content1}
                </p>
                <p className="agenda-content-text-2">
                  {item.extraContent?.content2}
                </p>
              </div>
              <div>
                <p>
                  {item.specialContent?.content}
                  <a
                    className="hyperlink-agenda"
                    href={item.specialContent?.link}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {item.specialContent?.link}
                  </a>
                </p>
              </div>

              {item.lecturers.map((lec: any, index: any) => (
                <div key={`lec-${filterDay}-${index}`} className="row-avartar">
                  <li></li>

                  <img
                    className="agenda-avartar"
                    src={lec.avartar}
                    alt="avartar-pic"
                  />

                  <p
                    className="agenda-text-content"
                    style={{ marginLeft: "8px" }}
                  >
                    {lec.content}
                  </p>
                </div>
              ))}
              {item.moderatedBy?.length ? (
                <p
                  className="agenda-text"
                  style={{
                    fontSize: "16px",
                  }}
                >
                  Moderated by
                </p>
              ) : (
                ""
              )}
              {item?.moderatedBy?.length
                ? item.moderatedBy.map((mod: any, index: any) => (
                    <div
                      key={`mod-${filterDay}-${index}`}
                      className="row-avartar"
                    >
                      <li></li>
                      <img
                        className="agenda-avartar"
                        src={mod.avartar}
                        alt="avartar-pic"
                      />
                      <p
                        className="agenda-text-content"
                        style={{ marginLeft: "8px" }}
                      >
                        {mod.content}
                      </p>
                    </div>
                  ))
                : ""}
            </div>
          ))
      ) : (
        <></>
      )}
    </>
  );
};

export default AgendaCard;
