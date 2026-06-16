"use client";

import React, { useRef, useState, useCallback, useEffect, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Text, RoundedBox, Float } from "@react-three/drei";
import * as THREE from "three";
import { domains, type Domain } from "./domainData";

// ═══════════════════════════════════════════════════════
// ERROR BOUNDARY
// ═══════════════════════════════════════════════════════

class CanvasErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full h-full flex items-center justify-center">
          <p className="text-sm font-mono" style={{ color: "#55556a" }}>
            3D Engine unavailable
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}

// ═══════════════════════════════════════════════════════
// DOMAIN CARD — A single 3D rectangular panel
// ═══════════════════════════════════════════════════════

interface DomainCardProps {
  domain: Domain;
  index: number;
  activeIndex: number;
  totalPanels: number;
  currentRotation: React.RefObject<number>;
  onHover: (index: number) => void;
  onUnhover: () => void;
  onClick: (index: number) => void;
}

function DomainCard({
  domain,
  index,
  activeIndex,
  totalPanels,
  currentRotation,
  onHover,
  onUnhover,
  onClick,
}: DomainCardProps) {
  const groupRef = useRef<THREE.Group>(null);
  const isActive = index === activeIndex;

  // Card dimensions
  const cardW = 2.6;
  const cardH = 3.2;
  const cardD = 0.15; // thickness gives it 3D look

  useFrame((_, delta) => {
    if (!groupRef.current) return;

    const rot = currentRotation.current ?? 0;
    const angle = index * ((Math.PI * 2) / totalPanels) + rot;
    const radius = 3.5;
    const depthSpread = 3.0;

    const targetX = Math.sin(angle) * radius;
    const targetZ = Math.cos(angle) * depthSpread;
    const targetScale = isActive ? 1.0 : 0.72;
    const targetRotY = -angle * 0.35;

    // Smooth lerp positions
    groupRef.current.position.x = THREE.MathUtils.lerp(
      groupRef.current.position.x,
      targetX,
      delta * 5
    );
    groupRef.current.position.z = THREE.MathUtils.lerp(
      groupRef.current.position.z,
      targetZ,
      delta * 5
    );
    groupRef.current.position.y = THREE.MathUtils.lerp(
      groupRef.current.position.y,
      isActive ? 0.1 : -0.15,
      delta * 4
    );

    // Scale
    const s = groupRef.current.scale.x;
    groupRef.current.scale.setScalar(
      THREE.MathUtils.lerp(s, targetScale, delta * 6)
    );

    // Rotation — face slightly toward camera
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      targetRotY,
      delta * 4
    );
  });

  // Colors
  const bgColor = isActive ? "#1a1a24" : "#12121a";
  const borderOpacity = isActive ? 0.6 : 0.15;
  const textOpacity = isActive ? 1 : 0.45;

  return (
    <group ref={groupRef}>
      {/* 3D Box body — the main card */}
      <RoundedBox
        args={[cardW, cardH, cardD]}
        radius={0.08}
        smoothness={4}
        onPointerOver={() => onHover(index)}
        onPointerOut={() => onUnhover()}
        onClick={() => onClick(index)}
      >
        <meshBasicMaterial
          color={bgColor}
          transparent
          opacity={isActive ? 0.95 : 0.55}
          depthWrite={false}
        />
      </RoundedBox>

      {/* Edge highlight — colored border line on top edge */}
      <mesh position={[0, cardH / 2 - 0.02, cardD / 2 + 0.001]}>
        <planeGeometry args={[cardW - 0.1, 0.035]} />
        <meshBasicMaterial
          color={domain.color}
          transparent
          opacity={borderOpacity}
        />
      </mesh>

      {/* Side accent strip */}
      <mesh position={[-cardW / 2 + 0.02, 0, cardD / 2 + 0.001]}>
        <planeGeometry args={[0.03, cardH * 0.5]} />
        <meshBasicMaterial
          color={domain.color}
          transparent
          opacity={borderOpacity * 0.6}
        />
      </mesh>

      {/* ── Text Content ── */}

      {/* Domain label — BIG and bold */}
      <Text
        position={[0, 0.9, cardD / 2 + 0.02]}
        fontSize={0.34}
        color={domain.color}
        anchorX="center"
        anchorY="middle"
        maxWidth={cardW - 0.4}
        letterSpacing={0.08}
        textAlign="center"
      >
        {domain.label}
      </Text>

      {/* Subtitle */}
      <Text
        position={[0, 0.5, cardD / 2 + 0.02]}
        fontSize={0.11}
        color={isActive ? "#8a8a9a" : "#55556a"}
        anchorX="center"
        anchorY="middle"
        maxWidth={cardW - 0.4}
      >
        {domain.subtitle}
      </Text>

      {/* Divider line */}
      <mesh position={[0, 0.3, cardD / 2 + 0.02]}>
        <planeGeometry args={[cardW * 0.5, 0.005]} />
        <meshBasicMaterial
          color={domain.color}
          transparent
          opacity={borderOpacity * 0.5}
        />
      </mesh>

      {/* Description */}
      <Text
        position={[0, 0.0, cardD / 2 + 0.02]}
        fontSize={0.085}
        color={isActive ? "#9a9aaa" : "#55556a"}
        anchorX="center"
        anchorY="middle"
        maxWidth={cardW - 0.5}
        lineHeight={1.5}
        textAlign="center"
      >
        {domain.description}
      </Text>

      {/* Project list */}
      {domain.projects.slice(0, 3).map((proj, pi) => (
        <group key={proj.slug} position={[0, -0.55 - pi * 0.25, cardD / 2 + 0.02]}>
          {/* Dot */}
          <mesh position={[-0.8, 0, 0]}>
            <circleGeometry args={[0.03, 16]} />
            <meshBasicMaterial
              color={domain.color}
              transparent
              opacity={textOpacity * 0.7}
            />
          </mesh>
          {/* Project name */}
          <Text
            position={[0, 0, 0]}
            fontSize={0.09}
            color={isActive ? "#e0e0e8" : "#666680"}
            anchorX="center"
            anchorY="middle"
            maxWidth={cardW - 0.6}
          >
            {proj.name}
          </Text>
        </group>
      ))}

      {/* Glow edge effect for active card */}
      {isActive && (
        <mesh position={[0, 0, -cardD / 2 - 0.01]} scale={[1.02, 1.02, 1]}>
          <planeGeometry args={[cardW, cardH]} />
          <meshBasicMaterial
            color={domain.color}
            transparent
            opacity={0.06}
            depthWrite={false}
          />
        </mesh>
      )}

      {/* Corner accent */}
      <Float speed={1.5} rotationIntensity={0} floatIntensity={0.15}>
        <mesh position={[cardW / 2 - 0.15, cardH / 2 - 0.15, cardD / 2 + 0.03]}>
          <circleGeometry args={[0.04, 16]} />
          <meshBasicMaterial
            color={domain.color}
            transparent
            opacity={textOpacity * 0.5}
          />
        </mesh>
      </Float>
    </group>
  );
}

