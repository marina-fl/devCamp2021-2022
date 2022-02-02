import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';

function Post({ created_at, text, iduser }) {
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
                <p>{iduser}</p>
                <p>{text}</p>
                <p>{created_at}</p>
            </Box >
        </Grid>

    );
}

Post.propTypes = {
    created_at: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    iduser: PropTypes.number.isRequired
}

export default Post;