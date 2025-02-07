import { Button, styled } from "@mui/material";

const CustomButton = styled(Button)({
    '&:focus': {
        outline: 'none',
    },
});

export default CustomButton;