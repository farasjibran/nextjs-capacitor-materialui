import AppLayout from "@/components/layouts/AppLayout";
import { NextPageWithLayout } from "@/pages/page";

const Tab1: NextPageWithLayout = () => {
  return <h1>tab 1</h1>;
};

export default Tab1;

Tab1.getLayout = (page) => {
  return <AppLayout pageTitle="Tab 1">{page}</AppLayout>;
};
