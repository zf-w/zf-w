import * as REACT from 'react'
import * as THREE from 'three'
import { useParams, Link } from 'react-router-dom'
import { Graph } from '../components/Graph'
import { ServiceContext } from '../contexts/Service'

function GraphSection() {

    const api_url = "/graph-files/"

    const { id } = useParams()
    
    let page_id = id
    if (id == undefined) {
        page_id = 0
    }

    const per_page = 12
    let width = 400
    let height = 400

    if (width > window.innerWidth) {
        width = window.innerWidth * 0.8
        height = width
    }
    
    const [container_width, setContainer] = REACT.useState(Math.floor(window.innerWidth / width) * width)
    const [names, setNames] = REACT.useState(undefined)
    const [pages, setPages] = REACT.useState(undefined)

    const Service = REACT.useContext(ServiceContext)

    const resize = () => {
        setContainer(Math.floor(window.innerWidth / width) * width)
        if (width > window.innerWidth) {
            width = window.innerWidth
            console.log(width)
            height = width
        }
    }

    REACT.useEffect(() => {
        Service.get(api_url + "index.json", (data) => {
            const temp = []
            for (let i = 0; i * per_page < data.length; ++i) {
                temp.push(i)
            }
            setPages(temp)
            setNames(data.slice(page_id * per_page, page_id * per_page + per_page))
        })
        window.addEventListener('resize', resize)
        return () => {
            window.removeEventListener('resize', resize)
        }
    }, [page_id, container_width])

    const graph_style={width: width - 10 + "px", height: height - 10 + "px", margin: "5px", padding: 0}
    const tag_style={color:"#ffffff", textAlign:"center", marginDown: "20px", position: "relative", zIndex: 3}
    const nexts_style={textAlign: "center", color: "#ffffff", margin: "100px 0px"}
    return (
        <>
            <section style={{position: "relative", width: container_width + "px", margin: "auto"}}>
                {names && names.map((name, i) => 
                    <div key={i} style={{display: "inline-block"}}>
                        <Graph url={api_url + name + ".graph.json"} style={graph_style} />
                        <div style={tag_style}><Link to={`/Graphs/${name}`}>{name}</Link></div>
                    </div>
                )}
            </section>
            <div style={nexts_style}>
                <h3>Pages</h3>
                {pages && pages.map((i) => <Link key={i} to={`/Graphs/Pages/${i}`}>{i}</Link>)}
            </div>
            <div style={{textAlign: "center", color: "#ffffff", margin: "20px"}}>Designed by Zhifeng Wang 2023</div>
        </>
        
    )
}

export { GraphSection }