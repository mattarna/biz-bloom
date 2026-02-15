'use client';

import React, { useState } from 'react';
import { B2BRoomHero } from '@/components/sections/B2BRoomHero';
import { B2BRoomValueSections } from '@/components/sections/B2BRoomValueSections';
import { B2BRoomMarkets } from '@/components/sections/B2BRoomMarkets';
import { B2BBookingSteps } from '@/components/sections/B2BBookingSteps';
import { B2BAccessConditions } from '@/components/sections/B2BAccessConditions';
import { B2BRoomCTA } from '@/components/sections/B2BRoomCTA';
import { B2BFormDrawer } from '@/components/sections/B2BFormDrawer';

export default function B2BRoomPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background pt-20">
      <B2BRoomHero onOpenDrawer={() => setIsDrawerOpen(true)} />
      <B2BRoomValueSections />
      <B2BRoomMarkets />
      <B2BBookingSteps />
      <B2BAccessConditions />
      <B2BRoomCTA onOpenDrawer={() => setIsDrawerOpen(true)} />
      
      <B2BFormDrawer 
        isOpen={isDrawerOpen} 
        onClose={() => setIsDrawerOpen(false)} 
      />
    </main>
  );
}
