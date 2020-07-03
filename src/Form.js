import React from "react";

export default function Form() {
  return (
    <form>
      <input
        type="text"
        placeholder="search city name..."
        className="text-input"
        autoComplete="off"
        autoFocus="on"
      />
      <input type="submit" value="search" className="submit-button" />
    </form>
  );
}
