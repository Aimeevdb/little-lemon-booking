import { useState } from "react";
import "../styles/components/dropdown.css";

export default function Dropdown({ label, options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleSelect(option) {
    onChange(option);
    setIsOpen(false);
  }

  return (
    <div className="dropdown">
      <button
        type="button"
        className={`dropdown-trigger ${value ? "selected" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{value || label}</span>
        <span className="chevron">{isOpen ? "▲" : "▼"}</span>
      </button>

      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option) => (
            <li
              key={option}
              className="dropdown-option"
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
