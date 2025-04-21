"use client";
import { Particles } from "@tsparticles/react";
import {
  type Container,
  type Engine,
  type ISourceOptions,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { useCallback } from "react";
import Image from "next/image";

const particlesConfig: ISourceOptions = {
  background: {
    color: "#000000",
  },
  particles: {
    color: {
      value: ["#4285f4", "#34a853", "#fbbc05", "#ea4335"],
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.3,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
    },
    number: {
      value: 100,
    },
    opacity: {
      value: 0.8,
    },
    size: {
      value: 3,
    },
  },
};

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      console.log(container);
    },
    []
  );

  return (
    <div className="fixed inset-0 -z-10">
      <Image
        src="/assets/bg/starbg.svg"
        alt="Background"
        fill
        className="object-cover opacity-20"
        priority
      />
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesConfig}
      />
    </div>
  );
}
