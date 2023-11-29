function State({s, idx, click = () => {}, hover = () => {}}) {

    let color = 'b-c0'

    const p0 = s.substr(1,2)
    const p1 = s.substr(3,2)

    if (s[0] == '1') {
        color = 'b-c1'
    }

    const handleClick = () => {
        click(idx)
    }

    const handleHover = () => {
        hover(idx)
    }

    const className = 'text-center n-select pointer ' + color

    return <div className={className} onClick={handleClick} onMouseOver={handleHover}>
        {p0} | {p1}
    </div>
}

export { State }