import React from "react";

import Header from "../Header";
import Footer from "../Footer";

const Page = Props => (
  <div>
    <Header />
    {Props.children}
    <Footer />
  </div>
);

export default Page;
