const server = require('./server.js');

const PORT = process.env.PORT || 3300;
const HOST = process.env.HOST || "0.0.0.0"

server.use((req, res, next) => {
  console.log(`[${new Date().toLocaleString()}] ${req.id} ${req.method} ${req.url}`)
  next()
})

server.use((err, req, res, next) => {
  console.log(err)
  res.status(500).json({
    message: "Something went wrong",
  })
})

server.listen(PORT, HOST, () => {
  console.log(`\n=== Server listening on http://${HOST}:${PORT} ===\n`);
});
