import React from "react";

import { TopSection } from "./topSection";
import { ReviewsSection } from "./reviewsSection";
import { ServicesSection } from "./servicesSection";
import { ContactUsSection } from "../homepage/contactusSection";

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
