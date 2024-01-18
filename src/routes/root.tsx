import { Route, createRoutesFromElements } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import { Questions } from '../components/Questions'
// import { Quiz } from '../components/Quiz'
import { Welcome } from '../components/Welcome'
import { Error } from '../components/Error'

export const Root = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<Error />}>
      <Route errorElement={<Error />}>
        <Route index path="/" element={<Welcome />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="*" element={<Error />} />
      </Route>
      <h1>TESTING</h1>
    </Route>
  )
)
