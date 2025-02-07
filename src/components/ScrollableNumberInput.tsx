import { useEffect, useRef, useState } from "react";
import { FormControl, InputLabel, TextField } from "@mui/material";

interface ScrollableNumberInputProps {
    step: number;
    value: number;
    valueMap: { [key: number]: string };
    onChange: (value: number) => void;
    label: string;
}

function ScrollableNumberInput({
    step,
    value,
    valueMap,
    onChange,
    label,
}: ScrollableNumberInputProps) {
    const [inputValue, setInputValue] = useState(value); // Store displayed value
    const inputRef = useRef<HTMLInputElement>(null);

    const keys = Object.keys(valueMap)
        .map(Number)
        .filter((key) => Number.isInteger(key));
    const min = Math.min(...keys);
    const max = Math.max(...keys);

    useEffect(() => {
        setInputValue(value); // Sync displayed value with prop value
    }, [value]);

    useEffect(() => {
        const inputElement = inputRef.current;

        const handleWheel = (e: WheelEvent) => {
            e.preventDefault(); // Prevent page scrolling

            const delta = Math.sign(e.deltaY); // -1 for down, 1 for up
            let newValue = inputValue || 0; // Parse or default to 0

            newValue += delta * step;

            if (newValue > max) {
                newValue = min;
            } else if (newValue < min) {
                newValue = max;
            }

            setInputValue(newValue); // Update the displayed value
            onChange(newValue); // Call the parent's onChange
        };

        if (inputElement) {
            inputElement.addEventListener(
                "wheel",
                handleWheel as EventListener,
                { passive: false }
            );
        }

        return () => {
            if (inputElement) {
                inputElement.removeEventListener(
                    "wheel",
                    handleWheel as EventListener
                );
            }
        };
    }, [inputValue, min, max, step, onChange]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault(); // Prevent default behavior
        const newValue = parseFloat(e.target.value);
        setInputValue(newValue); // Update displayed value
        if (!isNaN(newValue)) {
            onChange(newValue); // Call onChange only if it's a valid number
        }
    };

    return (
        <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel shrink>{label}</InputLabel>
            <TextField
                label={label}
                type="text" // Use text type for better control
                ref={inputRef}
                value={valueMap[inputValue] || ""}
                onChange={handleInputChange}
                slotProps={{
                    input: {
                        readOnly: true,
                    },
                }}
            />
        </FormControl>
    );
}

export default ScrollableNumberInput;
