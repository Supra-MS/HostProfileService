const app = require('./server');
const PORT = 3006;

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
