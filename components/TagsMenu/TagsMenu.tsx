"use client";

import { useState } from "react";
import css from "./TagsMenu.module.css";

const tags = [
  "All",
  "Work",
  "Personal",
  "Meeting",
  "Shopping",
  "Todo",
] as const;

export default function TagsMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const getTagUrl = (tag: string) => {
    if (tag === "All") return "/notes/filter/All";
    return `/notes/filter/${tag}`;
  };

  return (
    <div className={css.menuContainer}>
      <button
        className={css.menuButton}
        onClick={() => setIsOpen(!isOpen)}
        onBlur={() => setTimeout(() => setIsOpen(false), 150)}
      >
        Notes ▾
      </button>

      {isOpen && (
        <ul className={css.menuList}>
          {tags.map((tag) => (
            <li key={tag} className={css.menuItem}>
              <a href={getTagUrl(tag)} className={css.menuLink}>
                {tag}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
