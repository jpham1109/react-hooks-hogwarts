import HogDetail from "./HogDetail"
import React, {useState} from "react"

function HogTile ({ hog }) {
    const [hogDetail, setHogDetail] = useState(false)
    const [hideHog, setHideHog] = useState(false)

    function handleHogDetail () {
        setHogDetail(prevState => !prevState)
    }

    function handleHideHog () {
        setHideHog(prev => !prev)
    }

    return (
        <div className="ui-grid-container" >
            <div className="pigTile" onClick={handleHogDetail}>
                <button onClick={handleHideHog} >{ hideHog ? "Show" : "Hide"} This Hog</button>
                <div style={{display: hideHog ? "none" : "block"}}>
                    <h3>{hog.name}</h3>
                    <img className="minPigTile" src={hog.image} alt={hog.name}/>
                    {hogDetail && <HogDetail 
                        specialty={hog.specialty} 
                        greased={hog.greased}
                        weight={hog.weight}
                        medal={hog["highest medal achieved"]}
                    />}
                </div>
            </div>
        </div>
    )
}

export default HogTile