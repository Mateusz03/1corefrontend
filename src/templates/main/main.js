import { useEffect, useState } from "react";
import * as Component from "./main.style.js";
import { Route, Routes } from "react-router-dom";
import Help from "../help/help.js";
import Global from "../global/global.js";
import Technicians from "../technicians/technicians.js";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const [line, setLine] = useState(null);
  const [currentPath, setCurrentPath] = useState("help");
  const navigate = useNavigate();

  const mouseEnter = (number) => {
    setLine(number);
  };

  useEffect(() => {
    if (currentPath === "help") navigate("/help");
  }, [navigate, currentPath]);

  const setPath = (path) => {
    navigate(`/${path}`);
    setCurrentPath(path);
  };

  const mouseOver = () => setLine(null);

  return (
    <Component.Main>
      <Component.Header>
        <Component.LogoContainer
          onClick={() => {
            setPath("help");
          }}
        >
          <Component.Logo color="orange">1</Component.Logo>
          <Component.Logo color="white">core</Component.Logo>
          <Component.LogoText>statistics</Component.LogoText>
        </Component.LogoContainer>
        <Component.List>
          <Component.ListItem
            onClick={() => {
              setPath("technicians");
            }}
            onMouseEnter={() => {
              mouseEnter(1);
            }}
            onMouseLeave={mouseOver}
          >
            Technicians
            {line === 1 ? (
              <Component.UnderLine on="true" />
            ) : (
              <Component.UnderLine on="false" />
            )}
          </Component.ListItem>
          <Component.ListItem
            onClick={() => {
              setPath("global");
            }}
            onMouseEnter={() => {
              mouseEnter(2);
            }}
            onMouseLeave={mouseOver}
          >
            Global
            {line === 2 ? (
              <Component.UnderLine on="true" />
            ) : (
              <Component.UnderLine on="false" />
            )}
          </Component.ListItem>
        </Component.List>
      </Component.Header>
      <Component.Container>
        <Routes>
          <Route path="/help" element={<Help />} />
          <Route path="/global" element={<Global />} />
          <Route path="/technicians" element={<Technicians />} />
        </Routes>
      </Component.Container>
      <Component.Footer>
        The application does not constitute an official determinant of the
        number of points
      </Component.Footer>
    </Component.Main>
  );
};

export default Main;
