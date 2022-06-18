import { Card, CardContent, Grid } from "@mui/material";

const AppContent = ({ left, middle, right }) => {
    return (
        <Card sx={{
            border: 1,
			borderRadius: 2,
            borderColor: "grey.500",
            overflow: "auto",
        }}>
            <CardContent>
                <Grid container spacing={{ xs: 1, md: 3 }} >
                    <Grid item xs={4} md={4}>{left}</Grid>
                    <Grid item xs={4} md={4}>{middle}</Grid>
                    <Grid item xs={4} md={4}>{right}</Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

export default AppContent;