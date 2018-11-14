const def = {
  open: [],
  char: 'N/A'
};

const brailleTable = {
  'a': {
    open: [0],
    char: '⠁'
  },
  'b': {
    open: [0, 2],
    char: '⠃'
  },
  'c': {
    open: [0, 1],
    char: '⠉'
  },
  'd': {
    open: [0,1,3],
    char: '⠙'
  },
  'e': {
    open: [0,3],
    char: '⠑'
  },
  'f': {
    open: [0,1,2],
    char: '⠋'
  },
  'g': {
    open: [0,1,2,3],
    char: '⠛'
  },
  'h': {
    open: [0,2,3],
    char: '⠓'
  },
  'i': {
    open: [1,2],
    char: '⠊'
  },
  'j': {
    open: [1,2,3],
    char: '⠚'
  },
  'k': {
    open: [0,4],
    char: '⠅'
  },
  'l': {
    open: [0,2,4],
    char: '⠇'
  },
  'm': {
    open: [0,1,4],
    char: '⠍'
  },
  'n': {
    open: [0,1,3,4],
    char: '⠝'
  },
  'o': {
    open: [0,3,4],
    char: '⠕'
  },
  'p': {
    open: [0,1,2,4],
    char: '⠏'
  },
  'q': {
    open: [0,1,2,3,4],
    char: '⠟'
  },
  'r': {
    open: [0,2,3,4],
    char: '⠗'
  },
  's': {
    open: [1,2,4],
    char: '⠎'
  },
  't': {
    open: [1,2,3,4],
    char: '⠞'
  },
  'u': {
    open: [0,4,5],
    char: '⠥'
  },
  'v': {
    open: [0,2,4,5],
    char: '⠧'
  },
  'w': {
    open: [1,2,3,5],
    char: '⠺'
  },
  'x': {
    open: [0,1,4,5],
    char: '⠭'
  },
  'y': {
    open: [0,1,3,4,5],
    char: '⠽'
  },
  'z': {
    open: [0,3,4,5],
    char: '⠵'
  }
}

module.exports = txt => {
  return txt.toLowerCase().split('').map(t => brailleTable[t] ? brailleTable[t] : def);
}