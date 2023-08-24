import Card from './Card'
import 'animate.css';
function Tours({tours, removeTour}) {
    return (
        <div className='container'>
            <div>
                <h2 className='title animate__animated animate__backInDown'> Tour Plan</h2>
            </div>
            <div className='cards'>
                {
                    tours.map( (tour) => {
                        return <Card className="" key={tour.id} {...tour} removeTour={removeTour}></Card>
                    } )
                }
            </div>
        </div>
    );
}

export default Tours;