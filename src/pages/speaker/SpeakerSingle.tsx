import { useParams } from "react-router-dom";

import avatar from "./avatar";

export const SpeakerSingle = () => {
  let params = useParams();

  const indexAvatar: number = Number(params.id);
  const describeVar = avatar.avatar[indexAvatar].describe ?? null;

  return (
    <div className="flex flex-col items-center pb-10">
      <div className="w-2/3 flex flex-col items-center ">
        <div className="mt-4 w-full flex flex-col items-center">
          <div>
            <img
              alt="avatar"
              src={avatar.avatar[indexAvatar].image}
              width="240px"
            />
          </div>
          <div className="text-center">
            <h1 className="text-2.5xl font-bold mb-3">
              {avatar.avatar[indexAvatar].name}
            </h1>
            <p className="text-l text-green ">
              {avatar.avatar[indexAvatar].header1}
            </p>
            <p className="text-l text-green">
              {avatar.avatar[indexAvatar].header2}
            </p>
          </div>
          <div className="border-b-1px my-1 w-1/2 border-grey " />
        </div>
        <div className="my-5%">
          {avatar.avatar[indexAvatar].detail.length > 0
            ? avatar.avatar[indexAvatar].detail.map(
                (el: any, index: number) => (
                  <div key={`detail=${index}`} className="mb-8">
                    <p className="text-xl font-medium indent-6">{el}</p>
                  </div>
                )
              )
            : null}
          {avatar.avatar[indexAvatar].subDetail &&
          avatar.avatar[indexAvatar].subDetail.length > 0
            ? avatar.avatar[indexAvatar].subDetail.map(
                (el: any, index: number) => (
                  <div key={`subDetail=${index}`} className="mb-2">
                    <p className="text-xl font-medium ">{el}</p>
                  </div>
                )
              )
            : null}
          {describeVar ? (
            <div>
              {describeVar.describTitle1 !== undefined ? (
                <div className="mb-8">
                  <p className="text-xl font-bold mb-2">
                    {describeVar.describTitle1}
                  </p>
                  {describeVar.describe1.map((el: any, index: number) => (
                    <div key={`describe1=${index}`} className="mb-2">
                      <li className="text-xl font-medium indent-6">{el}</li>
                    </div>
                  ))}
                </div>
              ) : null}
              {describeVar.describTitle2 !== undefined ? (
                <div className="mb-2">
                  <p className="text-xl font-bold mb-2">
                    {describeVar.describTitle2}
                  </p>
                </div>
              ) : null}
              {describeVar.describTitle3 !== undefined ? (
                <div className="mb-2">
                  <p className="text-xl font-bold mb-4">
                    {describeVar.describTitle3}
                  </p>
                  {describeVar.describe3.map((el: any, index: number) => (
                    <div
                      key={`describe3=${index}`}
                      className="mb-2 flex items-center "
                    >
                      <p className="text-xl font-medium  w-1/5 ">{el.year}</p>
                      <p className="text-xl font-medium  w-3/5">{el.data}</p>
                    </div>
                  ))}
                </div>
              ) : null}
              {describeVar.describTitle4 !== undefined ? (
                <div className="mb-8">
                  <p className="text-xl font-bold mb-4">
                    {describeVar.describTitle4}
                  </p>
                  {describeVar.describe4.map((el: any, index: number) => (
                    <div
                      key={`describe4=${index}`}
                      className="mb-2 flex items-center "
                    >
                      <p className="text-xl font-medium  w-1/5 ">{el.year}</p>
                      <p className="text-xl font-medium  w-3/5">{el.data}</p>
                    </div>
                  ))}
                </div>
              ) : null}
              {describeVar.describTitle5 !== undefined ? (
                <div className="mb-8">
                  <p className="text-xl font-bold mb-2">
                    {describeVar.describTitle5}
                  </p>
                  {describeVar.describe5.map((el: any, index: number) => (
                    <div key={`describe5=${index}`} className="mb-2">
                      <li className="text-xl font-medium indent-6">{el}</li>
                    </div>
                  ))}
                </div>
              ) : null}
              {describeVar.subdeScribe !== undefined
                ? describeVar.subdeScribe.map((el: any, index: number) => (
                    <div key={`subdeScribe=${index}`} className="mb-8">
                      <p className="text-xl font-bold mb-2">{el.title}</p>
                      {el.detail.map((element: any, indexElement: number) => (
                        <div key={`detail=${indexElement}`} className="mb-2">
                          <p className="text-xl font-medium indent-6">
                            {element}
                          </p>
                        </div>
                      ))}
                    </div>
                  ))
                : null}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
