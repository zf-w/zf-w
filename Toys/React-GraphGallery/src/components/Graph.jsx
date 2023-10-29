import * as REACT from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { SanContext, SceneInfo } from "../contexts/San"
import { ServiceContext } from '../contexts/Service';

function Graph({url = "Jagmesh1.graph.json",...props}) {
    const San = REACT.useContext(SanContext)
    const Service = REACT.useContext(ServiceContext)
    const ref = REACT.useRef()

    const scene = new THREE.Scene()
    // scene.add(new THREE.Mesh(new THREE.BoxGeometry(), new THREE.MeshBasicMaterial({color: 0xff0000})))
    scene.background = new THREE.Color(0x000000)
    
    const camera = new THREE.PerspectiveCamera(75, 1.0,0.01, 10)
    camera.position.z = 2.0
    let loading = true

    Service.get(url, (data) => {
        const pos_list = data.position
        const indices = data.indices
        let Dim = data.Dim
        if (Dim == undefined) {
            let max = 0
            for (let i = 0; i < indices.length; ++i) {
                if (indices[i] > max) {
                    max = indices[i]
                }
            }
            max += 1
            Dim = pos_list.length / max
        }

        const size = pos_list.length / Dim
        
        let pos_arr = new Float32Array(size * 3)
        if (data.Dim == 2) {
            for (let i = 0; i < size ; ++i) {
                const i2 = i * 2
                const i3 = i * 3
                pos_arr[i3] = pos_list[i2]
                pos_arr[i3 + 1] = pos_list[i2 + 1]
            }
        } else {
            for (let i = 0; i < size ; ++i) {
                const id = i * Dim
                const i3 = i * 3
                pos_arr[i3] = pos_list[id]
                pos_arr[i3 + 1] = pos_list[id + 1]
                pos_arr[i3 + 2] = pos_list[id + 2]
            }
        }
        const pos_att = new THREE.BufferAttribute(pos_arr, 3)
        const geometry = new THREE.BufferGeometry()
        geometry.setAttribute("position", pos_att)
        geometry.setIndex(data.indices)
        scene.add(new THREE.LineSegments(geometry, new THREE.LineBasicMaterial({color:0xffffff})))
        loading = false
    })
    REACT.useEffect(() => {
        const control = new OrbitControls(camera, ref.current)
        control.enableZoom = false
        control.enableSpan = false
        control.autoRotate = true
        control.autoRotateSpeed = 0.3
        const test = new SceneInfo(ref.current, scene, camera)
        test.update = () => {
            control.update()
        }
        San.add(test)
        return () => {
            console.log("Removing")
            test.keep = false
        }
    })

    return <div className='canvas' style={props.style}  ref={ref} />
} 

export { Graph }