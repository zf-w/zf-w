import * as THREE from 'three'
import REACT from 'react'
import { Updator } from './Updator'

class San {

  scene = new THREE.Scene()
  canvas = undefined
  renderer = undefined
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100)
  updator = new Updator()

  handleResize() {
    console.log("Resizing")
    const renderer = this.renderer
    const camera = this.camera
    
    
    // Update sizes
    let width = window.innerWidth
    let height = window.innerHeight
    if (this.canvas != undefined) {
      const box = this.canvas.getBoundingClientRect()

      width = box.width
      height = box.height
    }

    // Update camera
    camera.aspect = width / height
    camera.updateProjectionMatrix()
    
    // Update renderer
    if (renderer != undefined) {
      renderer.setSize(width, height, false)
      
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    }
  }

  constructor() {
    console.log("Constructing San")
    this.scene.add(this.camera)
    this.camera.position.z = 10

    window.addEventListener('resize', () => {this.handleResize()})
  }

  init(canvas) {
    console.log("Starting")
    if (this.renderer != undefined) {
      return
    }
    this.canvas = canvas
    this.renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: true
    })
    this.handleResize()
    const renderer = this.renderer
    const camera = this.camera
    const scene = this.scene
    const updator = this.updator

    // AddGraphSet(scene, updator)
    const tick = () => {
        
        // mesh.rotation.y = elapsedTime
        // Update controls
        updator.update()
        // console.log("!")

        // Render
        renderer.render(scene, camera)
  
        // Call tick again on the next frame
        window.requestAnimationFrame(tick)
    }
  
    tick()
  }

  add(obj = new THREE.Object3D) {

    this.scene.add(obj)

  }

  asyncAdd() {
    return (obj = new THREE.Object3D) => {
      console.log("Async adding")
      this.add(obj)
    }
  }

  dispose() {
    this.renderer.dispose()
    this.scene.clear()
    this.renderer = undefined
    this.canvas = undefined
  }
}

const SanContext = REACT.createContext(new San())

export { SanContext }