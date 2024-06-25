import {Canvas, useFrame, useThree} from "@react-three/fiber";
import {useRef, useEffect} from "react";
//import { useMemo } from "react";
//import * as THREE from 'three';
//import { vertexShader, fragmentShader } from '../../../shaders.ts';
import {OrbitControls} from "@react-three/drei";

const Hero = () => {
    /*const Particles = () => {
        const planePositions = useMemo(() => {
            const planeGeometry = new THREE.PlaneGeometry(6, 6, 128, 128);
            const positions = planeGeometry.attributes.position.array;
            return positions;
        }, []);

        const shaderArgs = useMemo(() => ({
            uniforms: {
                uTime: { value: 0 },
            },
            vertexShader,
            fragmentShader,
        }), []);

        useFrame(() => {
            shaderArgs.uniforms.uTime.value++;
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
*/
    const CameraAnimation = () => {
        const {camera} = useThree();
        const scrollPosition = useRef(0);

        const handleScroll = () => {
            const scrollFactor = window.scrollY / document.body.scrollHeight;
            scrollPosition.current = scrollFactor * Math.PI * 2;
        };

        useEffect(() => {
            window.addEventListener('scroll', handleScroll);
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }, []);

        useFrame(() => {
            const t = scrollPosition.current;
            camera.position.x = Math.sin(t) * 5;
            camera.position.z = Math.cos(t) * 5;
            camera.lookAt(0, 0, 0);
        });

        return null;
    };

    return (
        <Canvas dpr={2} style={{backgroundColor: 'var(--background-color)', color: 'var(--text-color)'}}>
            <OrbitControls makeDefault enableZoom={false}/>
            <CameraAnimation/>
        </Canvas>
    );
};

export default Hero;
