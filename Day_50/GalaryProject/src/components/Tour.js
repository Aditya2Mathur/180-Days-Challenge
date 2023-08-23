
function Tour({tours}) {



    return (
        <div>
            <div>
                <h2> Tour Plan</h2>
            </div>
            <div>
                {
                    tours.map( (tour ) => {
                        return <Card  {...Tour} removeCardHandler = {removeCardHandler}></Card>
                    })
                }
            </div>
        </div>
    )
}

export default Tour;