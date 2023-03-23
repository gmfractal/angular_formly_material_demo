export type DialogButton = {
  label: string;
  closeOnClick: boolean;
  hasInitialFocus: boolean;
};

export type DialogContentSection = {
  heading: string;
  content: string;
};

export type DialogContents = {
  mainHeading: string;
  body: DialogContentSection[];
  buttons: DialogButton[];
  buttonAlignment: 'start' | 'center' | 'end';
  disableBgClose: boolean;
};
