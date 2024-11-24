import { Dock } from "@/components/dock/dock";
import { Background } from "@/components/hero-background/background";
import { Suspense } from 'react'
import Loader from '@/components/Loader';

export default function Home() {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Background/>
    </Suspense>
  <Dock/>
    </div>
  );
}
