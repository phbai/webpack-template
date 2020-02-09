import React from "react";
import style from "./index.less";

export default function Container({ children, className }: any) {
  return (
    <div className={`${[style.container, className].join(" ")}`}>
      {children}
    </div>
  );
}
