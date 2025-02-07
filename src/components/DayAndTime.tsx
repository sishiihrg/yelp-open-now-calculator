import { Box } from "@mui/material";
import { useState } from "react";
import ScrollableNumberInput from "./ScrollableNumberInput";
import CustomButton from "./CustomButton";

interface DayAndTimeProps {
    onChangeParameter: (parameter: string) => void;
}

function DayAndTime({ onChangeParameter }: DayAndTimeProps) {
    const [day, setDay] = useState(0);
    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);

    const handleDayChange = (value: number) => {
        setDay(value);
    };

    const handleHourChange = (value: number) => {
        setHour(value);
    };

    const handleMinuteChange = (value: number) => {
        setMinute(value);
    };

    const calculateParameter = () => {
        const totalMinutes = day * 24 * 60 + hour * 60 + minute;

        onChangeParameter(totalMinutes.toString());
    };

    const resetParameter = () => {
        setDay(0);
        setHour(0);
        setMinute(0);
        onChangeParameter("");
    };

    const dayValueMap = {
        0: "Monday",
        1: "Tuesday",
        2: "Wednesday",
        3: "Thursday",
        4: "Friday",
        5: "Saturday",
        6: "Sunday",
    };

    const hourValueMap = {
        0: "00",
        1: "01",
        2: "02",
        3: "03",
        4: "04",
        5: "05",
        6: "06",
        7: "07",
        8: "08",
        9: "09",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
        14: "14",
        15: "15",
        16: "16",
        17: "17",
        18: "18",
        19: "19",
        20: "20",
        21: "21",
        22: "22",
        23: "23",
    };

    const minuteValueMap = {
        0: "00",
        1: "01",
        2: "02",
        3: "03",
        4: "04",
        5: "05",
        6: "06",
        7: "07",
        8: "08",
        9: "09",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
        14: "14",
        15: "15",
        16: "16",
        17: "17",
        18: "18",
        19: "19",
        20: "20",
        21: "21",
        22: "22",
        23: "23",
        24: "24",
        25: "25",
        26: "26",
        27: "27",
        28: "28",
        29: "29",
        30: "30",
        31: "31",
        32: "32",
        33: "33",
        34: "34",
        35: "35",
        36: "36",
        37: "37",
        38: "38",
        39: "39",
        40: "40",
        41: "41",
        42: "42",
        43: "43",
        44: "44",
        45: "45",
        46: "46",
        47: "47",
        48: "48",
        49: "49",
        50: "50",
        51: "51",
        52: "52",
        53: "53",
        54: "54",
        55: "55",
        56: "56",
        57: "57",
        58: "58",
        59: "59",
    };

    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            <Box display="flex" justifyContent="center" mb={2}>
                <ScrollableNumberInput
                    step={1}
                    value={day}
                    onChange={handleDayChange}
                    valueMap={dayValueMap}
                    label="Day"
                />
                <ScrollableNumberInput
                    step={1}
                    value={hour}
                    onChange={handleHourChange}
                    valueMap={hourValueMap}
                    label="Hour"
                />
                <ScrollableNumberInput
                    step={1}
                    value={minute}
                    onChange={handleMinuteChange}
                    valueMap={minuteValueMap}
                    label="Minute"
                />
            </Box>
            <Box display="flex" flexDirection="row" alignItems="center" gap={2}>
                <CustomButton
                    onClick={calculateParameter}
                >
                    Calculate
                </CustomButton>
                <CustomButton
                    onClick={resetParameter}
                >
                    Reset
                </CustomButton>
            </Box>
        </Box>
    );
}

export default DayAndTime;
