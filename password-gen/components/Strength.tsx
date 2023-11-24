import styles from "./styles/Strength.module.css";

interface StrengthProps {
  strength: number;
}

export const Strength = ({ strength }: StrengthProps) => {
  // Create an object to define Strength status
  const strengthLevel: Record<number, string> = {
    1: "too weak",
    2: "weak",
    3: "medium",
    4: "strong",
  };

  // Create an object to define the various sets of colors based on strength
  const spanBg: Record<number, string> = {
    1: `var(--red)`,
    2: `var(--amber)`,
    3: `var(--yellow)`,
    4: `var(--accent)`,
  };

  const spanStyle =
    strength > 0
      ? {
          backgroundColor: spanBg[strength],
          border: `none`,
        }
      : {};

  const strengthMessage = strengthLevel[strength];
  const spanElements = Array.from({ length: 4 }, (_, index) => (
    <span key={index} style={index < strength ? spanStyle : {}}></span>
  ));

  return (
    <div className={styles.container}>
      Strength
      <div className={styles.status}>
        {" "}
        {strength}
        <span className={styles.statusmessage}>{strengthMessage}</span>
        <div className={styles.statusboxes}>{spanElements}</div>
      </div>
    </div>
  );
};
