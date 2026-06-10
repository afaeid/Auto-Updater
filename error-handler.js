const error = async (e = {}) => {
  const message = e.message || "Unexpected error occurred.";
  const reason = e.reason;
  const code = Number.isInteger(e.code) ? e.code : 1;

  console.error(message);

  if (reason) {
    console.error("Reason:", reason);
  }

  if (e.stack) {
    console.error(e.stack);
  }

  console.log("Shutting down ...");
  process.exit(code);
}


export {error}