import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import { Eventcalendar, getJson, setOptions, Toast } from "@mobiscroll/react";
import { useCallback, useEffect, useMemo, useState } from "react";
import Header from "../header/header";

setOptions({
  theme: "ios",
  themeVariant: "light",
});

export default function Calendar() {
  const [myEvents, setEvents] = useState([]);
  const [isToastOpen, setToastOpen] = useState(false);
  const [toastText, setToastText] = useState();

  const handleToastClose = useCallback(() => {
    setToastOpen(false);
  }, []);

  const handleEventClick = useCallback((args) => {
    setToastText(args.event.title);
    setToastOpen(true);

    console.log(args.event);
  }, []);

  const myView = useMemo(() => ({ calendar: { labels: true } }), []);
  const myResponsive = useMemo(
    () => ({
      xsmall: {
        view: {
          calendar: { type: "week" },
          agenda: { type: "day" },
        },
      },
      custom: {
        // Custom breakpoint
        breakpoint: 600,
        view: {
          calendar: { labels: true },
        },
      },
    }),
    []
  );

  useEffect(() => {
    getJson(
      "https://trial.mobiscroll.com/events/?vers=5",
      (events) => {
        setEvents(events);
      },
      "jsonp"
    );
  }, []);

  console.log(myEvents);

  return (
    <>
      <Header />
      <div style={{ padding: "30px" }}>
        <Eventcalendar
          clickToCreate={false}
          dragToCreate={false}
          dragToMove={false}
          dragToResize={false}
          eventDelete={false}
          data={myEvents}
          view={myView}
          responsive={myResponsive}
          onEventClick={handleEventClick}
        />
        <Toast
          message={toastText}
          isOpen={isToastOpen}
          onClose={handleToastClose}
        />
      </div>
    </>
  );
}
