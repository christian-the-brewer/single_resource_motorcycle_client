import { useState, useEffect } from "react"
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import LoadingScreen from '../shared/LoadingScreen'
import { getAllMotorcycles } from '../../api/motorcycles'
import messages from '../shared/AutoDismissAlert/messages'

const cardContainerStyle = {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center'
}

const IndexMotorcycles = (props) => {
    const [motorcycles, setMotorcycles] = useState(null)
    const [error, setError] = useState(false)

    const { msgAlert } = props

    useEffect(() => {
        console.log(props)
        getAllMotorcycles()
            .then(res => setMotorcycles(res.data.motorcycles))
            .catch(err => {
                msgAlert({
                    heading: 'Error Getting Motorcycles',
                    message: messages.getMotorcyclesFailure,
                    variant: 'danger',
                })
                setError(true)
            })
    }, [])

    if (error) {
        return <p>Error!</p>
    }


    if (!motorcycles) {
        return <LoadingScreen />
    } else if (motorcycles.length === 0) {
        return <p>Add some bikes to the database</p>
    }

    const motorcycleCards = motorcycles.map(motorcycle => (
        <Card style={{ width: '30%', margin: 5 }} key={motorcycle.id}>
            <Card.Header>{motorcycle.year} {motorcycle.brand} {motorcycle.modelName}</Card.Header>
            <Card.Body>
                <Link to={`/motorcycles/${motorcycle.id}`}><img src={motorcycle.img} alt={motorcycle.modelName}></img></Link>
                <Card.Text>

                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <p>A {motorcycle.engineSize}cc {motorcycle.type}</p>
            </Card.Footer>
        </Card>
    ))

    return (
        <div style={cardContainerStyle}>
            {motorcycleCards}
        </div>
    )
}

export default IndexMotorcycles