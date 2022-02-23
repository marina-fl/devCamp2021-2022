import moment from "moment";
import PropTypes from "prop-types";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function PostsList({ posts }) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div style={{ display: "flow", paddingTop: "50px" }}>
      {posts.map(({ idposts, text_, created_at, idusers }) => (
        <Card sx={{ maxWidth: 600 }} key={idposts}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                {idusers}
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            subheader={moment(created_at).format("MMMM Do YYYY, h:mm:ss ")}
          />
          <CardMedia
            component="img"
            height="194"
            image="../../images/no-image.jpg"
            alt="post image"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {text_}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>{text_}</Typography>
              <Typography paragraph>{text_}</Typography>
            </CardContent>
          </Collapse>
        </Card>
      ))}
    </div>
  );
}

PostsList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      idposts: PropTypes.number.isRequired,
      text_: PropTypes.string.isRequired,
      created_at: PropTypes.string.isRequired,
      iduser: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PostsList;
