import {createTheme} from "@mui/material";
const lightTheme = createTheme({
    typography: {
        fontFamily: 'Outfit'
    },
    palette: {
        mode: 'light',
        background: {
            sidebar: "#f2f4f5",
            paper: "#ffffff",
            default: "#f5f5f5",
            transparent: "rgba(255,255,255,0.3)"
        },
        primary: {main: '#2496FF'},
        secondary: {main: '#6733FF'},
        accent: {main: '#FFC025'},
        light: {
            primary: 'rgba(36,150,255,0.05)',
            secondary: 'rgba(103,51,255,0.05)',
            accent: "rgba(255,192,37,0.05)",
            red: 'rgba(255,63,94,0.3)',
            green: 'rgba(126,239,143,0.3)',
            default: 'rgba(88,91,99,0.1)',
            orange: 'rgba(238,202,92,0.03)'
        },
        icon: {
            primary: 'rgba(130,105,255,0.1)',
            secondary: 'rgba(159,74,247,0.1)',
            red: 'rgba(255,63,94,0.1)',
            green: 'rgba(126,239,143,0.1)',
        },
        text: {
            primary: "#191919",
            secondary: "#585b63"
        },
        colors: {
            red: '#ff3f5e',
            green: '#7eef8f',
            default: '#585b63',
            orange: '#eeca5c',
            accent: "#eeca5c"
        }
    },
    shape: {
        borderRadius: 2
    }
});

const darkTheme = createTheme({
    typography: {
        fontFamily: 'Outfit'
    },
    palette: {
        mode: 'dark',
        background: {
            sidebar: "#121212",
            default: "#1A1A1A",
            paper: "#202020",
            transparent: "rgba(18,18,18,0.03)",
        },
        primary: {main: '#2496FF'},
        secondary: {main: '#6733FF'},
        accent: {main: '#FFC025'},
        light: {
            primary: 'rgba(36,150,255,0.05)',
            secondary: 'rgba(103,51,255,0.05)',
            accent: "rgba(255,192,37,0.05)",
            red: 'rgba(255,63,94,0.3)',
            green: 'rgba(126,239,143,0.3)',
            default: "rgba(210,211,215,0.03)",
            orange: 'rgba(238,202,92,0.3)',
        },
        icon: {
            primary: 'rgba(130,105,255,0.1)',
            secondary: 'rgba(159,74,247,0.1)',
            red: 'rgba(255,63,94,0.3)',
            green: '#7eef8f',
        },
        colors: {
            red: '#ff3f5e',
            green: '#7eef8f',
            default: "rgba(210,211,215,0.5)",
            orange: '#eeca5c',
            accent: "#eeca5c"
        },
        text: {
            primary: "#f8f9fa",
            secondary: "#d2d3d7"
        },
    },
    shape: {
        borderRadius: 2
    }
});
export {darkTheme, lightTheme};