// ═══════════════════════════════════════════════════════
// CONNECTOR LINES
// ═══════════════════════════════════════════════════════

function ConnectorLines({
  currentRotation,
}: {
  currentRotation: React.RefObject<number>;
}) {
  const totalPanels = 3;
  const radius = 3.5;
  const depth = 3.0;

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(totalPanels * 6);
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geo;
  }, [totalPanels]);

  useFrame(() => {
    const rot = currentRotation.current ?? 0;
    const positions = geometry.attributes.position as THREE.BufferAttribute;

    for (let i = 0; i < totalPanels; i++) {
      const angle1 = i * ((Math.PI * 2) / totalPanels) + rot;
      const angle2 =
        ((i + 1) % totalPanels) * ((Math.PI * 2) / totalPanels) + rot;

      const idx = i * 6;
      positions.array[idx] = Math.sin(angle1) * radius;
      positions.array[idx + 1] = -1.6;
      positions.array[idx + 2] = Math.cos(angle1) * depth;
      positions.array[idx + 3] = Math.sin(angle2) * radius;
      positions.array[idx + 4] = -1.6;
      positions.array[idx + 5] = Math.cos(angle2) * depth;
    }

    positions.needsUpdate = true;
  });

  return (
    <lineSegments geometry={geometry}>
      <lineBasicMaterial color="#00e5ff" transparent opacity={0.08} />
    </lineSegments>
  );
}

// ═══════════════════════════════════════════════════════
// CAMERA RIG — Mouse parallax
// ═══════════════════════════════════════════════════════

function CameraRig() {
  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame((_, delta) => {
    camera.position.x = THREE.MathUtils.lerp(
      camera.position.x,
      mouse.current.x * 0.4,
      delta * 2
    );
    camera.position.y = THREE.MathUtils.lerp(
      camera.position.y,
      0.3 + mouse.current.y * 0.2,
      delta * 2
    );
    camera.lookAt(0, 0, 0);
  });

  return null;
}

// ═══════════════════════════════════════════════════════
// AMBIENT PARTICLES
// ═══════════════════════════════════════════════════════

function AmbientParticles() {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 60;

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 18;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 14;
    }
    geo.setAttribute("position", new THREE.BufferAttribute(arr, 3));
    return geo;
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.015;
  });

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial
        size={0.015}
        color="#ffffff"
        transparent
        opacity={0.2}
        sizeAttenuation
      />
    </points>
  );
}

