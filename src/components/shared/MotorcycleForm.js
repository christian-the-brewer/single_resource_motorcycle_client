import { Form, Button, Container } from "react-bootstrap";

const MotorcycleForm = (props) => {
    const { motorcycle, handleChange, heading, handleSubmit } = props

    return (
        <Container className="justify-content-center">
            <h3>{heading}</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Label htmlFor="brand">Brand:</Form.Label>
                <Form.Control
                    placeholder="Manufacturer"
                    name="brand"
                    id="brand"
                    value={motorcycle.brand}
                    onChange={handleChange}
                />
                <Form.Label htmlFor="modelName">Model Name:</Form.Label>
                <Form.Control
                    placeholder="Model"
                    name="modelName"
                    id="modelName"
                    value={motorcycle.modelName}
                    onChange={handleChange}
                />
                <Form.Label htmlFor="modelCode">Model Code:</Form.Label>
                <Form.Control
                    placeholder="Official model code"
                    name="modelCode"
                    id="modelCode"
                    value={motorcycle.modelCode}
                    onChange={handleChange}
                />
                <Form.Label htmlFor="type">Type:</Form.Label>
                <Form.Control
                    placeholder="Sport, Cruiser, etc.."
                    name="type"
                    id="type"
                    value={motorcycle.type}
                    onChange={handleChange}
                />
                <Form.Label htmlFor="year">Year:</Form.Label>
                <Form.Control
                    placeholder="Who made it"
                    name="year"
                    id="year"
                    value={motorcycle.year}
                    onChange={handleChange}
                />
                <Form.Label htmlFor="engineSize">Engine Size:</Form.Label>
                <Form.Control
                    placeholder="Size of Engine in CC's"
                    name="engineSize"
                    id="engineSize"
                    value={motorcycle.engineSize}
                    onChange={handleChange}
                />
                <Form.Label htmlFor="engineCylinders">Number of Cylinders:</Form.Label>
                <Form.Control
                    placeholder="How many Cylinders"
                    name="engineCylinders"
                    id="engineCylinders"
                    value={motorcycle.engineCylinders}
                    onChange={handleChange}
                />
                <Form.Label htmlFor="img">Image:</Form.Label>
                <Form.Control
                    placeholder="URL of image"
                    name="img"
                    id="img"
                    value={motorcycle.img}
                    onChange={handleChange}
                />
                <Button type="submit">Submit</Button>
            </Form>
        </Container>
    )
}

export default MotorcycleForm