import { useState, useEffect } from "react";

export default function Clock() {
  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 1000);
  }, []);
  return (
    <div className="fixed bottom-3 left-6 text-xs md:left-auto md:right-6 md:text-sm">
      {dateState.toLocaleString()} ❍
    </div>
  );
}
