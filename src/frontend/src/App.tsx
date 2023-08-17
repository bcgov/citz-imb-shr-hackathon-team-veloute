/**
 * @summary The root component of the application 
 */
import { Header, Footer } from "./components"
import ViewRouter from "./routes/ViewRouter"
function App() {
  return (
    <>
      <Header />
      <ViewRouter />
      <Footer />
    </>
  )
}

export default App
