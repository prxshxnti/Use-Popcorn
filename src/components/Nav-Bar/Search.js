import { useEffect, useRef } from "react";
import { useKey } from "../custom-hooks/useKey";

export function Search({ query, setQuery }) {
  const inputEl = useRef(null);
  useKey("Enter", function (e) {
    if (document.activeElement === inputEl.current) return;
    if (e.code === "Enter") {
      inputEl.current.focus();
      setQuery("");
    }
  });

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputEl}
    />
  );
}
