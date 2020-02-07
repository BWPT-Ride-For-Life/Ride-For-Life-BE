const server = require('./server.js');

const PORT = process.env.PORT || 3300;
const HOST = process.env.HOST || "0.0.0.0"



const allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
  if (req.method == 'OPTIONS') {
    res.send(200);
  } else {
    next();
  }
};
server.use(allowCrossDomain)

server.use((req, res, next) => {
  console.log(`[${new Date().toLocaleString()}] ${req.id} ${req.method} ${req.url}`)
  next()
})

server.use((err, req, res, next) => {
  console.log(err)
  if (err.code == 21608) {
    return res.status(400).json({
      message: `Drivers Phone number is not verified`,
    })
  }

  if (err.code == 23505) {
    return res.status(400).json({
      message: `This email already exists`,
    })
  }
  if (err.code == 22001) {
    return res.status(400).json({
      message: `Please limit character length to 128`,
    })
  }
  if (err.code == 42703) {
    return res.status(400).json({
      message: "Please check data format and try again"
    })
  }
  res.status(err.status || 500).json({
    message: "Something went wrong",
  })
})

server.listen(PORT, HOST, () => {
  console.log(`\n=== Server listening on http://${HOST}:${PORT} ===\n`);
});
