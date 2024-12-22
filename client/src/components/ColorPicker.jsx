import { useState, useEffect } from 'react';
import { SketchPicker } from 'react-color';
import { useSnapshot } from 'valtio';
import state from '../store';

const ColorPicker = () => {
  const snap = useSnapshot(state);

  const [color, setColor] = useState(snap.color);
  const [color1, setColor1] = useState(snap.color1);
  const [color2, setColor2] = useState(snap.color2);

  useEffect(() => {
    // Update color state based on the active tab
    if (snap.isColor) {
      setColor(snap.color);
    } else if (snap.isColor1) {
      setColor1(snap.color1);
    } else if (snap.isColor2) {
      setColor2(snap.color2);
    }
  }, [snap.color, snap.color1, snap.color2, snap.isColor, snap.isColor1, snap.isColor2]);

  const handleColorChange = (color) => {
    if (snap.isColor) {
      setColor(color.hex);
      state.color = color.hex;
    } else if (snap.isColor1) {
      setColor1(color.hex);
      state.color1 = color.hex;
    } else if (snap.isColor2) {
      setColor2(color.hex);
      state.color2 = color.hex;
    }
  };
  

  return (
    <div className="absolute left-full ml-3">
      <SketchPicker 
        color={snap.isColor ? color : (snap.isColor1 ? color1 : color2)}
        disableAlpha
        onChange={handleColorChange}
      />
    </div>
  );
};

export default ColorPicker;
