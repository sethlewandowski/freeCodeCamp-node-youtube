const { readFile, writeFile } = require('fs')

readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return
  } else {
    const first = result
    readFile('./content/second.txt', 'utf8', (err, result) => {
      if (err) {
        console.log(err)
        return
      }
      const second = result
      writeFile(
        './content/result-async.txt',
        `Here is the result: ${first}, ${second}`,
        (err, result) => {
          if (err) {
            console.log(err)
            return
          }
          console.log(result)
        }
      )
    })
  }
})

// with readFile or readFileSync, if you don't pass the encoding, you get the weird buffer output
