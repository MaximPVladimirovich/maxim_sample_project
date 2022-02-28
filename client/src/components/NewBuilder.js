import { useEffect, useState } from "react"

export default function NewBuilder() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [builder, setBuilder] = useState({
        createdAt: new Date(),
        name: "",
        phone: "",
        email: "",
        coordinates: {
            lon: "",
            lat: ""
        },
        description: ""
    });

    const handleChange = (e) => {
        setBuilder({ ...builder, [e.target.name]: e.target.value })
    }
    const handleCoordinateshange = (e) => {
        setBuilder({ ...builder, coordinates: { ...builder.coordinates, [e.target.name]: e.target.value } })
    }
    // const handleLatChange = (e) => {
    //     setAddress({ ...address, coordinates: { ...address.coordinates, lat: e.target.value } })
    // }
    // const handleDescriptionChange = (e) => {
    //     setAddress({ ...address, description: e.target.value })
    // }
    // below function will be called when user
    // click on submit button .
    const handleSubmit = (e) => {
        e.preventDefault();
        sendData()
    }

    function sendData() {
        const payload = JSON.stringify({
            builder
        })
        console.log(builder)

        const headers = new Headers({
            'Content-Type': 'application/json',
            'mode': 'no-cors'
        })

        // Send data to the backend via POST
        fetch('http://localhost:3001', {  // Enter your IP address here
            method: 'POST',
            headers: headers,
            body: payload
        })
    }
    return (
        <div className="App">
            <form onSubmit={(e) => { handleSubmit(e) }}>
                <h2> Create new builder</h2>
                <label >
                    Name:
                </label><br />
                <input type="text" name="name" value={builder.name} required onChange={(e) => { handleChange(e) }} /><br />
                <label >
                    Phone:
                </label><br />
                <input type="tel" name="phone" value={builder.phone} required onChange={(e) => { handleChange(e) }} /><br />
                <label>
                    Email:
                </label><br />
                <input type="email" name="email" value={builder.email} required onChange={(e) => { handleChange(e) }} /><br />
                <label>
                    Longitude:
                </label><br />
                <input type="number" name="lon" value={builder.coordinates.lon} required onChange={(e) => { handleCoordinateshange(e) }} /><br />
                <label>
                    Latitude:
                </label><br />
                <input type="number" name="lat" value={builder.coordinates.lat} required onChange={(e) => { handleCoordinateshange(e) }} /><br />
                <label>
                    Description:
                </label><br />
                <textarea type="text" name="description" value={builder.description} required onChange={(e) => { handleChange(e) }} /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}