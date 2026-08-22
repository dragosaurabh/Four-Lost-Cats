import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

function Lanterns() {
  const group = useRef();
  const data = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 20; i++) {
      arr.push({
        pos: [(Math.random() - 0.5) * 18, Math.random() * 7 + 0.5, (Math.random() - 0.5) * 9 - 2.5],
        scale: Math.random() * 0.45 + 0.35,
        speed: Math.random() * 0.5 + 0.25,
        phase: Math.random() * Math.PI * 2,
      });
    }
    return arr;
  }, []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (!group.current) return;
    group.current.children.forEach((m, i) => {
      const l = data[i];
      m.position.y = l.pos[1] + Math.sin(t * l.speed + l.phase) * 0.45;
      m.rotation.z = Math.sin(t * 0.35 + l.phase) * 0.12;
    });
  });

  return (
    <group ref={group}>
      {data.map((l, i) => (
        <mesh key={i} position={l.pos} scale={l.scale}>
          <sphereGeometry args={[1, 24, 24]} />
          <meshStandardMaterial
            color="#FFF3E0"
            emissive="#FFD685"
            emissiveIntensity={1.6}
            transparent
            opacity={0.94}
            roughness={0.45}
          />
        </mesh>
      ))}
    </group>
  );
}

function Particles({ count = 260 }) {
  const ref = useRef();
  const positions = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 24;
      p[i * 3 + 1] = (Math.random() - 0.5) * 15;
      p[i * 3 + 2] = (Math.random() - 0.5) * 11 - 2;
    }
    return p;
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.02;
    const arr = ref.current.geometry.attributes.position.array;
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 1] += 0.008;
      if (arr[i * 3 + 1] > 7.5) arr[i * 3 + 1] = -7.5;
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.055} color="#FFE7C2" transparent opacity={0.55} sizeAttenuation depthWrite={false} />
    </points>
  );
}

function Rig() {
  useFrame((state) => {
    const x = state.pointer.x * 1.2;
    const y = state.pointer.y * 0.6 + 1;
    state.camera.position.x += (x - state.camera.position.x) * 0.035;
    state.camera.position.y += (y - state.camera.position.y) * 0.035;
    state.camera.lookAt(0, 1.2, -2);
  });
  return null;
}

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 1, 9.5], fov: 55 }}
      gl={{ antialias: true, alpha: true }}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={0.85} color="#FFE8CC" />
      <pointLight position={[-9, 3, 3]} intensity={3.2} decay={0} color="#2B5A8C" />
      <pointLight position={[9, 2, 3]} intensity={3.4} decay={0} color="#F5A882" />
      <pointLight position={[0, 5, 2]} intensity={1.4} decay={0} color="#FFD685" />
      <Lanterns />
      <Particles />
      <Rig />
      <fog attach="fog" args={["#1B3A5C", 9, 26]} />
    </Canvas>
  );
}
