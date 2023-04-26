import { CSSReset } from "@chakra-ui/react";
import Layout from "@containers/Layout";
import Homepage from "@pages/Homepage";
import { Route, Routes } from "react-router-dom";

function Root() {
    return (
        <>
            <CSSReset />
            <Layout>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                </Routes>
            </Layout>
        </>
    );
}

export default Root;
