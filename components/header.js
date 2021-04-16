import Link from "next/link";

export default function Header() {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ flex: 9 }}>
          <Link href="/">
            <a>
              <h1 style={{ fontSize: "1.125rem" }}>Henry</h1>
            </a>
          </Link>
        </div>

        <div style={{ flexShrink: "0", width: "15px" }}></div>

        <Link href="/blog">
          <a>
            <h2 style={{ fontSize: "0.825rem" }}>Blog</h2>
          </a>
        </Link>

        <div style={{ flexShrink: "0", width: "15px" }}></div>

        <Link href="/about">
          <a>
            <h2 style={{ fontSize: "0.825rem" }}>About</h2>
          </a>
        </Link>
      </div>
    </>
  );
}