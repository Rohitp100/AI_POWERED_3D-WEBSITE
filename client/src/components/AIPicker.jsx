
import state from '../store';
import CustomButton from './CustomButton';
import { useSnapshot } from 'valtio';

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
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
    <div className="aipicker-container">
      <textarea 
        placeholder="Ask AI..."
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="aipicker-textarea"
      />
      <div className="flex flex-wrap gap-3">
        {generatingImg ? (
          <CustomButton 
            type="outline"
            title="Asking AI..."
            customStyles="text-xs"
          />
        ) : (
          <>
            <CustomButton 
              type="filled"
              title="Apply"
              handleClick={() => handleSubmit(getinfo())}
              customStyles={snap.defaultButtonStyle}
            />
          </>
        )}
      </div>
    </div>
  )
}

export default AIPicker