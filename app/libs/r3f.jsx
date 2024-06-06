
import useSpline from '@splinetool/r3f-spline'
import { OrthographicCamera } from '@react-three/drei'

export default function Scene({ ...props }) {
  const { nodes, materials } = useSpline('https://prod.spline.design/GA3j2YFjuhBlSFmj/scene.splinecode')
  return (
    <>
      <color attach="background" args={['#fffff']} />
      <group {...props} dispose={null}>
        <scene name="Scene">
          <group name="Cubes" position={[4.68, -3.25, 3.36]} rotation={[0.77, Math.PI / 4, 0]}>
            <mesh
              name="Cube 2"
              geometry={nodes['Cube 2'].geometry}
              material={materials['Untitled Material']}
              castShadow
              receiveShadow
              position={[560, 0, 0]}
            />
            <mesh
              name="Cube 4"
              geometry={nodes['Cube 4'].geometry}
              material={materials['Untitled Material']}
              castShadow
              receiveShadow
              position={[0, -560, 0]}
            />
            <mesh
              name="Cube 3"
              geometry={nodes['Cube 3'].geometry}
              material={materials['Untitled Material']}
              castShadow
              receiveShadow
              position={[0, 560, 0]}
            />
            <mesh
              name="Cube 6"
              geometry={nodes['Cube 6'].geometry}
              material={materials['Untitled Material']}
              castShadow
              receiveShadow
              position={[0, 0, -560]}
            />
            <mesh
              name="Cube 5"
              geometry={nodes['Cube 5'].geometry}
              material={materials['Untitled Material']}
              castShadow
              receiveShadow
              position={[0, 0, 560]}
            />
            <group name="Cube" position={[-560, 0, 0]}>
              <mesh
                name="Cube1"
                geometry={nodes.Cube1.geometry}
                material={materials['Untitled Material']}
                castShadow
                receiveShadow
              />
            </group>
          </group>
          <directionalLight
            name="Directional Light"
            castShadow
            intensity={0.7}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-near={-10000}
            shadow-camera-far={100000}
            shadow-camera-left={-1000}
            shadow-camera-right={1000}
            shadow-camera-top={1000}
            shadow-camera-bottom={-1000}
            position={[-185.94, 201.58, 192.67]}
          />
          <OrthographicCamera name="1" makeDefault={true} far={10000} near={-50000} />
          <hemisphereLight name="Default Ambient Light" intensity={0.75} color="#eaeaea" />
        </scene>
      </group>
    </>
  )
}
