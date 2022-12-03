export const exportPaths = (location: any) => {
  const paths = [
    {
      path: "",
      label: "ABOUT",
      className: location === "/" ? "link-active" : "link",
    },
    {
      path: "/agenda",
      label: "AGENDA",
      className: location === "/agenda" ? "link-active" : "link",
    },
    {
      path: "/sponsor",
      label: "SPONSOR",
      className: location === "/sponsor" ? "link-active" : "link",
    },
    {
      path: "/speaker",
      label: "SPEAKER",
      className: location === "/speaker" ? "link-active" : "link",
    },
  ];

  return paths;
};
