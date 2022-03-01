import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';

export default function NavBar() {
    return (
        <Box sx={{ flexGrow: 1, }}>
            <AppBar position="static" sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', p: 2, bgcolor: 'text.primary' }}>
                <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="h4" component="div" >
                        Nuts&Bolts
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-end', flexGrow: 4, justifyContent: 'flex-end' }}>
                    <Box sx={{ mx: 2 }}>
                        <Link to="/builders">
                            <Typography >
                                Builders
                            </Typography>
                        </Link>
                    </Box>
                    <Box sx={{ mx: 2 }}>
                        <Link to="/newbuilder">
                            <Typography >
                                Create Builder
                            </Typography>
                        </Link>
                    </Box>
                    <Box sx={{ mx: 2 }}>
                        <Link to="/neworder">
                            <Typography >
                                New Order
                            </Typography>
                        </Link>
                    </Box>
                </Box>
            </AppBar>
        </Box>
    );
}
