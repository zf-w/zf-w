import * as REACT from 'react'
import { SanContext } from "../contexts/San"


function SanElem() {
    const San = REACT.useContext(SanContext)

    const ref = REACT.useRef()

    REACT.useEffect(() => {
        San.init(ref.current)
    })

    return <canvas className='root' ref={ref}/>
}

export { SanElem }