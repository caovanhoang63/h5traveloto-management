import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontSize: 24, // Đặt kích thước font mặc định cho toàn bộ ứng dụng
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', // Đặt font chữ mặc định cho toàn bộ ứng dụng
    },
});

export default function HourPicker({label,onChange}) {
    const [value, setValue] = React.useState(dayjs('2022-04-17T00:00'));

    const handleChange = (newValue) => {
        setValue(newValue);
        onChange(newValue); // Gọi callback function được truyền vào từ component cha
    };
    return (
        <ThemeProvider theme={theme}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['TimePicker', 'TimePicker']}>
                    <TimePicker
                        label={label}
                        value={value}
                        ampm={false}
                        sx={{}}
                        onChange={handleChange}
                    />
                </DemoContainer>
            </LocalizationProvider>
        </ThemeProvider>
    );
}