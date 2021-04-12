import HogTile from "./HogTile"
import Filter from "./Filter"
import React, {useState} from "react"

function HogContainer ({hogs}) {
    const [checkBox, setCheckBox] = useState(false)
    const [dropDown, setDropDown] = useState("all")
    

    function handleCheckBox () {
        setCheckBox(prev => !prev)
    }

    function handleDropDown (event) {
        event.preventDefault()
        setDropDown(event.target.value)
    }

    

    const filteredHogs = [...hogs].filter((hog) => {
        if (checkBox) {
            return hog.greased
        } else {
            return hog
        }
    })

    const sortedHogs = filteredHogs.sort((a, b) => {
        if (dropDown === "name") {
            return a.name.localeCompare(b.name)
        } else if (dropDown === "weight") {
        return b.weight - a.weight
        } else {
            return filteredHogs
        }
    })
    const hogsToDisplay = sortedHogs.map((hog) => 
        <HogTile 
            key={hog.name} 
            hog={hog} 
        />
    )

    return (
        <div className="indexWrapper">
            <Filter 
                handleCheckBox={handleCheckBox}
                handleDropDown={handleDropDown}
                checkBox={checkBox}
                dropDown={dropDown}
            />
            {hogsToDisplay}
        </div>
    );
}

export default HogContainer;
