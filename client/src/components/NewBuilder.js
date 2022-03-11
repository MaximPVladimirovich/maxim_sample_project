import { Paper, Box, List, ListItem, Typography, Grid, TextField, Button } from "@mui/material";
import { useState } from "react"

export default function NewBuilder() {
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

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validates
        let validated = Object.keys(builder).every(key => {
            if (builder[key] === "") {
                return false;
            }
            return true
        })

        if (validated) {
            sendData();
        } else {
            alert("Please complete the form.")
            console.log(builder)
        }
        setBuilder({
            createdAt: new Date(),
            name: "",
            phone: "",
            email: "",
            coordinates: {
                lon: "",
                lat: ""
            },
            description: ""
        })
    }

    // Sends to local node server.
    function sendData() {
        const payload = JSON.stringify(builder)

        const headers = new Headers({
            'Content-Type': 'application/json',
            'mode': 'no-cors'
        })

        // Send data to the backend via POST
        fetch('http://localhost:3001', {
            method: 'POST',
            headers: headers,
            body: payload
        })
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Paper sx={{ width: 1 / 2, mx: 'auto', my: 5 }}>
                <List sx={{ mx: 'auto' }}>
                    <ListItem>
                        <Typography variant="h4">
                            Create new Builder
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <Grid container spacing={4}>
                            <Grid item>
                                <TextField
                                    required
                                    id="name"
                                    size="small"
                                    type="text"
                                    name="name"
                                    label="name"
                                    value={builder.name}
                                    onChange={e => handleChange(e)}>
                                    Name:
                                </TextField>
                            </Grid>
                            <Grid item>
                                <TextField
                                    required
                                    id="phone"
                                    size="small"
                                    type="tel"
                                    name="phone"
                                    label="phone"
                                    value={builder.phone}
                                    onChange={e => handleChange(e)}>
                                    Phone:
                                </TextField>
                            </Grid>
                            <Grid item>
                                <TextField
                                    required
                                    id="email"
                                    size="small"
                                    type="text"
                                    name="email"
                                    label="email"
                                    value={builder.email}
                                    onChange={e => handleChange(e)}>
                                    Email:
                                </TextField>
                            </Grid>
                            <Grid item>
                                <TextField
                                    required
                                    id="lon"
                                    size="small"
                                    type="number"
                                    name="lon"
                                    label="Longitude"
                                    value={builder.coordinates.lon}
                                    onChange={e => handleCoordinateshange(e)}>
                                    Longitude:
                                </TextField>
                            </Grid>
                            <Grid item>
                                <TextField
                                    required
                                    id="lat"
                                    size="small"
                                    type="number"
                                    name="lat"
                                    label="Latitude"
                                    value={builder.coordinates.lat}
                                    onChange={e => handleCoordinateshange(e)}>
                                    Latitude:
                                </TextField>
                            </Grid>
                            <Grid item>
                                <TextField
                                    required
                                    id="description"
                                    size="small"
                                    type="text"
                                    name="description"
                                    label="Address description"
                                    value={builder.description}
                                    onChange={e => handleChange(e)}>
                                    Description
                                </TextField>
                            </Grid>
                        </Grid>
                    </ListItem>
                    <ListItem>
                        <Button variant="outlined" onClick={(e) => handleSubmit(e)} >Create Builder</Button>
                    </ListItem>
                </List>
            </Paper>
        </Box>

    );
}