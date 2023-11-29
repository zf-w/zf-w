import { useParams, Link, useLoaderData } from 'react-router-dom'
import { Graph } from '../components/Graph'

function SingleGraph() {
    console.log("Single")
    const base_api = "/graph-files"
    const { str } = useParams()
    const data = useLoaderData()
    
    let found = false
    for (let i = 0; i < data.length; ++i) {
        if (data[i] == str) {
            found = true
            break
        }
    }
    if (!found) {
        throw "Error, graph name not found"
    }
    return (
        <div style={{"position": "relative", width: "100%", height: "100vh"}}>
            <Graph url={`${base_api}/${str}.graph.json`} style={{height : "100%"}}/>
        </div>
    )
}

export { SingleGraph }