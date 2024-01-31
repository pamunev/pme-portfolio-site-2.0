/* 
0.5. Banner section with buttons for sections?
1. About section
2. Code section
3. Other interests section
4. Footer with contact info
*/
import React from "react";
import AboutSection from "../components/AboutSection";
import CodeSection from "../components/CodeSection";
import OtherInterestsSection from "../components/OtherInterestsSection";

// Components

function Layout() {
  return (
    <div>
      <AboutSection />
      <CodeSection />
      <OtherInterestsSection />
    </div>
  );
}

export default Layout;
