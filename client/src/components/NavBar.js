import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Link } from '@mui/material';
import Typography from '@mui/material/Typography';

export default function NavBar() {
    const [menu, setMenu] = useState(['Builders', 'New Builder', 'New Order'])

    return (
        <Box sx={{ flexGrow: 2, }}>
            <AppBar position="static" sx={{ display: 'flex', flexDirection: 'row', alignItems: 'space-between', p: 2, bgcolor: 'text.primary' }}>
                <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="h4" component="div" >
                        Nuts&Bolts
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-end', flexGrow: 1, justifyContent: 'space-evenly' }}>
                    <Link href={`/builders`} sx={{ color: '#fff' }} underline="hover" variant="text" >
                        <Typography>
                            Builders
                        </Typography>
                    </Link>
                    <Link href={`/builders/newbuilder`} sx={{ color: '#fff' }} underline="hover" variant="text" >
                        <Typography>
                            New Builder
                        </Typography>
                    </Link>
                    <Link href={`/orders/neworder`} sx={{ color: '#fff' }} underline="hover" variant="text" >
                        <Typography>
                            New Order
                        </Typography>
                    </Link>
                </Box>
            </AppBar >
        </Box >
    );
}
