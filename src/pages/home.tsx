import React, { useState, useRef, useEffect } from "react";
import { Input, Progress, Button } from "antd";
import _ from "lodash";
import Container from "../components/container/index";
const { Search } = Input;
import style from "./home.less";

export default function Home({ match }: any) {
  const playerRef = React.createRef();
  // const { player, ui, videoElement } = controllerRef.current;

  return (
    <Container className={style.homePage}>
      <p>it works</p>
    </Container>
  );
}
