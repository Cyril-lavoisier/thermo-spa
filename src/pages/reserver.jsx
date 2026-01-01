import React, { useEffect, useState } from "react";

export default function BookingEngine() {
  const [iframeUrl, setIframeUrl] = useState("");

  useEffect(() => {
    const webKey = "yKQQzQaEYmoLg08tBSzBA4CCn";
    const url = new URL(window.location.href);

    const appart = url.searchParams.get("appart");
    const checkin = url.searchParams.get("checkin");
    const checkout = url.searchParams.get("checkout");
    const adults = url.searchParams.get("adults");
    const children = url.searchParams.get("children");
    const lang = url.searchParams.get("lang") || "fr";

    let finalUrl;

    if (!appart) {
      if (checkin) {
        finalUrl =
          `https://app.superhote.com/#/get-available-rentals/${webKey}` +
          `?startDate=${checkin}` +
          `&endDate=${checkout}` +
          `&adultsNumber=${adults}` +
          `&childrenNumber=${children}` +
          `&lang=${lang}`;
      } else {
        finalUrl =
          `https://app.superhote.com/#/get-available-rentals/${webKey}?lang=${lang}`;
      }
    } else {
      finalUrl = `https://app.superhote.com/#/rental/${appart}?lang=${lang}`;
    }

    setIframeUrl(finalUrl);
  }, []);

  return (
    <iframe
      src={iframeUrl}
      style={{ display: "block" }}
      width="100%"
      height="5500"
      frameBorder="0"
      scrolling="no"
      allowFullScreen
      title="SuperHote Booking Engine"
    />
  );
}