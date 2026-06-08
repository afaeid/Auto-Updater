const error = async (e) => {
  console.error(e.message)
  console.log(e.stack)
  console.log("Shutting down ...")
  process.exit(e.code)
}


export {error}