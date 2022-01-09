import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
function Post(props) {

    return (
        <Grid
            container spacing={0}
            alignItems="center"
            justify="center"
            style={{ minHeight: '40vh' }}>
            <Box sx={{
                width: 300,
                height: 50,
                bgcolor: 'primary.dark',
            }}>
                <p>{props.message}</p>
            </Box >
        </Grid>

    );
}

export default Post;