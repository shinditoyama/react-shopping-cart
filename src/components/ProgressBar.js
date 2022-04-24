import { Box, LinearProgress, Typography } from '@mui/material';

const ProgressBar = ({ title, percentage }) => {
    const porcentagem = percentage ? percentage : 0;

    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '100%', mr: 1, mb: 3 }}>
                {title}
                <LinearProgress variant="determinate" value={porcentagem} />
            </Box>
            <Box sx={{ minWidth: 35 }}>
                <Typography variant="body2" color="text.secondary">
                    {`${Math.round(porcentagem)}%`}
                </Typography>
            </Box>
        </Box>
    );
}

export default ProgressBar;