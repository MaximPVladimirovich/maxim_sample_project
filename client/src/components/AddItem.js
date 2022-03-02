import { List, ListItem, Grid, TextField, Button, Box, Paper } from "@mui/material";

export default function AddItem({ item, handleAddItem, handleItemChange }) {
    return (
        <Paper sx={{ m: 1 }}>
            <Box sx={{ height: '100%' }}>
                <List >
                    <ListItem>
                        <h2>Add Item</h2>
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
                                    value={item.name}
                                    onChange={e => handleItemChange(e)}
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    required
                                    id="price"
                                    size="small"
                                    type="number"
                                    name="price"
                                    label="price"
                                    value={item.price}
                                    onChange={e => handleItemChange(e)}
                                />
                            </Grid>
                            <Grid item>
                                {/* Needs better validation. Can't filter negative numbers. */}
                                <TextField
                                    required
                                    id="quantity"
                                    size="small"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    type="number"
                                    name="quantity"
                                    label="quantity"
                                    value={item.quantity}
                                    onChange={e => handleItemChange(e)}
                                />
                            </Grid>
                        </Grid>
                    </ListItem>
                    <ListItem>
                        <Button variant="outlined" onClick={(e) => handleAddItem(e)} >Add Item</Button>
                    </ListItem>
                </List>
            </Box>
        </Paper>

    )
}