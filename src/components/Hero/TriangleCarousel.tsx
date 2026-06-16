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

  // Colors — premium dark glass palette
  const bgColor = isActive ? "#141420" : "#0e0e18";
  const borderOpacity = isActive ? 0.5 : 0.12;
  const textOpacity = isActive ? 1 : 0.4;
  const headingColor = isActive ? "#c8ccd4" : "#55556a";
  const headingShadowColor = isActive ? "#080810" : "#060610";
  const subtitleColor = isActive ? "#7a7e8a" : "#44445a";
  const descColor = isActive ? "#8a8e9a" : "#44445a";
  const rowBg = isActive ? "#1a1a28" : "#10101c";
  const rowBorderOpacity = isActive ? 0.12 : 0.04;

  return (
    <group ref={groupRef}>
      {/* ── Card body — dark glass surface ── */}
      <RoundedBox
        args={[cardW, cardH, cardD]}
        radius={0.1}
        smoothness={4}
        onPointerOver={() => onHover(index)}
        onPointerOut={() => onUnhover()}
        onClick={() => onClick(index)}
      >
        <meshBasicMaterial
          color={bgColor}
          transparent
          opacity={isActive ? 0.97 : 0.5}
          depthWrite={false}
        />
      </RoundedBox>

      {/* ── Depth gradient layer — top darker zone ── */}
      <mesh position={[0, cardH / 4 + 0.1, cardD / 2 + 0.003]}>
        <planeGeometry args={[cardW - 0.06, cardH * 0.48]} />
        <meshBasicMaterial
          color="#0a0a14"
          transparent
          opacity={isActive ? 0.35 : 0.15}
          depthWrite={false}
        />
      </mesh>

      {/* ── Border highlights — thin metallic edges ── */}

      {/* Top border — accent colored */}
      <mesh position={[0, cardH / 2 - 0.015, cardD / 2 + 0.004]}>
        <planeGeometry args={[cardW - 0.08, 0.025]} />
        <meshBasicMaterial
          color={domain.color}
          transparent
          opacity={borderOpacity * 0.9}
        />
      </mesh>

      {/* Bottom border — subtle metallic */}
      <mesh position={[0, -cardH / 2 + 0.015, cardD / 2 + 0.004]}>
        <planeGeometry args={[cardW - 0.08, 0.012]} />
        <meshBasicMaterial
          color="#888899"
          transparent
          opacity={borderOpacity * 0.3}
        />
      </mesh>

      {/* Left border */}
      <mesh position={[-cardW / 2 + 0.012, 0, cardD / 2 + 0.004]}>
        <planeGeometry args={[0.008, cardH - 0.08]} />
        <meshBasicMaterial
          color="#666680"
          transparent
          opacity={borderOpacity * 0.25}
        />
      </mesh>

      {/* Right border */}
      <mesh position={[cardW / 2 - 0.012, 0, cardD / 2 + 0.004]}>
        <planeGeometry args={[0.008, cardH - 0.08]} />
        <meshBasicMaterial
          color="#666680"
          transparent
          opacity={borderOpacity * 0.25}
        />
      </mesh>

      {/* ── TEXT CONTENT ── */}

      {/* Layer label — small eyebrow ABOVE heading */}
      <Text
        position={[0, 1.25, cardD / 2 + 0.02]}
        fontSize={0.075}
        color={isActive ? domain.color : "#44445a"}
        anchorX="center"
        anchorY="middle"
        maxWidth={cardW - 0.4}
        letterSpacing={0.12}
      >
        {domain.subtitle.toUpperCase()}
      </Text>

      {/* Thin line under eyebrow */}
      <mesh position={[0, 1.15, cardD / 2 + 0.02]}>
        <planeGeometry args={[0.6, 0.002]} />
        <meshBasicMaterial
          color={domain.color}
          transparent
          opacity={borderOpacity * 0.35}
        />
      </mesh>

      {/* Heading shadow — embossed depth layer */}
      <Text
        position={[0.006, 0.86, cardD / 2 + 0.012]}
        fontSize={0.28}
        color={headingShadowColor}
        anchorX="center"
        anchorY="middle"
        maxWidth={cardW - 0.15}
        letterSpacing={0.04}
        textAlign="center"
        fontWeight={700}
      >
        {domain.label}
      </Text>

      {/* Heading — main text with domain accent color */}
      <Text
        position={[0, 0.88, cardD / 2 + 0.02]}
        fontSize={0.28}
        color={isActive ? domain.color : "#55556a"}
        anchorX="center"
        anchorY="middle"
        maxWidth={cardW - 0.15}
        letterSpacing={0.04}
        textAlign="center"
        fontWeight={700}
      >
        {domain.label}
      </Text>

      {/* Heading highlight — subtle lighter overlay for depth */}
      <Text
        position={[0, 0.89, cardD / 2 + 0.025]}
        fontSize={0.28}
        color={headingColor}
        anchorX="center"
        anchorY="middle"
        maxWidth={cardW - 0.15}
        letterSpacing={0.04}
        textAlign="center"
        fontWeight={700}
      >
        {domain.label}
      </Text>

      {/* Divider line */}
      <mesh position={[0, 0.48, cardD / 2 + 0.02]}>
        <planeGeometry args={[cardW * 0.5, 0.003]} />
        <meshBasicMaterial
          color={domain.color}
          transparent
          opacity={borderOpacity * 0.4}
        />
      </mesh>

      {/* Description */}
      <Text
        position={[0, 0.22, cardD / 2 + 0.02]}
        fontSize={0.078}
        color={descColor}
        anchorX="center"
        anchorY="middle"
        maxWidth={cardW - 0.4}
        lineHeight={1.6}
        textAlign="center"
      >
        {domain.description}
      </Text>

      {/* ── Project Rows — raised glass pill strips ── */}
      {domain.projects.slice(0, 3).map((proj, pi) => {
        const rowY = -0.3 - pi * 0.35;
        const rowW = cardW - 0.3;
        const rowH = 0.28;

        return (
          <group key={proj.slug} position={[0, rowY, cardD / 2 + 0.01]}>
            {/* Row background — raised glass strip */}
            <RoundedBox
              args={[rowW, rowH, 0.04]}
              radius={0.04}
              smoothness={3}
            >
              <meshBasicMaterial
                color={rowBg}
                transparent
                opacity={isActive ? 0.85 : 0.35}
                depthWrite={false}
              />
            </RoundedBox>

            {/* Row top edge highlight */}
            <mesh position={[0, rowH / 2 - 0.005, 0.025]}>
              <planeGeometry args={[rowW - 0.06, 0.003]} />
              <meshBasicMaterial
                color="#777788"
                transparent
                opacity={rowBorderOpacity * 1.5}
              />
            </mesh>

            {/* Row bottom shadow */}
            <mesh position={[0, -rowH / 2 + 0.003, 0.025]}>
              <planeGeometry args={[rowW - 0.06, 0.003]} />
              <meshBasicMaterial
                color="#000008"
                transparent
                opacity={isActive ? 0.2 : 0.05}
              />
            </mesh>

            {/* Icon circle */}
            <mesh position={[-rowW / 2 + 0.22, 0, 0.025]}>
              <circleGeometry args={[0.08, 20]} />
              <meshBasicMaterial
                color={domain.color}
                transparent
                opacity={textOpacity * 0.15}
              />
            </mesh>

            {/* Icon dot */}
            <mesh position={[-rowW / 2 + 0.22, 0, 0.03]}>
              <circleGeometry args={[0.03, 16]} />
              <meshBasicMaterial
                color={domain.color}
                transparent
                opacity={textOpacity * 0.5}
              />
            </mesh>

            {/* Project name */}
            <Text
              position={[0.1, 0, 0.03]}
              fontSize={0.09}
              color={isActive ? "#d4d4dc" : "#55556a"}
              anchorX="center"
              anchorY="middle"
              maxWidth={rowW - 0.7}
              fontWeight={500}
            >
              {proj.name}
            </Text>
          </group>
        );
      })}

      {/* ── Glow effect — active card back glow ── */}
      {isActive && (
        <mesh position={[0, 0, -cardD / 2 - 0.02]} scale={[1.04, 1.04, 1]}>
          <planeGeometry args={[cardW, cardH]} />
          <meshBasicMaterial
            color={domain.color}
            transparent
            opacity={0.05}
            depthWrite={false}
          />
        </mesh>
      )}

      {/* Corner accent dot */}
      <Float speed={1.5} rotationIntensity={0} floatIntensity={0.12}>
        <mesh position={[cardW / 2 - 0.14, cardH / 2 - 0.14, cardD / 2 + 0.03]}>
          <circleGeometry args={[0.035, 16]} />
          <meshBasicMaterial
            color={domain.color}
            transparent
            opacity={textOpacity * 0.45}
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
