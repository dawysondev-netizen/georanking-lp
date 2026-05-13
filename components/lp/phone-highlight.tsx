import { Phone } from "lucide-react";

import { cn } from "@/lib/utils";
import { WHATSAPP_PHONE_DISPLAY } from "@/lib/whatsapp";

interface PhoneHighlightProps {
  /** Render an icon before the number */
  withIcon?: boolean;
  /** Wrap each number group in its Google color */
  variant?: "google" | "plain";
  /** Custom className applied to the outer span */
  className?: string;
  /** Override the displayed number */
  display?: string;
}

/**
 * Visual highlight for the 0800 800 1700 number.
 * Each block is rendered in one of the Google logo colors.
 */
export function PhoneHighlight({
  withIcon = false,
  variant = "google",
  className,
  display = WHATSAPP_PHONE_DISPLAY,
}: PhoneHighlightProps) {
  if (variant === "plain") {
    return (
      <span className={cn("inline-flex items-center gap-1.5 font-bold", className)}>
        {withIcon && <Phone className="size-4" aria-hidden="true" />}
        {display}
      </span>
    );
  }

  // Split "0800 800 1700" → ["0800", "800", "1700"]
  const blocks = display.split(/\s+/);
  const colors = ["#4285F4", "#EA4335", "#34A853"]; // blue, red, green

  return (
    <span
      className={cn("inline-flex items-baseline gap-1.5 font-bold tracking-tight", className)}
      aria-label={display}
    >
      {withIcon && (
        <span
          className="inline-flex size-7 items-center justify-center self-center rounded-full"
          style={{
            background:
              "linear-gradient(135deg, #4285F4 0%, #34A853 35%, #FBBC04 65%, #EA4335 100%)",
          }}
          aria-hidden="true"
        >
          <Phone className="size-3.5 text-white" aria-hidden="true" />
        </span>
      )}
      {blocks.map((block, i) => (
        <span key={`${block}-${i}`} style={{ color: colors[i % colors.length] }}>
          {block}
        </span>
      ))}
    </span>
  );
}
