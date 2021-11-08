import express from 'express'
import {con} from "./infrastructure/database";
const PORT = 3000
const app = express()
const router = express.Router()

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

router.get(
  '/',
  async (req: express.Request, res: express.Response): Promise<void> => {
    // res.send('hello world')
      con.connect(function(err: any) {
          if (err) throw err;
          console.log('Connected');
      });
  }
)
app.use('/', router)

app.listen(PORT, () =>
  console.log(`listening on port http://localhost:${PORT}`)
)

export default app
