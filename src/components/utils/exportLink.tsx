export const exportPaths = (location: any) => {
  const paths = [
    {
      path: "",
      label: "ABOUT",
      className: location === "" ? "link-active" : "link",
    },
    {
      path: "/agenda",
      label: "AGENDA",
      className: location === "agenda" ? "link-active" : "link",
    },
    {
      path: "/speaker",
      label: "SPEAKERS",
      className: location === "speaker" ? "link-active" : "link",
    },
    {
      path: "/sponsor",
      label: "SPONSORS",
      className: location === "sponsor" ? "link-active" : "link",
    },
  ];

  return paths;
};
