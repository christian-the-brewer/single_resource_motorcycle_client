import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import MotorcycleForm from '../shared/MotorcycleForm'
import { updateMotorcycleSuccess, updateMotorcycleFailure } from '../shared/AutoDismissAlert/messages'

const EditMotorcycle = (props) => {
    const {
        user, show, handleClose,
        updateMotorcycle, msgAlert, triggerRefresh
    } = props

    const [motorcycle, setMotorcycle] = useState(props.motorcycle)



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

    const handleSubmit = (e) => {
        // e equals the event
        e.preventDefault()

        updateMotorcycle(user, motorcycle)
            // if we're successful in the modal, we want the modal to close
            .then(() => handleClose())
            // send a success message to the user
            .then(() => {
                msgAlert({
                    heading: 'Edit Complete!',
                    message: updateMotorcycleSuccess,
                    variant: 'success'
                })
            })

            .then(() => triggerRefresh())
            // if there is an error, tell the user about it
            .catch(() =>
                msgAlert({
                    heading: 'Error',
                    message: updateMotorcycleFailure,
                    variant: 'danger'
                })
            )
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton />
            <Modal.Body>
                <MotorcycleForm
                    motorcycle={motorcycle}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    heading="Update"
                />
            </Modal.Body>
        </Modal>
    )
}

export default EditMotorcycle