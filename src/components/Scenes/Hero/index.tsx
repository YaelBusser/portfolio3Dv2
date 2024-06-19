import {Canvas, useFrame, useThree} from "@react-three/fiber";
import {useMemo, useRef} from "react";
import * as THREE from 'three'
import {vertexShader, fragmentShader} from '../../../shaders.js';
import {OrbitControls, useGLTF} from "@react-three/drei";

const Hero = () => {
    const Particles = () => {
        const planePositions = useMemo(() => {
            const planeGeometry = new THREE.PlaneGeometry(6, 6, 128, 128);
            const positions = planeGeometry.attributes.position.array;

            return positions;
        }, []);

        const shaderArgs = useMemo(
            () => ({
                uniforms: {
                    uTime: {value: 0},
                },
                vertexShader,
                fragmentShader
            }),
            []
        );

        useFrame(() => {
            shaderArgs.uniforms.uTime.value++;
        }, []);
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
    const CameraAnimation = () => {
        const {camera} = useThree();
        const t = useRef(0);

        useFrame((state) => {
            t.current += state.clock.getDelta();
            camera.position.x = Math.sin(t.current) * 5;
            camera.position.z = Math.cos(t.current) * 5;
            camera.lookAt(0, 0, 0);
        });

        return null;
    };

    return (
        <Canvas dpr={2} style={{backgroundColor: 'var(--background-color)', color: 'var(--text-color)'}}>
            <OrbitControls makeDefault enableZoom={false}/>
            <CameraAnimation/>
            <Particles/>
        </Canvas>
    )
}

export default Hero;