import { useState, useEffect } from "react";

export default function Clock() {
  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 1000);
  }, []);
  return (
    <div className="flex flex-row-reverse gap-2 md:flex-row">
      <span>{dateState.toLocaleString()}</span>
      <span>❍</span>
    </div>
  );
}
