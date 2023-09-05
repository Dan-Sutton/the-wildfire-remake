"use client";

import React, { useState } from "react";
import styles from "./faqItem.module.css";

type Props = {
  question: string;
  description: string;
};

export default function FaqItem({ question, description }: Props) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div
      className={styles.faq}
      onClick={() => {
        setExpanded(!expanded);
      }}
    >
      <div className={styles.questionRow}>
        <span className={styles.question}>{question}</span>
        <div className={styles.expandButton}>
          <p className={!expanded ? styles.expandIcon : styles.expandedExit}>
            +
          </p>
        </div>
      </div>
      <div
        className={
          expanded ? styles.descriptionRow : styles.descriptionRowHidden
        }
      >
        {description}
      </div>
    </div>
  );
}
