import AddPost from "../../components/body/AddPost";
import addPost from "./api/crud";
import { useQuery } from "react-query";

function AddPostContainer() {
  const { isFetching, data } = useQuery("add-article", () => addPost());

  const postData = data?.data || [];

  return (
    <div>
      {isFetching && <div>Loading...</div>}
      <AddPost postData={postData} />
    </div>
  );
}

export default AddPostContainer;
