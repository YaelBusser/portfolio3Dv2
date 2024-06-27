import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo } from "react";
import * as THREE from 'three';
import { vertexShader, fragmentShader } from './shaders';

const Hero = () => {
    const Particles = () => {
        const shaderArgs = useMemo(() => ({
            uniforms: {
                uTime: { value: 0 },
                uColor: { value: new THREE.Color(0x000000) },
            },
            vertexShader,
            fragmentShader,
        }), []);

        const planePositions = useMemo(() => {
            const planeGeometry = new THREE.PlaneGeometry(6, 6, 128, 128);
            const positions = planeGeometry.attributes.position.array;
            return positions;
        }, []);

        useFrame(({ clock }) => {
            shaderArgs.uniforms.uTime.value = clock.getElapsedTime() * 5;
        });

        const scale = 2;
        return (
            <points scale={[scale, scale, scale]} rotation={[-Math.PI / 2, 0, 0]}>
                <bufferGeometry attach="geometry">
                    <bufferAttribute
                        attach="attributes-position"
                        array={planePositions}
                        itemSize={3}
                        count={planePositions.length / 3}
                    />
                </bufferGeometry>
                <shaderMaterial
                    args={[shaderArgs]}
                    transparent
                    depthTest={false}
                    depthWrite={false}
                />
            </points>
        );
    };

    return (
        <Canvas style={{ backgroundColor: 'var(--background-color)', color: 'var(--text-color)' }}>
            <Particles />
        </Canvas>
    );
};

export default Hero;
