import styles from "@/styles/numinput.module.css";

// 数字しか入力させないInput
export default function NumberInput({
  value,
  setValue,
  placeholder = "",
}: {
  value: string;
  setValue: (value: string) => void;
  placeholder?: string;
}) {
  const onValueChange = (value: string) => {
    const num = Number(value);
    if (num) {
      setValue(value);
    } else if (value === "") {
      setValue("");
    }
  };

  return (
    <>
      <input
        type="text"
        inputMode="numeric"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onValueChange(e.target.value)}
        className={styles.numinput}
      />
    </>
  );
}
