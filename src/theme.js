import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

/* indigo: {
    100: "#e5e6fc",
    200: "#cbcefa",
    300: "#b2b5f7",
    400: "#989df5",
    500: "#7e84f2",
    600: "#656ac2",
    700: "#4c4f91",
    800: "#323561",
    900: "#191a30",
},
indigo: {
    100: "#cde1ed",
    200: "#9ac2db",
    300: "#68a4ca",
    400: "#3585b8",
    500: "#0367a6",
    600: "#025285",
    700: "#023e64",
    800: "#012942",
    900: "#011521",
},
blue: {
    100: "#cde8d6",
    200: "#9ad1ad",
    300: "#68ba85",
    400: "#35a35c",
    500: "#038c33",
    600: "#027029",
    700: "#02541f",
    800: "#013814",
    900: "#011c0a",
},
yellow: {
    100: "#fcf1cf",
    200: "#fae39f",
    300: "#f7d56f",
    400: "#f5c73f",
    500: "#f2b90f",
    600: "#c2940c",
    700: "#916f09",
    800: "#614a06",
    900: "#302503",
},
red: {
    100: "#f7d2d2",
    200: "#f0a5a5",
    300: "#e87878",
    400: "#e14b4b",
    500: "#d91e1e",
    600: "#ae1818",
    700: "#821212",
    800: "#570c0c",
    900: "#2b0606",
}, */













export const tokens = (mode) => ({
    ...(mode === 'dark'
        ? {
            grey: {
                100: "#e0e0e0",
                200: "#c2c2c2",
                300: "#a3a3a3",
                400: "#858585",
                500: "#666666",
                600: "#525252",
                700: "#3d3d3d",
                800: "#292929",
                900: "#141414"
            },
            primary: {
                100: "#d0d1d5",
                200: "#a1a4ab",
                300: "#727681",
                400: "#434957",
                500: "#141b2d",
                600: "#101624",
                700: "#0c101b",
                800: "#080b12",
                900: "#040509"
            },
            greenAccent: {
                100: "#dbf5ee",
                200: "#b7ebde",
                300: "#94e2cd",
                400: "#70d8bd",
                500: "#038C33", // New green accent color
                600: "#3da58a",
                700: "#2e7c67",
                800: "#1e5245",
                900: "#0f2922"
            },
            redAccent: {
                100: "#f8dcdb",
                200: "#f1b9b7",
                300: "#e99592",
                400: "#e2726e",
                500: "#D91E1E", // New red accent color
                600: "#af3f3b",
                700: "#832f2c",
                800: "#58201e",
                900: "#2c100f"
            },
            blueAccent: {
                100: "#e1e2fe",
                200: "#c3c6fd",
                300: "#a4a9fc",
                400: "#868dfb",
                500: "#7E84F2", // New blue accent color
                600: "#535ac8",
                700: "#3e4396",
                800: "#2a2d64",
                900: "#151632"
            },
            yellowAccent: {
                100: "#fff9db",
                200: "#fff3b7",
                300: "#ffed92",
                400: "#ffe76e",
                500: "#F2B90F", // New yellow accent color
                600: "#c2a00c",
                700: "#918007",
                800: "#605003",
                900: "#302801"
            },
        } : {
            grey: {
                100: "#141414",
                200: "#292929",
                300: "#3d3d3d",
                400: "#525252",
                500: "#666666",
                600: "#858585",
                700: "#a3a3a3",
                800: "#c2c2c2",
                900: "#e0e0e0",
            },
            primary: {
                100: "#040509",
                200: "#080b12",
                300: "#0c101b",
                400: "#f2f0f0",
                500: "#0367A6", // New primary color
                600: "#434957",
                700: "#727681",
                800: "#a1a4ab",
                900: "#d0d1d5",
            },
            greenAccent: {
                100: "#0f2922",
                200: "#1e5245",
                300: "#2e7c67",
                400: "#3da58a",
                500: "#038C33", // New green accent color
                600: "#70d8bd",
                700: "#94e2cd",
                800: "#b7ebde",
                900: "#dbf5ee",
            },
            redAccent: {
                100: "#2c100f",
                200: "#58201e",
                300: "#832f2c",
                400: "#af3f3b",
                500: "#D91E1E", // New red accent color
                600: "#e2726e",
                700: "#e99592",
                800: "#f1b9b7",
                900: "#f8dcdb",
            },
            blueAccent: {
                100: "#151632",
                200: "#2a2d64",
                300: "#3e4396",
                400: "#535ac8",
                500: "#7E84F2", // New blue accent color
                600: "#868dfb",
                700: "#a4a9fc",
                800: "#c3c6fd",
                900: "#e1e2fe",
            },
            yellowAccent: {
                100: "#302801",
                200: "#605003",
                300: "#918007",
                400: "#c2a00c",
                500: "#F2B90F", // New yellow accent color
                600: "#ffe76e",
                700: "#ffed92",
                800: "#fff3b7",
                900: "#fff9db",
            },
        }
    )
});

// MUI theme settings

export const themeSttings = (mode) => {
    const colors = tokens(mode);

    return {
        palette: {
            mode: mode,
            ...(mode === 'dark'
                ? {
                    primary: {
                        main: colors.primary[500],
                    },
                    secondary: {
                        main: colors.greenAccent[500],
                    },
                    neutral: {
                        dark: colors.grey[700],
                        main: colors.grey[500],
                        light: colors.grey[100],
                    },
                    background: {
                        default: colors.primary[500],
                    }
                } : {
                    primary: {
                        main: colors.primary[100],
                    },
                    secondary: {
                        main: colors.greenAccent[500],
                    },
                    neutral: {
                        dark: colors.grey[700],
                        main: colors.grey[500],
                        light: colors.grey[100],
                    },
                    background: {
                        default: "#fcfcfc",
                    }
                }
            )
        },
        typography: {
            fontFamily: ["Roboto, sans-serif", "sans-serif"].join(","),
            fontSize: 12,
            h1: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 40,
            },
            h2: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 32,
            },
            h3: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 24,
            },
            h4: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 20,
            },
            h5: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 16,
            },
            h6: { // Cambio aquí, h6 no h5
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 14,
            }
        }
    };
};

// Context for color mode

export const ColorModeContext = createContext({
    toggleColorMode: () => {}
});

export const useMode = () => {
    const [mode, setMode] = useState("dark");

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => 
                setMode(prevMode => (prevMode === "light" ? "dark" : "light")),
        }), []
    );
    const theme = useMemo(() => createTheme(themeSttings(mode)), [mode]);
    return [theme, colorMode];
};
