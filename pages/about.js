import React from "react";
import Github from "../assets/github.svg";

function About() {
  return (
    <>
      <h1>Hello,</h1>

      <p
        style={{
          fontFamily: "NotoSansKR-Thin, MalgunGothic",
          fontSize: "11pt",
          lineHeight: "22pt",
          letterSpacing: ".8px",
        }}
      >
        안녕하세요 저는 프론트엔드 개발자 이찬행 입니다.
        <br />
        이것 저것 개발하며 지내고 있습니다.
      </p>

      <br />

      <a href="https://github.com/o-henry" target="_blank">
        <Github style={{ fontSize: "20px", color: "var(--color-primary)" }} />
      </a>
    </>
  );
}

export default About;
