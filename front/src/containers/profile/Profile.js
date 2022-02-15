import CreateProfile from '../../components/body/CreateProfile';
import createProfile from "./api/crud";
import { useQuery } from "react-query";

function ProfileContainer() {
  const { isFetching, data } = useQuery("profile", () => createProfile());
  const profileData = data?.data 
  
  return (
    <div>
      {isFetching && <div>Loading...</div>}
      <CreateProfile profileData={profileData} />
    </div>
  );
}

export default ProfileContainer;

