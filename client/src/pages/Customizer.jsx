import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useSnapshot } from 'valtio';
import state from '../store';
import { downloadCanvasToImage, reader } from '../config/helpers';
import { EditorTabs, FilterTabs, DecalTypes } from '../config/constants';
import { fadeAnimation, slideAnimation } from '../config/motion';
import { AIPicker, ColorPicker, CustomButton, FilePicker, Tab } from '../components';


const Customizer = () => {
  const snap = useSnapshot(state);

  const [file, setFile] = useState('');
  const [prompt, setPrompt] = useState('');
  const [generatingImg, setGeneratingImg] = useState(false);
  const [activeEditorTab, setActiveEditorTab] = useState('');
  const [activeFilterTab, setActiveFilterTab] = useState({
    plates: true,
    mid: false,
    stand: false,
  });

  const generateTabContent = () => {
    switch (activeEditorTab) {
      case 'colorpicker':
        return <ColorPicker />;
      case 'filepicker':
        return <FilePicker file={file} setFile={setFile} readFile={readFile} />;
        case "aipicker":
        return <AIPicker 
          prompt={prompt}
          setPrompt={setPrompt}
          generatingImg={generatingImg}
          handleSubmit={handleSubmit}
        />
      default:
        return null;
    }
  };

  const handleSubmit = async (type) => {
    if(!prompt) return alert("Please enter a prompt");

    try {
      setGeneratingImg(true);

      const response = await fetch('http://localhost:8080/api/v1/dalle', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          prompt,
        })
      })

      const data = await response.json();

      handleDecals(type, `data:image/png;base64,${data.photo}`)
    } catch (error) {
      alert(error)
    } finally {
      setGeneratingImg(false);
      setActiveEditorTab("");
    }
  }

  const handleDecals = (type, result) => {
    const decalType = DecalTypes[type];

    state[decalType.stateProperty] = result;

    if (!activeFilterTab[decalType.filterTab]) {
      handleActiveFilterTab(decalType.filterTab);
    }
  };

  const readFile = (type) => {
    reader(file).then((result) => {
      handleDecals(type, result);
      setActiveEditorTab('');
    });
  };

  const handleActiveFilterTab = (tabName) => {
    switch (tabName) {
      case 'Plates':
        state.isColor = true;
        state.isColor1 = false;
        state.isColor2 = false;
        break;
      case 'Mid':
        state.isColor = false;
        state.isColor1 = true;
        state.isColor2 = false;
        break;
      case 'Stand':
        state.isColor = false;
        state.isColor1 = false;
        state.isColor2 = true;
        break;
      default:
        state.isColor = true;
        state.isColor1 = false;
        state.isColor2 = false;
        break;
    }
  };

  const getStyleForFilterTab = (index) => {
    if (index === 0 && snap.isColor) {
      return snap.selectedButtonStyle;
    } else if (index === 1 && snap.isColor1) {
      return snap.selectedButtonStyle;
    } else if (index === 2 && snap.isColor2) {
      return snap.selectedButtonStyle;
    } else {
      return snap.defaultButtonStyle;
    }
  };

  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
          <motion.div key="custom" className="absolute top-0 left-0 z-10" {...slideAnimation('left')}>
            <div className="flex items-center min-h-screen">
              <div className="editortabs-container tabs">
                {EditorTabs.map((tab) => (
                  <Tab key={tab.name} tab={tab} handleClick={() => setActiveEditorTab(tab.name)} />
                ))}
                {generateTabContent()}
              </div>
            </div>
          </motion.div>

          <motion.div className="absolute z-10 top-5 right-5" {...fadeAnimation}>
            <CustomButton
              type="filled"
              title="Go Back"
              handleClick={() => (state.intro = true)}
              customStyles="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
            />
          </motion.div>

          <motion.div className="filtertabs-container" {...slideAnimation('up')}>
            {FilterTabs.map((tab, index) => (
                             <CustomButton
                             key={tab.name}
                             type="filled"
                             title={tab.name}
                             handleClick={() => handleActiveFilterTab(tab.name)}
                             customStyles={getStyleForFilterTab(index)}
                           />
                         ))}
                       </motion.div>
                     </>
                   )}
                 </AnimatePresence>
               );
           };
           
           export default Customizer;
           
