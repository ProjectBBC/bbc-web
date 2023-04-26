import { ThemeConfig, extendTheme } from "@chakra-ui/react";
import { Color } from "@typings/index";

const theme: ThemeConfig = extendTheme({
    styles: {
        global: () => ({
            html: {
                maxWidth: "100vw",
                overflowX: "hidden",
            },
            body: {
                maxWidth: "100vw",
                overflowX: "hidden",
                backgroundColor: Color.DarkGrey,
                color: Color.SoftWhite,
            },
            a: {
                textDecoration: "none",
                color: "inherit"
            }
        }),
    },
});

export default theme;
