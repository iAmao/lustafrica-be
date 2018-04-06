function responseHandler (res, code, data, metadata) {
  const status = {}
  let error = true

  if (code >= 400) {
    status.code = code
    status.message = 'failed'
  } else {
    error = false
    status.code = code
    status.message = 'success'
  }

  const resObject = {
    status,
    [error ? 'errors' : 'data']: data
  }

  if (metadata) {
    resObject.metadata = metadata
  }

  return res
    .status(code)
    .json(resObject)
}

export default responseHandler
