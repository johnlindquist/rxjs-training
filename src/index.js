//observer
const callback = value => {
  console.log(value)
}

//observable
const callbackCaller = callback => {
  document.addEventListener("click", callback)
}

//map
const transform = x => x + 1

//internals
const transformThenCreateNewCallback = (transform, callback) => {
  const newCallback = value => callback(transform(value))

  return newCallback
}
//subscribe
callbackCaller(transformThenCreateNewCallback(transform, callback))
