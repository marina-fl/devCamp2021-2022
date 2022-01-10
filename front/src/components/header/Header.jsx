import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import { ListOutlined, AddCircleOutline, AccountCircleRounded } from '@material-ui/icons';
function Header({ setContent }) {
    return (

        <AppBar color="default">
            <Toolbar>
                <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<ListOutlined />}
                    onClick={() => setContent('articles')}
                >
                    Articles
                </Button>
                <Button
                    variant="outlined"
                    color="secondary"
                    startIcon={<AddCircleOutline />}
                    onClick={() => setContent('add article')}
                >
                    Add Article
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    endIcon={<AccountCircleRounded color="inherit"
                        fontSize="large" />}

                    onClick={() => setContent('profile')}
                >
                    Profile
                </Button>


            </Toolbar>

        </AppBar>

    );
}

export default Header;