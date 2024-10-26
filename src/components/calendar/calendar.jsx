import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import { Eventcalendar, getJson, setOptions, Toast } from "@mobiscroll/react";
import { useCallback, useEffect, useMemo, useState } from "react";

setOptions({
  theme: "ios",
  themeVariant: "light",
});

function App() {
  const [myEvents, setEvents] = useState([]);
  const [isToastOpen, setToastOpen] = useState(false);
  const [toastText, setToastText] = useState();

  const handleToastClose = useCallback(() => {
    setToastOpen(false);
  }, []);

  const handleEventClick = useCallback((args) => {
    setToastText(args.event.title);
    setToastOpen(true);
  }, []);

  const myView = useMemo(() => ({ calendar: { labels: true } }), []);

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
      <Eventcalendar
        clickToCreate={false}
        dragToCreate={false}
        dragToMove={false}
        dragToResize={false}
        eventDelete={false}
        data={myEvents}
        view={myView}
        onEventClick={handleEventClick}
      />
      <Toast
        message={toastText}
        isOpen={isToastOpen}
        onClose={handleToastClose}
      />
    </>
  );
}

export default App;
