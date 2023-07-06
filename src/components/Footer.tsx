import Image from "next/image";

import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        href="https://typescriptlang.org"
        rel="noopener noreferrer"
        target="_blank"
      >
        Powered by{" "} Yo Boy J
        
        {" and "}
        <span className={styles.logo}>
          <Image
            alt="TypeScript"
            height={48}
            src="/typescript.svg"
            width={48}
          />
        </span>
      </a>
    </footer>
  );
}
