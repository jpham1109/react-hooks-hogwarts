
function Filter ({handleCheckBox, handleDropDown, checkBox, dropDown}) {
    return (
        <form className="filterWrapper">
            <label>See Greased Hogs
                <input 
                    type="checkbox" 
                    id="greased"
                    checked={checkBox ? "true" : ""}
                    onChange={handleCheckBox}
                />
            </label>
            <label>Sort Hogs
                <select 
                    id="sort"
                    value={dropDown}
                    onChange={handleDropDown}
                >
                    <option value="all">All</option>
                    <option value="name">Name</option>
                    <option value="weight">Weight</option>
                </select>
            </label>
        </form>
    )
}

export default Filter;