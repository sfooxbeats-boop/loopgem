"use client";
import { useState, useEffect } from "react";

function WhatsAppIcon({ size = 24 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.737 5.469 2.027 7.773L0 32l8.418-2.004A15.94 15.94 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.784-1.858l-.486-.288-5.003 1.192 1.24-4.865-.317-.499A13.27 13.27 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.874c-.398-.199-2.353-1.162-2.718-1.294-.365-.133-.63-.199-.896.199-.265.398-1.029 1.294-1.261 1.56-.232.265-.465.298-.863.1-.398-.199-1.681-.62-3.202-1.977-1.184-1.056-1.983-2.36-2.215-2.758-.232-.398-.025-.613.174-.811.179-.178.398-.465.597-.697.199-.232.265-.398.398-.664.133-.265.066-.497-.033-.696-.1-.199-.896-2.16-1.228-2.957-.323-.776-.65-.671-.896-.683l-.763-.013c-.265 0-.696.1-1.061.497-.365.398-1.394 1.362-1.394 3.322s1.428 3.854 1.627 4.12c.199.265 2.81 4.29 6.808 6.018.951.41 1.693.655 2.271.839.954.303 1.823.26 2.51.158.766-.114 2.353-.962 2.685-1.89.332-.928.332-1.724.232-1.89-.099-.166-.365-.265-.763-.464z" />
    </svg>
  );
}

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("wa_dismissed");
    if (!dismissed) {
      const t = setTimeout(() => setOpen(true), 2500);
      return () => clearTimeout(t);
    }
  }, []);

  const close = () => {
    setOpen(false);
    sessionStorage.setItem("wa_dismissed", "1");
  };

  const toggle = () => {
    if (open) {
      close();
    } else {
      setOpen(true);
    }
  };

  return (
    <div className="wa-widget">
      {/* Popup card */}
      <div className={`wa-popup ${open ? "wa-popup--open" : ""}`} role="dialog" aria-label="Chat with Sfooxbeats on WhatsApp">
        {/* Header */}
        <div className="wa-popup-header">
          <div className="wa-popup-avatar">S</div>
          <div className="wa-popup-info">
            <div className="wa-popup-name">Sfooxbeats</div>
            <div className="wa-popup-status">
              <span className="wa-online-dot" />
              Online
            </div>
          </div>
          <button onClick={close} className="wa-popup-close" aria-label="Close chat">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="1" y1="1" x2="13" y2="13" />
              <line x1="13" y1="1" x2="1" y2="13" />
            </svg>
          </button>
        </div>

        {/* Message bubble */}
        <div className="wa-popup-body">
          <div className="wa-popup-bubble">
            Hey 👋 Got a question about my courses or coaching? Talk to me directly — I&apos;m here to help!
          </div>
        </div>

        {/* CTA */}
        <div className="wa-popup-footer">
          <a
            href="https://wa.me/212694569906"
            target="_blank"
            rel="noopener noreferrer"
            className="wa-popup-cta"
          >
            <WhatsAppIcon size={20} />
            Start the conversation
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <p className="wa-popup-note">Usually replies in minutes</p>
        </div>
      </div>

      {/* FAB toggle button */}
      <button onClick={toggle} className="wa-fab" aria-label={open ? "Close chat" : "Chat on WhatsApp"}>
        {!open && <span className="wa-fab-badge">1</span>}
        <span className={`wa-fab-icon ${open ? "wa-fab-icon--hidden" : ""}`}>
          <WhatsAppIcon size={28} />
        </span>
        <span className={`wa-fab-icon wa-fab-icon--close ${open ? "" : "wa-fab-icon--hidden"}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="3" y1="3" x2="21" y2="21" />
            <line x1="21" y1="3" x2="3" y2="21" />
          </svg>
        </span>
      </button>
    </div>
  );
}
