//observer
const callback = value => {
  console.log(value)
}

//observable
const callbackCaller = callback => {
  callback(1)
  callback(2)
}

//map
const transform = x => x + 1

//internals
const callWithTransform = (transform, callback) => {
  const newCallback = value => callback(transform(value))

  return newCallback
}
//subscribe
callbackCaller(callWithTransform(transform, callback))
