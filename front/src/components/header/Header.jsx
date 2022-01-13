import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import { ListOutlined, AddCircleOutline, AccountCircleRounded } from '@material-ui/icons';
import { Outlet, Link } from "react-router-dom";


function Header() {
    return (

        <AppBar color="default">
            <Toolbar>
                <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<ListOutlined />}
                    component={Link} to="/articles"
                >
                    Articles
                </Button>

                <Button
                    variant="outlined"
                    color="secondary"
                    startIcon={<AddCircleOutline />}
                    component={Link} to="/add-article"
                >
                    Add Article
                </Button>

                <Button
                    variant="contained"
                    color="secondary"
                    endIcon={<AccountCircleRounded color="inherit"
                        fontSize="large" />}
                    component={Link} to="/profile"
                >
                    Profile
                </Button>


            </Toolbar>
            <Outlet />

        </AppBar>

    );
}

export default Header;