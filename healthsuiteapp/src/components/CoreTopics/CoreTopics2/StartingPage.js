import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';

const StartingPage = () => {
    const navigate = useNavigate();

    const handleNext = () => {
        // Adjust this to navigate to the next relevant content or section
        navigate('/library/core-topic2/level1');
    };

    // const handlePrevious = () => {
    //     // Set this to navigate back to the main menu or previous section
    //     navigate('/previous-section-path');
    // };

    return (
        <Box sx={{
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            justifyContent: 'space-between'
        }}>
            <Typography variant="h4" sx={{ color: 'red', textAlign: 'center', mb: 3 }}>Core Topic 2</Typography>
            <Box>
                <Typography variant="h5" sx={{ mb: 1, textAlign: 'center', bgcolor: '#007FFF', color: 'white', p: 1 }}>Support for You</Typography>
                <Typography variant="h6" sx={{ mb: 2 }}>Page 1 of 1</Typography>
                <ul>
                    <li>Caring for someone with dementia can be draining.</li>
                    <li>You might feel isolated and seek support.</li>
                    <li>It's natural to need a break from caregiving.</li>
                    <li>The following sections will provide you with information on accessing formal care providers, and support networks and asking family and friends for support.</li>
                </ul>
            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mt: 2
            }}>
                <Button variant="contained" disabled >Previous</Button>
                <Typography sx={{ fontSize: '0.875rem' }}>Page 1</Typography>
                <Button variant="contained" onClick={handleNext}>Next</Button>
            </Box>
        </Box>
    );
};

export default StartingPage;