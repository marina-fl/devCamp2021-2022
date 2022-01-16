import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';


function Post({ date, title, text }) {

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
                <p>{date}</p>
                <p>{title}</p>
                <p>{text}</p>
            </Box >
        </Grid>

    );
}

Post.propTypes = {
    date: PropTypes.string.isRequired,
    title: PropTypes.string,
    text: PropTypes.string.isRequired,
}

export default Post;