const createObservable = subscribe => ({
  subscribe,
  pipe(f) {
    return f(this)
  }
})

const map = fn => observable => {
  return createObservable(next => {
    observable.subscribe(value => {
      next(fn(value))
    })
  })
}

const next = value => {
  console.log(value)
}

const subscribe = next => {
  next(10)
  next(11)
}

createObservable(subscribe)
  .pipe(map(x => x + 1))
  .subscribe(next)
