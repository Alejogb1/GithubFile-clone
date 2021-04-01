import "./styles.css";
import FileIcon from "./FileListItem/FileName/Icon/FileIcon";
import IssueDescription from "./FileListItem/IssueDescription/index";
import Time from "./FileListItem/Time/index";
import FolderName from "./FileListItem/FileName/FolderName";
const App = ({ data }) => {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="folder-container">
            <FileIcon />
            <FolderName />
          </div>
          <IssueDescription />
          <Time />
        </div>
      </div>
      {data.map(item => return (
         <div className="row">
         <div className="folder-container">
           <FileIcon />
           <FolderName />
         </div>
         <IssueDescription />
         <Time />
       </div>
      ))}
    </div>
  );
};
export default App;
