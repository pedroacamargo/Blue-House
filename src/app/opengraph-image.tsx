import { ImageResponse } from "next/og";

export const alt =
  "Blue House Exquisite Properties — Arquitetura e imobiliário de luxo em Portugal";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          display: "flex",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          color: "#f8f8f6",
          background: "#30416c",
        }}
      >
        <svg
          viewBox="0 0 1200 630"
          width="1200"
          height="630"
          style={{ position: "absolute", inset: 0 }}
          aria-hidden="true"
        >
          <path
            d="M695 85C912 13 1111 133 1163 333"
            fill="none"
            stroke="rgba(181, 164, 119, 0.72)"
            strokeWidth="3"
          />
          <path
            d="M-54 375C2 596 243 702 452 607"
            fill="none"
            stroke="rgba(181, 164, 119, 0.48)"
            strokeWidth="2"
          />
          <path
            d="M742 126C929 71 1081 170 1127 334"
            fill="none"
            stroke="rgba(248, 248, 246, 0.2)"
            strokeWidth="1"
          />
        </svg>

        <div
          style={{
            position: "absolute",
            top: 58,
            left: 70,
            display: "flex",
            alignItems: "center",
            gap: 18,
            color: "rgba(248, 248, 246, 0.7)",
            fontSize: 17,
            letterSpacing: 5,
            textTransform: "uppercase",
          }}
        >
          <span>Lisboa</span>
          <span style={{ color: "#b5a477" }}>·</span>
          <span>Portugal</span>
        </div>

        <div
          style={{
            position: "absolute",
            right: 70,
            bottom: 58,
            left: 70,
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: 760,
            }}
          >
            <span
              style={{
                fontFamily: "Georgia, serif",
                fontSize: 82,
                letterSpacing: -4,
                lineHeight: 1,
              }}
            >
              Blue House
            </span>
            <span
              style={{
                marginTop: 18,
                color: "rgba(248, 248, 246, 0.76)",
                fontSize: 22,
                letterSpacing: 7,
                textTransform: "uppercase",
              }}
            >
              Exquisite Properties
            </span>
          </div>

          <div
            style={{
              display: "flex",
              maxWidth: 285,
              paddingTop: 20,
              borderTop: "1px solid rgba(181, 164, 119, 0.7)",
              color: "rgba(248, 248, 246, 0.72)",
              fontSize: 18,
              letterSpacing: 2,
              lineHeight: 1.5,
              textAlign: "right",
            }}
          >
            Arquitetura &amp; Imobiliário
          </div>
        </div>

        <span
          style={{
            position: "absolute",
            top: 160,
            right: 92,
            display: "flex",
            color: "rgba(248, 248, 246, 0.06)",
            fontFamily: "Georgia, serif",
            fontSize: 250,
            letterSpacing: -26,
          }}
        >
          BH
        </span>
      </div>
    ),
    {
      ...size,
    },
  );
}
