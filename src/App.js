import "./styles.css";
import FileIcon from "./FileListItem/FileName/Icon/FileIcon";
import IssueDescription from "./FileListItem/IssueDescription/index";
import Time from "./FileListItem/Time/index";
import FolderName from "./FileListItem/FileName/FolderName";
const App = ({ data }) => {
  return (
    <div className="App">
      <div className="container">
        {data.map((fileItem) => (
          <div className="row">
            <div className="folder-container">
              <FileIcon />
              <FolderName name={fileItem.folderName} />
            </div>
            <IssueDescription description={fileItem.commitMessage} />
            <Time time={fileItem.date} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default App;
