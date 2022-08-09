import { useState } from 'react'
import { createMotorcycle } from '../../api/motorcycles'
import { useNavigate } from 'react-router-dom'
import { createMotorcycleSuccess, createMotorcycleFailure } from '../shared/AutoDismissAlert/messages'
import MotorcycleForm from '../shared/MotorcycleForm'

const CreateMotorcycle = (props) => {

    const { user, msgAlert } = props

    const navigate = useNavigate()

    const [motorcycle, setMotorcycle] = useState({
        brand: '',
        modelName: '',
        modelCode: '',
        type: '',
        year: '',
        engineSize: '',
        engineCylinders: '',
        img: '',


    })


    const handleChange = (e) => {
        setMotorcycle(prevMotorcycle => {
            let updatedValue = e.target.value
            const updatedName = e.target.name

            if (e.target.type === 'number') {

                updatedValue = parseInt(e.target.value)
            }



            const updatedMotorcycle = {
                [updatedName]: updatedValue
            }
            return {
                ...prevMotorcycle,
                ...updatedMotorcycle
            }
        })
    }

    // We'll add a handleSubmit here that makes an api request, then handles the response
    const handleSubmit = (e) => {
        // e equals the event
        e.preventDefault()

        createMotorcycle(user, motorcycle)
            // if we're successful, navigate to the show page for the new pet
            .then(res => { navigate(`/motorcycle/${res.data.motorcycle.id}`) })
            // send a success message to the user
            .then(() => {
                msgAlert({
                    heading: 'Success!',
                    message: createMotorcycleSuccess,
                    variant: 'success'
                })
            })
            // if there is an error, tell the user about it
            .catch(() =>
                msgAlert({
                    heading: 'Error',
                    message: createMotorcycleFailure,
                    variant: 'danger'
                })
            )
    }

    return (
        <MotorcycleForm
            motorcycle={motorcycle}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            heading="Add new motorcycle"
        />
    )
}

export default CreateMotorcycle