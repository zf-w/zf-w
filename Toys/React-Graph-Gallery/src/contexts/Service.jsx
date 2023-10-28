import * as THREE from 'three'
import REACT from 'react'

class Service {

    wait = {}
    data = {}
    get(url = "", callback = (data) => {console.log(data)}) {
        if (this.data[url] != undefined) {
            callback(this.data[url])
            console.log("Getting data")
            return;
        }
        
        if (this.wait[url] != undefined) {
            this.wait[url].push(callback)
            console.log("Waiting")
            return;
        }
        this.wait[url] = []
        const waitlist = this.wait[url]
        waitlist.push(callback)

        fetch(url).then((res) => {
            return res.json()
        }).then((data) => {
            for (let i = 0; i < waitlist.length; ++i) {
                waitlist[i](data)
            }
            waitlist[url] = undefined
            this.data[url] = data
        })
    }
}

const ServiceContext = REACT.createContext(new Service())

export { ServiceContext }