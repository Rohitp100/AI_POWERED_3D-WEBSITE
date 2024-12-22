
import { useSnapshot } from 'valtio';
import CustomButton from './CustomButton'
import state from '../store';

const FilePicker = ({ file, setFile, readFile }) => {
  const snap = useSnapshot(state);

  const getinfo = () => {
    if (snap.isColor) {
      return 'Plates';
    } else if (snap.isColor1) {
      return 'Mid';
    } else if (snap.isColor2) {
      return 'Stand';
    }
  }
  

  return (
    <div className="filepicker-container">
      <div className="flex-1 flex flex-col">
        <input 
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <label htmlFor="file-upload" className="filepicker-label">
          Upload File
        </label>

        <p className="mt-2 text-gray-500 text-xs truncate">
          {file === '' ? "No file selected" : file.name}
        </p>
      </div>

      <div className="">
        <CustomButton 
          type="filled"
          title="Apply"
          handleClick={() => readFile(getinfo())}
          customStyles={snap.defaultButtonStyle}
        />
      </div>
    </div>
  )
}

export default FilePicker