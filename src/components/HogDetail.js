
function HogDetail ({ specialty, greased, weight, medal }) {
    return (
        <div className="hoggyText">
            <p>Specialty: {specialty}</p>
            <p>Greased: {greased ? "Very" : "Not at all"}</p>
            <p>Weight: {weight}</p>
            <p className="achievementText">Highest Medal Achieved: {medal} </p>
        </div>
    )
}

export default HogDetail;