import React, { useState, useRef, useEffect } from "react";
import { Input, Progress, Button } from "antd";
import _ from "lodash";
import Container from "../components/container/index";
import style from "./home.less";
import { rootStoreValue } from "src/hooks/useStore";

export default function Home({ match }: any) {
  const { user } = rootStoreValue;
  return (
    <Container className={style.homePage}>
      <p>{user.name}</p>
    </Container>
  );
}
