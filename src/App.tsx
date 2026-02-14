import { useEffect, useState } from "react";

function TimeSince() {
  const startDate = new Date("2022-06-01T00:00:00");

  const calculateTime = () => {
    const now = new Date();
    const diff = now.getTime() - startDate.getTime();

    const totalSeconds = Math.floor(diff / 1000);

    const days = Math.floor(totalSeconds / (60 * 60 * 24));
    const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = totalSeconds % 60;

    return { days, hours, minutes, seconds };
  };

  const [time, setTime] = useState(calculateTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(calculateTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        marginTop: "17px",
        fontFamily: "monospace",
        fontSize: "15px",
        color: "#ffffffd2",
        textAlign: "center",
      }}
    >
      <div className="mb-1">Tiempo que paso desde nuestro día</div>
      <strong>
        {time.days} days · {time.hours}h · {time.minutes}m · {time.seconds}s
      </strong>
    </div>
  );
}

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "60vh",
        cursor: "pointer",
        marginTop: "150px",
      }}
      onClick={() => setOpen(!open)}
    >
      {/* CARD */}
      <svg
        width="320"
        height="320"
        viewBox="0 0 320 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: "visible" }}
      >
        {/* Tapa superior */}
        <path
          d="M0 96L157.942 1.23479C159.209 0.474751 160.791 0.474752 162.058 1.23479L320 96V216.5H0V96Z"
          fill="#F8B9B4"
        />

        {/* CARTA */}
        <g
          style={{
            transform: open
              ? "translate(0px, -110px)"
              : "translate(0px, 48px)",
            transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <path d="M303 271V57H16V271H303Z" fill="#FFEBD2" />
          <rect x="16" y="57" width="287" height="9" fill="#FFD59F" />

          <foreignObject x="24" y="65" width="272" height="190">
            <div
              style={{
                fontSize: "11.3px",
                fontWeight: "600",
                color: "#000",
                opacity: "0.55",
                lineHeight: "1.4",
                padding: "4px 6px",
                fontFamily: "Inter",
                marginTop:"-3px"
              }}
            >
              <p style={{ marginBottom: "8px", marginTop: "17px" }}>
                Para mi persona favorita
              </p>

              <p>
                Desde que te conocí <strong style={{ color: "#fd364a", textDecoration: "underline" }} > me enamore</strong> de vos, la persona más hermosa, dulce, preciosa y unica que quiero siempre a mi ladito.
                <br />
                <br />
                Mi mayor deseo es pasar toda mi vida con vos, deseo tanto encontrarnos siempre juntos.
                <br />
                <br />
                <strong>Gracias por estar en mi vida </strong>
                <br />
                Con amor, Mauri.
                <span className="absolute top-28 -right-17" style={{ display: "absolute", whiteSpace: "pre", fontFamily: "monospace" }}>
{`
                            
  (\\(\\    (\\(\\  
 (♡ ω ♡) (^ ω ^)
o(  ა૮) 💗૮   )o
`}
                </span>

                          

              </p>
            </div>
          </foreignObject>
        </g>

        {/* Parte inferior */}
        <path d="M0 160L160 225L320 160V320H0V160Z" fill="#FBDFDC" />
        <path d="M0 160L160 288L0 320V160Z" fill="#FBDFDC" />
        <path d="M320 160L160 288L320 320V160Z" fill="#FBDFDC" />

        {/* Corazón */}
        <path
          d="M160 219.069C160 203.681 142.583 197.525 135.118 212.913C127.654 228.302 160 256 160 256C160 256 192.346 228.302 184.882 212.913C177.417 197.525 160 203.681 160 219.069Z"
          fill="#EB6461"
        />
        <text
          x="160"
          y="238"
          textAnchor="middle"
          fill="white"
          opacity={0.9}
          fontSize="19"
          fontWeight="600"
        >
          N
        </text>
      </svg>

      {/* CONTADOR */}
      <TimeSince />
    </div>
  );
}

export default App;
