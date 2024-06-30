/*import {Canvas, useFrame} from "@react-three/fiber";
import {useMemo} from "react";
import * as THREE from 'three';
import {fragmentShader, vertexShader} from './shaders';
import {useMediaQuery, useTheme} from '@mui/material';
 */

const Hero = () => {
    /*
        const theme = useTheme();
        const isMdDown = useMediaQuery(theme.breakpoints.down('md'));

        const Particles = () => {
            const shaderArgs = useMemo(() => ({
                uniforms: {
                    uTime: {value: 0},
                    uColor: {value: new THREE.Color(0x000000)},
                },
                vertexShader,
                fragmentShader,
            }), []);

            const planePositions = useMemo(() => {
                const planeGeometry = new THREE.PlaneGeometry(6, 6, 128, 128);
                return planeGeometry.attributes.position.array;
            }, []);

            useFrame(({clock}) => {
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
     */

    return (
        <>
            {
                /*
            !isMdDown && (
                <Canvas style={{backgroundColor: 'var(--background-color)', color: 'var(--text-color)'}}>
                    <ambientLight/>
                </Canvas>
            )
                 */
            }
        </>
    );
};

export default Hero;