// ═══════════════════════════════════════════════════════
// SCENE
// ═══════════════════════════════════════════════════════

function Scene({
  activeIndex,
  setActiveIndex,
  onDomainClick,
}: {
  activeIndex: number;
  setActiveIndex: (i: number) => void;
  onDomainClick: (domain: Domain) => void;
}) {
  const initialRot = -1 * ((Math.PI * 2) / 3); // index 1 = Product Builds
  const targetRotation = useRef(initialRot);
  const currentRotation = useRef(initialRot);
  const isRotating = useRef(false);

  const handleHover = useCallback(
    (index: number) => {
      // Ignore hovers while a rotation is still animating
      if (isRotating.current) return;
      if (index !== activeIndex) {
        isRotating.current = true;
        setActiveIndex(index);
        targetRotation.current = -index * ((Math.PI * 2) / 3);
      }
    },
    [activeIndex, setActiveIndex]
  );

  const handleUnhover = useCallback(() => {
    // Do nothing — keep current panel active, no auto-rotation
  }, []);

  const handleClick = useCallback(
    (index: number) => {
      if (isRotating.current) return; // Also lock clicks during rotation
      if (index === activeIndex) {
        onDomainClick(domains[index]);
      } else {
        isRotating.current = true;
        setActiveIndex(index);
        targetRotation.current = -index * ((Math.PI * 2) / 3);
      }
    },
    [activeIndex, onDomainClick, setActiveIndex]
  );

  useFrame((_, delta) => {
    currentRotation.current = THREE.MathUtils.lerp(
      currentRotation.current,
      targetRotation.current,
      delta * 4
    );

    // Unlock once rotation is close enough to target
    if (isRotating.current) {
      const diff = Math.abs(currentRotation.current - targetRotation.current);
      if (diff < 0.05) {
        isRotating.current = false;
      }
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={0.4} color="#ffffff" />
      <pointLight position={[-4, 3, -3]} intensity={0.2} color="#00e5ff" />
      <pointLight position={[4, -2, -3]} intensity={0.15} color="#a855f7" />

      <CameraRig />
      <AmbientParticles />

      {domains.map((domain, i) => (
        <DomainCard
          key={domain.id}
          domain={domain}
          index={i}
          activeIndex={activeIndex}
          totalPanels={3}
          currentRotation={currentRotation}
          onHover={handleHover}
          onUnhover={handleUnhover}
          onClick={handleClick}
        />
      ))}

      <ConnectorLines currentRotation={currentRotation} />
    </>
  );
}

// ═══════════════════════════════════════════════════════
// TRIANGLE CAROUSEL — Exported component
// ═══════════════════════════════════════════════════════

interface TriangleCarouselProps {
  onDomainClick?: (domain: Domain) => void;
}

export default function TriangleCarousel({
  onDomainClick,
}: TriangleCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(1); // Default: Product Builds

  const handleDomainClick = useCallback(
    (domain: Domain) => {
      if (onDomainClick) {
        onDomainClick(domain);
      } else {
        const el = document.getElementById(domain.sectionId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    },
    [onDomainClick]
  );

  return (
    <div className="w-full h-full" style={{ minHeight: "500px" }}>
      <CanvasErrorBoundary>
        <Canvas
          camera={{ position: [0, 0.3, 8], fov: 42 }}
          dpr={[1, 2]}
          gl={{ antialias: true, alpha: true }}
          style={{ background: "transparent" }}
          fallback={
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-xs font-mono" style={{ color: "#55556a" }}>
                Loading 3D engine...
              </p>
            </div>
          }
        >
          <Scene
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            onDomainClick={handleDomainClick}
          />
        </Canvas>
      </CanvasErrorBoundary>

      {/* Domain navigation dots */}
      <div className="flex justify-center gap-8 mt-4">
        {domains.map((domain, i) => (
          <button
            key={domain.id}
            onClick={() => {
              setActiveIndex(i);
            }}
            className="flex items-center gap-2.5 transition-all duration-500 group"
            style={{
              opacity: i === activeIndex ? 1 : 0.4,
              transform: i === activeIndex ? "scale(1.05)" : "scale(1)",
            }}
            id={`domain-nav-${domain.id}`}
          >
            <span
              className="w-2.5 h-2.5 rounded-full transition-all duration-500"
              style={{
                backgroundColor: domain.color,
                boxShadow:
                  i === activeIndex
                    ? `0 0 12px ${domain.color}, 0 0 4px ${domain.color}`
                    : "none",
              }}
            />
            <span
              className="text-xs tracking-widest font-mono transition-colors duration-500 uppercase"
              style={{
                color: i === activeIndex ? domain.color : "#55556a",
              }}
            >
              {domain.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
