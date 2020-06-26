import React from "react";

export default function Form() {
  return (
    <form>
      <input
        type="text"
        placeholder="search city name..."
        class="text-input"
        autoComplete="off"
        autoFocus="on"
      />
      <input type="submit" value="search" class="submit-button" />
    </form>
  );
}
