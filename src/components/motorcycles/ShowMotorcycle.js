import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Container, Card, Button } from 'react-bootstrap'
import LoadingScreen from '../shared/LoadingScreen'
import { getOneMotorcycle, updateMotorcycle, removeMotorcycle } from '../../api/motorcycles'
import messages from '../shared/AutoDismissAlert/messages'
import EditMotorycle from './EditMotorcycle'


const cardContainerLayout = {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'row wrap'
}

const ShowMotorcycle = (props) => {
    const [motorcycle, setMotorcycle] = useState(null)
    const [editModalShow, setEditModalShow] = useState(false)
    const [updated, setUpdated] = useState(false)

    const { id } = useParams()
    const navigate = useNavigate()

    const { user, msgAlert } = props


    useEffect(() => {
        getOneMotorcycle(id)
            .then(res => setMotorcycle(res.data.motorcycle))
            .catch(err => {
                msgAlert({
                    heading: 'Error getting motorcycle',
                    message: messages.getMotorcyclesFailure,
                    variant: 'danger'
                })
                navigate('/')
                //navigate back to the home page if there's an error fetching
            })
    }, [updated])


    const removeTheMotorcycle = () => {
        removeMotorcycle(user, motorcycle.id)
            // on success send a success message
            .then(() => {
                msgAlert({
                    heading: 'Success',
                    message: messages.removeMotorcycleSuccess,
                    variant: 'success'
                })
            })
            // then navigate to index
            .then(() => { navigate('/') })
            // on failure send a failure message
            .catch(err => {
                msgAlert({
                    heading: 'Error removing motorcycle',
                    message: messages.removeMotorcycleFailure,
                    variant: 'danger'
                })
            })
    }

    if (!motorcycle) {
        return <LoadingScreen />
    }

    return (
        <>
            <Container className="fluid">
                <Card>
                    <Card.Header>{motorcycle.year} {motorcycle.brand} {motorcycle.modelName}</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <div><small>Manufacturer: {motorcycle.brand}</small></div>
                            <div><small>Model Code: {motorcycle.modelCode}</small></div>
                            <div><small>Style: {motorcycle.type}</small></div>
                            <div><small>Engine Size: {motorcycle.engineSize}cc's</small></div>
                            <div><small>Number of Cylinders: {motorcycle.engineCylinders}</small></div>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>

                        <Button onClick={() => setEditModalShow(true)}
                            className="m-2"
                            variant="warning"
                        >
                            Edit Motorcycle
                        </Button>
                        <Button onClick={() => removeTheMotorcycle()}
                            className="m-2"
                            variant="danger"
                        >
                            Delete
                        </Button>

                    </Card.Footer>
                </Card>
            </Container>

            <EditMotorycle
                user={user}
                motorcycle={motorcycle}
                show={editModalShow}
                updateMotorcycle={updateMotorcycle}
                msgAlert={msgAlert}
                triggerRefresh={() => setUpdated(prev => !prev)}
                handleClose={() => setEditModalShow(false)}
            />
        </>
    )
}

export default ShowMotorcycle