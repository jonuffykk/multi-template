"use client";

import type { AnchorHTMLAttributes, MouseEvent } from "react";

type ExternalLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

export function ExternalLink({ href, onClick, ...props }: ExternalLinkProps) {
  async function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);

    if (typeof window !== "undefined" && "__TAURI_INTERNALS__" in window) {
      event.preventDefault();
      const { openUrl } = await import("@tauri-apps/plugin-opener");
      await openUrl(href);
    }
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" onClick={handleClick} {...props} />
  );
}
