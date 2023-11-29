class Controller {
    constructor(graph, colorAttribute, pointPosAttri, pointMaterial) {
        console.log("Constructing Controller")
        this.graph = graph
        this.colorAttribute = colorAttribute
        this.pointPosAttri = pointPosAttri
        this.pointMaterial = pointMaterial
        this.active = [0]
        this.head = 0
        this.add_queue = [0]
        this.pop_queue = []
        this.headUpdate = true
    }

    add(idx) {
        this.active.push(idx)
        this.head = idx
        this.add_queue.push(idx)
        this.headUpdate = true
    }

    pop() {
        const length = this.active.length
        if (length > 1) {
            const pop_idx = this.active.pop();
            this.pop_queue.push(pop_idx);
            this.setHead(this.active[length - 2])
        }
    }

    setHead(idx) {
        this.head = idx
        this.headUpdate = true
    }

    getActive() {
        const ans = []
        for (let i = this.active.length - 1; i >= 0; --i) {
            const node_i = this.active[i]
            let node = this.graph[node_i]
            ans.push({ste: node.ste, idx: node_i})
        }
        return ans
    }

    getNext() {
        const ans = []
        const last = this.active.length - 1
        const curr = this.graph[this.active[last]]
        for (let i = 0; i < curr.nxt.length; ++i) {
            const node_i = curr.nxt[i]
            const node = this.graph[node_i]
            ans.push({ste: node.ste, idx: node_i})
        }
        return ans
    }

    update() {
        // console.log("Controller updating")
        if (this.add_queue.length > 0 || this.pop_queue.length > 0) {
            const add_queue = this.add_queue
            const pop_queue = this.pop_queue

            const colorArray = this.colorAttribute.array
            
            while (add_queue.length > 0) {
                const node_i = add_queue.pop()
                const i4 = node_i * 4
                colorArray[i4 + 3] = 1
            }
            
            while (pop_queue.length > 0) {
                const node_i = pop_queue.pop()
                const i4 = node_i * 4
                colorArray[i4 + 3] = 0.05
            }

            this.colorAttribute.needsUpdate = true
        }

        if (this.headUpdate) {
            const posArray = this.pointPosAttri.array
            this.headUpdate = false
            const i = this.head
            const node = this.graph[i]

            posArray[0] = node.pos[0]
            posArray[1] = node.pos[1]
            posArray[2] = node.pos[2]
            if (node.ste[0] == '0') {
                this.pointMaterial.color.r = 1
                this.pointMaterial.color.b = 0
            } else {
                this.pointMaterial.color.r = 0
                this.pointMaterial.color.b = 1
            }
            this.pointPosAttri.needsUpdate = true
        }
        
    }

}


export { Controller }