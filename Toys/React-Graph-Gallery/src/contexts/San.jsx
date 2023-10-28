import * as THREE from 'three'
import REACT from 'react'

class SceneInfo {
    html = undefined
    scene = new THREE.Scene()
    camera = new THREE.PerspectiveCamera()
    update = undefined
    keep = true

    constructor(html, scene, camera) {
        this.html = html
        this.scene = scene
        this.camera = camera
    }
}

class San {

  sceneInfoList = []
  canvas = undefined
  renderer = undefined
  
  renderSceneInfo(sceneInfo = new SceneInfo) {
    const {left, right, top, bottom, width, height} = 
      sceneInfo.html.getBoundingClientRect();
    let parent = this.canvas.getBoundingClientRect();
    const tHeight = parent.height;
    const tWidth = parent.width;
    // console.log(left, right, top, bottom, height, width)
    if (bottom < 0 ||top > tHeight ||
      right < 0 || left > tWidth) {
        return;
    }
    const yTop = tHeight - bottom;
    //console.log(top);
    const camera = sceneInfo.camera
    camera.aspect = width / height
    camera.updateProjectionMatrix()

    if (sceneInfo.update) {
      sceneInfo.update()
    }

    this.renderer.setScissor(left, yTop, width + 1, height + 1);
    //this.renderer.setViewport(0,0,100,100);
    this.renderer.setViewport(left, yTop, width + 1, height + 1);
    //console.log(sceneInfo.scene.children.length);
    this.renderer.render(sceneInfo.scene, sceneInfo.camera);
    
    //this.renderer.setScissorTest(false);
  }

  render() {
    for (let i = 0; i < this.sceneInfoList.length; ++i) {
        const curr_scene = this.sceneInfoList[i]
        if (curr_scene.keep) {
          this.renderSceneInfo(curr_scene)
        } else {
          this.sceneInfoList.splice(i, 1)
          // console.log(this.sceneInfoList.length)
        }
        
    }
  }

  handleResize() {
    console.log("Resizing")
    const renderer = this.renderer

    // Update sizes
    let width = window.innerWidth
    let height = window.innerHeight
    if (this.canvas != undefined) {
      const box = this.canvas.getBoundingClientRect()

      width = box.width
      height = box.height
    }
    
    // Update renderer
    if (renderer != undefined) {
      renderer.setSize(width, height, false)
      
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    }
  }

  constructor() {
    console.log("Constructing San")
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
    renderer.setScissorTest(true);
    // const updator = this.updator

    // AddGraphSet(scene, updator)
    const tick = () => {
        
        // Call tick again on the next frame
        this.render()

        window.requestAnimationFrame(tick)
    }
  
    tick()
  }

  add(sceneInfo = new SceneInfo) {

    this.sceneInfoList.push(sceneInfo)

  }

  asyncAdd() {
    return (obj = new THREE.Object3D) => {
      console.log("Async adding")
      this.add(obj)
    }
  }

  dispose() {
    this.renderer.dispose()
    this.renderer = undefined
    this.canvas = undefined
  }
}

const SanContext = REACT.createContext(new San())

export { SanContext, SceneInfo }