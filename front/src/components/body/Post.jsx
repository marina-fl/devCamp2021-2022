import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';



function Post({ id, date, title, text }) {

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
                <p>{id}</p>
                <p>{date}</p>
                <p>{title}</p>
                <p>{text}</p>
            </Box >
        </Grid>

    );
}

export default Post;