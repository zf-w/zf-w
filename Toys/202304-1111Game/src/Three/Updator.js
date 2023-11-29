import * as THREE from "three"

class Updator {

    list = []
    clock = new THREE.Clock()
    constructor() {}

    add(f) {
        this.list.push(f)
    }

    update() {
        const delta = this.clock.getDelta()
        for (let i = 0; i < this.list.length; ++i) {
            this.list[i](delta)
        }
    }
}

export { Updator };