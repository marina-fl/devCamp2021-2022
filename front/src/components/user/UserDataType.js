import PropTypes from "prop-types";

const userType = PropTypes.shape({
  id: PropTypes.number,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string,
  age: PropTypes.number
});

const fileType = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
  path: PropTypes.string.isRequired,
  size: PropTypes.number
});

const likeType = PropTypes.shape({
  userId: PropTypes.number,
    user: userType,
    date: PropTypes.string
});

const postType = PropTypes.shape({
  title: PropTypes.string,
  text: PropTypes.string,
  images: PropTypes.arrayOf(fileType),
  createdAt: PropTypes.string,
  updatedAt: PropTypes.string,
  likes: PropTypes.arrayOf(likeType)
});

export const userDataType = PropTypes.shape({
    user: userType,
    avatar: PropTypes.arrayOf(fileType),
    friends: PropTypes.arrayOf(userType),
    posts: PropTypes.arrayOf(postType)
});

