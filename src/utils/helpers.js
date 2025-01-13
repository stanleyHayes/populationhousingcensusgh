const getSystemTheme = () => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

export const HELPERS = {getSystemTheme};