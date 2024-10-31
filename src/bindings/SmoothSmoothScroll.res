type blockOption = Start | Center | End | Nearest
type inlineOption = Start | Center | End | Nearest

let inlineOptionToString = (inlineOption: inlineOption) => {
  switch inlineOption {
  | Start => "start"
  | Center => "center"
  | End => "end"
  | Nearest => "nearest"
  }
}

let blockOptionToString = (blockOption: blockOption) => {
  switch blockOption {
  | Start => "start"
  | Center => "center"
  | End => "end"
  | Nearest => "nearest"
  }
}
