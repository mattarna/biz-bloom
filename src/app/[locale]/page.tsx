'use client';

import { HeroSection } from '@/components/sections/HeroSection';
import { VideoShowcase } from '@/components/sections/VideoShowcase';
import { ProjectSection } from '@/components/sections/ProjectSection';
import { SingaporeProjectSection } from '@/components/sections/SingaporeProjectSection';
import { CommunitySection } from '@/components/sections/CommunitySection';
import { EcosystemSection } from '@/components/sections/EcosystemSection';
import { EarlyBirdSection } from '@/components/sections/EarlyBirdSection';
import { AboutHomeSection } from '@/components/sections/AboutHomeSection';
import { BestChoice } from '@/components/sections/BestChoice';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { MembershipBenefits } from '@/components/sections/MembershipBenefits';
import { AdditionalFeatures } from '@/components/sections/AdditionalFeatures';
import { useTranslations } from 'next-intl';
import { Icon } from '@/components/ui/Icon';

export default function Index() {
  const tf = useTranslations('Footer');

  return (
    <main className="bg-brand-alabaster">
      <HeroSection />
      <VideoShowcase />
      <ProjectSection />
      <SingaporeProjectSection />
      <CommunitySection />
      <EcosystemSection />
      <EarlyBirdSection />
      
      {/* NEW SECTIONS FROM COPY PLAN */}
      <BestChoice />
      <HowItWorks />
      <MembershipBenefits />
      <AdditionalFeatures />

      {/* MISSION QUOTE */}
      <section className="pt-8 lg:pt-12 pb-20 lg:pb-32 bg-brand-alabaster">
        <div className="mx-auto max-w-4xl px-8 text-center">
              <div className="flex justify-center items-center gap-6 mb-8 lg:mb-12 opacity-20">
                 <div className="h-[1px] w-8 lg:w-12 bg-brand-dark" />
                 <Icon icon="solar:globus-bold" className="text-xl lg:text-2xl text-brand-dark" />
                 <div className="h-[1px] w-8 lg:w-12 bg-brand-dark" />
              </div>
          <blockquote className="text-brand-dark text-[clamp(1.25rem,4vw,2.2rem)] font-serif font-bold leading-[1.4] uppercase tracking-tight italic">
            "{tf('mission')}"
          </blockquote>
        </div>
      </section>

      <AboutHomeSection />

      {/* FOOTER */}
      <footer className="py-12 lg:py-8 border-t border-brand-dark/5 bg-brand-alabaster">
         <div className="container-wide flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 text-[10px] font-bold tracking-[0.2em] text-brand-dark/30 uppercase px-8">
            <div className="flex flex-wrap justify-center gap-6 lg:gap-12">
               <span className="cursor-pointer hover:text-brand-dark transition-colors">Privacy Policy</span>
               <span className="cursor-pointer hover:text-brand-dark transition-colors">Cookie Policy</span>
               <span className="cursor-pointer hover:text-brand-dark transition-colors">Terms of Service</span>
            </div>
            <div className="flex flex-col md:items-end gap-2 text-center md:text-right">
              <span>© 2026 BIZ BLOOM. ALL RIGHTS RESERVED.</span>
              <span>POWERED BY THE DI FRANCIA HUB</span>
            </div>
         </div>
      </footer>
    </main>
  );
}
