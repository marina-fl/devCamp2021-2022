import React, { useContext, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router";
import UserProfile from "../../components/body/UserProfile";
import { getProfile } from "./api/crud";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import authContext from "../../authContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const UserProfileContainer = () => {
  const { authenticated, user, setUserData } = useContext(authContext);
  console.log("is authenticated:", authenticated, "User id:", user);
  const userData = () => {
    setUserData({
      authenticated: true,
      user: {
        idusers: 2,
        name_user: "Mike",
        phone: "+380666666666",
        email: "mike@gmail.com",
        about: "some info about Mike...",
      },
    });
  };

  const { idusers } = useParams();
  const { isFetching, data } = useQuery(`users/${idusers}`, () =>
    getProfile(idusers)
  );

  const profile = data?.data || [];

  const [modalText, setModalText] = useState("");
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const openModal = (body) => () => {
    setModalText(body);
    setOpen(true);
  };

  return (
    <div>
      <Button onClick={userData}>User</Button>
      {isFetching && <div>Loading..</div>}
      {profile.map(({ idusers, user_name, email, phone, about }) => (
        <div key={idusers}>
          <Box sx={style}>
            <Typography id="user_name" variant="h6" component="h2">
              User: {user_name}
            </Typography>
            <Typography id="email" variant="h6" component="h2">
              Email: {email}
            </Typography>
            <Typography id="phone" variant="h6" component="h2">
              Phone: {phone}
            </Typography>
            <Typography id="user_name" variant="h6" component="h2">
              About: {about}
            </Typography>
          </Box>
          <Button onClick={openModal(<UserProfile profile={profile} />)}>
            Edit
          </Button>
        </div>
      ))}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {modalText}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default UserProfileContainer;
