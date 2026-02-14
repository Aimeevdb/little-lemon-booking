import { useState, useRef, useEffect } from "react";
import "../styles/components/dropdown.css";

export default function Dropdown({ label, options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef(null);
  const listRef = useRef(null);

  function handleSelect(option) {
    onChange(option);
    setIsOpen(false);
  }

  // Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (
        listRef.current &&
        !listRef.current.contains(e.target) &&
        !buttonRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="dropdown">
      <button
        ref={buttonRef}
        type="button"
        className={`dropdown-trigger ${value ? "selected" : ""}`}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{value || label}</span>
        <span className="chevron">{isOpen ? "▲" : "▼"}</span>
      </button>

      {isOpen && (
        <ul
          ref={listRef}
          className="dropdown-menu"
          role="listbox"
          aria-label={label}
        >
          {options.map((option) => (
            <li
              key={option}
              role="option"
              aria-selected={value === option}
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
