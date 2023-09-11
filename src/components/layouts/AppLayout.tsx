import Head from "next/head";
import * as React from "react";

import Box from "@mui/material/Box";
import BottomNav from "./BottomNav";

export interface AppLayoutProps {
  children: React.ReactNode;
  pageTitle?: string;
}

const AppLayout: React.FC<AppLayoutProps> = ({
  children,
  pageTitle = "~Page Title~",
}) => {
  // Put Header or Footer Here
  return (
    <Box>
      <Head>
        <title>{pageTitle}</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <main>{children}</main>
      <BottomNav />
    </Box>
  );
};

export default AppLayout;
