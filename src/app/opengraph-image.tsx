import { ImageResponse } from "next/og";

export const alt =
  "LoopGem — learn to sell beats and make money as a music producer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f7f3ea",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "22px" }}>
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "16px",
              background: "#e11d2c",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "34px",
                height: "34px",
                background: "#f7f3ea",
                transform: "rotate(45deg)",
              }}
            />
          </div>
          <div style={{ display: "flex", fontSize: "46px", fontWeight: 800 }}>
            <span style={{ color: "#0c0a05" }}>Loop</span>
            <span style={{ color: "#e11d2c" }}>Gem</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: "70px",
              fontWeight: 800,
              color: "#0c0a05",
              lineHeight: 1.05,
              maxWidth: "980px",
            }}
          >
            Sell beats. Make money as a music producer.
          </div>
          <div style={{ display: "flex", fontSize: "34px", color: "#57534e" }}>
            Courses + 1-on-1 coaching from Sfooxbeats
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", fontSize: "30px", fontWeight: 700, color: "#e11d2c" }}>
            loopgem.com
          </div>
          <div style={{ display: "flex", fontSize: "26px", color: "#57534e" }}>
            Top-Rated on Fiverr · $127k+ · 2,019 orders
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
