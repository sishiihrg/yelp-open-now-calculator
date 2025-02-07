import { Box, TextField } from "@mui/material";
import DayAndTime from "./components/DayAndTime";
import { useState } from "react";
import { CssBaseline } from "@mui/material"; // Add CssBaseline for consistent styling

function App() {
    const [calculatedParameter, setCalculatedParameter] = useState("");

    const handleParameterChange = (parameter: string) => {
        setCalculatedParameter(parameter);
    };

    return (
        <>
            <CssBaseline /> {/* Ensure consistent styling */}
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh" p={2} width="100vw">
                <DayAndTime onChangeParameter={handleParameterChange} />
                <TextField
                    variant="outlined"
                    label="Yelp open_now parameter"
                    defaultValue={calculatedParameter}
                    slotProps={{
                        input: {
                            readOnly: true,
                        },
                        inputLabel: {
                            shrink: true,
                        },
                    }}
                    sx={{ mt: 4, width: '300px' }}
                />
            </Box>
        </>
    );
}

export default App;
