import { swatch, fileIcon, ai, logoShirt, stylishShirt } from "../assets";

export const EditorTabs = [
  {
    name: "colorpicker",
    icon: swatch,
  },
  {
    name: "filepicker",
    icon: fileIcon,
  },
  {
    name: "aipicker",
    icon: ai,
  },
];

export const FilterTabs = [
  {
    name: "Plates",
  },
  {
    name: "Mid",
  },
  {
    name: "Stand",
  }
];

export const DecalTypes = {
  Plates: {
    stateProperty: "plate",
    filterTab: "Plates",
  },
  Mid: {
    stateProperty: "mid",
    filterTab: "Mid",
  },
  Stand: {
    stateProperty: "stand",
    filterTab: "Stand",
  }
};
