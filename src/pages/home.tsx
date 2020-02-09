import React, { useState } from "react";
import { Input, Progress, Button } from "antd";
import _ from "lodash";
import Container from "../components/container/index";
const { Search } = Input;
import style from "./home.less";

export default function Home({ match }: any) {
  return (
    <Container className={style.homePage}>
      <p>it works</p>
    </Container>
  );
}
