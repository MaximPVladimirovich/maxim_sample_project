import { List, ListItem, Button, Grid, Paper, Typography, Divider } from "@mui/material"
export default function SelectBuilder({ selected, onOpen }) {
    return (
        <Paper sx={{ m: 1 }}>
            <List >
                <ListItem>
                    <Typography variant="h4">
                        Select Builders
                    </Typography>
                </ListItem>
                <Divider variant="middle" />
                <ListItem>
                    <Grid item>
                        <Button variant="outlined" onClick={onOpen} >{selected?.name ? selected.name : "Select Builder"}</Button>
                    </Grid>
                </ListItem>
            </List>
        </Paper>

    )
}