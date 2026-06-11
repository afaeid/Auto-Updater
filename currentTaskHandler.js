const currentTask = (name, status, resourcess) => {

  process["auto-updater"].currentTask = { name, status, resourcess }

}

export { currentTask }