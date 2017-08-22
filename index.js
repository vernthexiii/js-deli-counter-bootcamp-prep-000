function takeANumber(line, name) {
  if (!line.length) {
    return "The line is currently empty."
  }

  const numbersAndNames = []

  for (let i = 0, l = line.length; i < l; i++) {
    numbersAndNames.push(`${i + 1}. ${line[i]}`)
  }

  return `The line is currently: ${numbersAndNames.join(', ')}`
}
function nowServing(katzDeliLine) {
  if(katzDeliLine.length < 1) {return 'There is nobody waiting to be served!';}
  else {
    var up = katzDeliLine.shift()
    return `Currently serving ${up}.`
  }
}
function currentLine(katzDeliLine) {
  if(katzDeliLine.length < 1) {return 'The line is currently empty.';}
  else {
    return `The line is currently: 1. ${katzDeliLine[0]}, 2. ${katzDeliLine[1]}, 3. ${katzDeliLine[2]}`;
  }
}
