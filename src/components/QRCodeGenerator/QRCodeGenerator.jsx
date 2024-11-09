import QRCode from "react-qr-code";
import "./QRCodeGenerator.css";

import { useState } from "react";

const QRCodeGenerator = () => {
  const [inputValue, setInputValue] = useState("");
  const [qrCode, setQrCode] = useState("");

  return (
    <>
      <h1>QR Code Generator</h1>
      <section className="input-section">
        <input
          type="text"
          placeholder="Enter your value here"
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            setQrCode(inputValue);
            setInputValue("");
          }}
          disabled={inputValue.trim() === ""}
        >
          Generate
        </button>
      </section>
      <section className="qr-code-section">
        {qrCode ? (
          <>
            <h2>Generating QR Code for {qrCode}</h2>
            <QRCode   size={256} value={qrCode} />
          </>
        ) : (
          <h2>Please enter string ton generate QR Code.</h2>
        )}
      </section>
    </>
  );
};

export default QRCodeGenerator;
