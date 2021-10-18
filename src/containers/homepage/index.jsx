import React from "react";

import {TopSection} from "./topSection/topSection";
import {ReviewsSection} from "./reviewsSection/reviewsSection";
import {ServicesSection} from "./servicesSection/servicesSection";
import {ContactUsSection} from "./contactusSection/contactusSection";

export function Homepage() {
  return (
    <>
      <TopSection />
      <ServicesSection />
      <ReviewsSection />
      <ContactUsSection />
    </>
  );
}
