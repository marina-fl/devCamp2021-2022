import { useParams } from "react-router-dom";
import PostContainer from './containers/Post';

export function ValidatePostUrl() {
    let params = useParams();
    let userId = params.id.match(/\d+/);
    if (!userId) {
      return (
      <main style={{ padding: "1rem" }}>
      <p>URL is incorrect (no matches)</p>
      </main>
      );
    }
    return <PostContainer />;
    }
  
    export function ValidateTitleUrl() {
      let params = useParams();
      let titleId = params.title.match(/([A-Z])+/);
      if (!titleId) {
        return (
        <main style={{ padding: "1rem" }}>
        <p>URL is incorrect (no matches)</p>
        </main>
        );
      }
      return <div> Success! TitleID is correct  </div>;
      }

      export function ValidateFileUrl() {
        let params = useParams();
        let fileId = params.file.match(/(\w)+\.(doc|pdf|jpeg)/);
        if (!fileId) {
          return (
          <main style={{ padding: "1rem" }}>
          <p>URL is not like file_name.ext</p>
          </main>
          );
        }
        return <div> Success! FileID is correct  </div>;
        }

        