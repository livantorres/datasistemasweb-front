import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import SectionSkeleton from '../ui/SectionSkeleton';

const HeroSection = lazy(() => import('../sections/hero'));
const SponsorsSection = lazy(() => import('../sections/sponsors'));
const ServicesSection = lazy(() => import('../sections/services'));
const StatsSection = lazy(() => import('../sections/stats'));
const ContactSection = lazy(() => import('../sections/contact'));

export default function HomePage() {
  return (
    <>
      <Suspense fallback={<SectionSkeleton />}>
        <HeroSection />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton />}>
        <SponsorsSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <ServicesSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <StatsSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <ContactSection />
      </Suspense>
    </>
  );
}