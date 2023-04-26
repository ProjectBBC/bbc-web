import { Box } from "@chakra-ui/react";
import Footer from "@components/Footer";
import MainNavigation from "@components/MainNavigation";
import React from "react";

interface IProps {
    children: React.ReactNode;
}

function Layout({ children }: IProps) {
    return (
        <Box>
            <MainNavigation />
            <Box>{children}</Box>
            <Footer />
        </Box>
    );
}

export default Layout;
