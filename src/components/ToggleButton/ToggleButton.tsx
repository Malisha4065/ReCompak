import React, { ReactNode } from "react";
import styles from "./ToggleButton.module.css";

export interface ToggleButtonProps {
  onToggle?: (checked: boolean) => void;
  variant?: "primary" | "secondary";
}

const ToggleButton: React.FC<ToggleButtonProps> = ({
  onToggle,
  variant = "primary",
}): ReactNode => {
  const handleToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onToggle) onToggle(event.target.checked);
  };

  return (
    <label className={`${styles.switch}`}>
      <input type="checkbox" onChange={handleToggle} />
      <span className={`${styles.slider} ${styles.round}`}></span>
    </label>
  );
};

export default ToggleButton;
