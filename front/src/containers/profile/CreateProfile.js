import CreateProfile from "../../components/body/CreateProfile";
import createProfile from "./api/crud";
import { useQuery } from "react-query";

function CreateProfileContainer() {
  const { isFetching, data } = useQuery("create-profile", () => createProfile());
  const profileData = data?.data;

  return (
    <div>
      {isFetching && <div>Loading...</div>}
      <CreateProfile profileData={profileData} />
    </div>
  );
}

export default CreateProfileContainer;
