"use client";

import Link from "next/link";
import css from "./SidebarNotes.module.css";
import type { NoteTag } from "@/types/note";

interface SidebarNotesProps {
  tags: NoteTag[];
  currentTag?: NoteTag | "All";
}

export default function SidebarNotes({ tags, currentTag }: SidebarNotesProps) {
  return (
    <nav aria-label="Notes filter navigation">
      <ul className={css.menuList}>
        <li className={css.menuItem}>
          <Link
            href="/notes/filter/All"
            className={css.menuLink}
            aria-current={currentTag === "All" ? "page" : undefined}
          >
            All Notes
          </Link>
        </li>
        {tags.map((tag) => (
          <li key={tag} className={css.menuItem}>
            <Link
              href={`/notes/filter/${tag}`}
              className={css.menuLink}
              aria-current={currentTag === tag ? "page" : undefined}
            >
              {tag}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
