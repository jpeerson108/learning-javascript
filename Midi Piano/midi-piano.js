const audioContext = new AudioContext()

const NOTE_DETAILS = [
  { note: "C", key: "Z", frequency: 261.626, active: false },
  { note: "Db", key: "S", frequency: 277.183, active: false },
  { note: "D", key: "X", frequency: 293.665, active: false },
  { note: "Eb", key: "D", frequency: 311.127, active: false },
  { note: "E", key: "C", frequency: 329.628, active: false },
  { note: "F", key: "V", frequency: 349.228, active: false },
  { note: "Gb", key: "G", frequency: 369.994, active: false },
  { note: "G", key: "B", frequency: 391.995, active: false },
  { note: "Ab", key: "H", frequency: 415.305, active: false },
  { note: "A", key: "N", frequency: 440, active: false },
  { note: "Bb", key: "J", frequency: 466.164, active: false },
  { note: "B", key: "M", frequency: 493.883, active: false },
]

document.addEventListener("keydown", (e) => {
  if (e.repeat) return // Guard Clause (exit) on repeat property
  const keyboardKey = e.code
  const noteDetail = getNoteDetail(keyboardKey)
  console.log(noteDetail)

  if (noteDetail == null) return

  // Press down a key
  // Mark it as active
  // Call the playNotes function
  noteDetail.active = true
  playNotes()
})

document.addEventListener("keyup", (e) => {
  const keyboardKey = e.code
  const noteDetail = getNoteDetail(keyboardKey)

  if (noteDetail == null) return

  noteDetail.active = false
  playNotes()
})

function getNoteDetail(keyboardKey) {
  return NOTE_DETAILS.find((n) => `Key${n.key}` === keyboardKey)
}

// Loop through all notes
// Apply classes to active ones + make them the proper color
// If we have an oscillator on the note, stop playing immediately
function playNotes() {
  NOTE_DETAILS.forEach((n) => {
    const keyElement = document.querySelector(`[data-note="${n.note}"]`)
    keyElement.classList.toggle("active", n.active)
    if (n.oscillator != null) {
      n.oscillator.stop()
      n.oscillator.disconnect()
    }
  })

  // Get active notes, being pressed
  // Loop through each
  // Start the note
  const activeNotes = NOTE_DETAILS.filter((n) => n.active)
  const gain = 1 / activeNotes.length // Sets the percentage of volume for multiple notes being played
  activeNotes.forEach((n) => {
    startNote(n, gain)
  })
}

// Set the current frequency
// Connect it to the output
// Start the oscillator
// Saving a reference to it on our note so we can reference it
function startNote(noteDetail, gain) {
  const gainNode = audioContext.createGain()
  gainNode.gain.value = gain
  const oscillator = audioContext.createOscillator()
  oscillator.frequency.value = noteDetail.frequency
  oscillator.type = "sine"
  oscillator.connect(gainNode).connect(audioContext.destination)
  oscillator.start()
  noteDetail.oscillator = oscillator
}
