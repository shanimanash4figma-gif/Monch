import { createBrowserRouter } from "react-router";
import { PublicInquiryPageWithSmartNav } from "./components/PublicInquiryPageWithSmartNav";
import { DesignSystemPage } from "./components/DesignSystemPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: PublicInquiryPageWithSmartNav,
  },
  {
    path: "/design-system",
    Component: DesignSystemPage,
  },
]);
