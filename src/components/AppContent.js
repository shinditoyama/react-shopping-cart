import { Card, CardHeader, CardContent, Grid } from '@mui/material';

const AppContent = ({ left, middle, right }) => {
    return (
        <Card sx={{
            width: '74%',
            height: '84%',
            overflow: 'auto',
        }}>
            <CardHeader title="Shopping List" />
            <CardContent>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={4} sm={4} md={4}>{left}</Grid>
                    <Grid item xs={4} sm={4} md={4}>{middle}</Grid>
                    <Grid item xs={4} sm={4} md={4}>{right}</Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

export default AppContent;