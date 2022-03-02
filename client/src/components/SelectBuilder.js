import { List, ListItem, Button, Grid, Paper } from "@mui/material"
export default function SelectBuilder({ selected, onOpen }) {
    return (
        <Paper sx={{ m: 1 }}>
            <List >
                <ListItem>
                    <h2>Select Builder</h2>
                </ListItem>
                <ListItem>
                    <Grid item>
                        <Button variant="outlined" onClick={onOpen} >{selected?.name ? selected.name : "Select Builder"}</Button>
                    </Grid>
                </ListItem>
            </List>
        </Paper>

    )
}