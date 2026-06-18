import styles from "./SparkleButton.module.css";
import type { MouseEventHandler } from "react";

type SparkleButtonProps = {
  href: string;
  label: string;
  className?: string;
  download?: boolean;
  newTab?: boolean;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  size?: "default" | "compact";
};

/** Animated sparkle button — from Uiverse.io by MuhammadHasann. Rendered as a link. */
export default function SparkleButton({
  href,
  label,
  className,
  download,
  newTab,
  onClick,
  size = "default",
}: SparkleButtonProps) {
  const classes = [
    styles.button,
    size === "compact" ? styles.compact : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <a
      href={href}
      download={download}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noopener noreferrer" : undefined}
      onClick={onClick}
      className={classes}
      aria-label={label}
    >
      <div className={styles.dots_border} />
      <svg
        className={styles.sparkle}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          className={styles.path}
          d="M14.187 8.096L15 5.25L15.813 8.096C16.0231 8.83114 16.4171 9.50062 16.9577 10.0413C17.4984 10.5819 18.1679 10.9759 18.903 11.186L21.75 12L18.904 12.813C18.1689 13.0231 17.4994 13.4171 16.9587 13.9577C16.4181 14.4984 16.0241 15.1679 15.814 15.903L15 18.75L14.187 15.904C13.9769 15.1689 13.5829 14.4994 13.0423 13.9587C12.5016 13.4181 11.8321 13.0241 11.097 12.814L8.25 12L11.096 11.187C11.8311 10.9769 12.5006 10.5829 13.0413 10.0423C13.5819 9.50162 13.9759 8.83214 14.186 8.097L14.187 8.096Z"
        />
        <path
          className={styles.path}
          d="M6 14.25L5.741 15.285C5.59267 15.8785 5.28579 16.4206 4.85319 16.8532C4.42059 17.2858 3.87853 17.5927 3.285 17.741L2.25 18L3.285 18.259C3.87853 18.4073 4.42059 18.7142 4.85319 19.1468C5.28579 19.5794 5.59267 20.1215 5.741 20.715L6 21.75L6.259 20.715C6.40733 20.1215 6.71421 19.5794 7.14681 19.1468C7.57941 18.7142 8.12147 18.4073 8.715 18.259L9.75 18L8.715 17.741C8.12147 17.5927 7.57941 17.2858 7.14681 16.8532C6.71421 16.4206 6.40733 15.8785 6.259 15.285L6 14.25Z"
        />
        <path
          className={styles.path}
          d="M6.5 4L6.303 4.5915C6.21043 4.87166 6.05661 5.12435 5.85661 5.32435C5.65661 5.52435 5.40392 5.67817 5.12376 5.77074L4.5 6L5.124 6.197C5.40416 6.28957 5.65685 6.44339 5.85685 6.64339C6.05685 6.84339 6.21067 7.09608 6.30324 7.37624L6.5 8L6.697 7.376C6.78957 7.09584 6.94339 6.84315 7.14339 6.64315C7.34339 6.44315 7.59608 6.28933 7.87624 6.19676L8.5 6L7.876 5.803C7.59584 5.71043 7.34315 5.55661 7.14315 5.35661C6.94315 5.15661 6.78933 4.90392 6.69676 4.62376L6.5 4Z"
        />
      </svg>
      <span className={styles.text_button}>{label}</span>
    </a>
  );
}
