"use client";

import { useUnlock } from "./ClientLayout";
import Encryption from "@/components/main/Encryption";
import HomeContent from "@/components/main/HomeContent";
export default function Home() {
  const { isUnlocked, unlock } = useUnlock();

  return (
    <main className="h-full w-full">
      {!isUnlocked ? (
        <Encryption onUnlock={unlock} />
      ) : (
      <HomeContent/>
      )}
    </main>
  );
}
