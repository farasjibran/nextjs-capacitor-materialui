import * as React from "react";

import AppLayout from "@/components/layouts/AppLayout";

import { NextPageWithLayout } from "@/pages/page";

const IndexPage: NextPageWithLayout = () => {
  return <div>Test</div>;
};

export default IndexPage;

IndexPage.getLayout = (page) => {
  return <AppLayout pageTitle="Home">{page}</AppLayout>;
};
