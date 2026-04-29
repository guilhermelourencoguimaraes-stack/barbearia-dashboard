import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Dashboard from "./components/Dashboard"

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="container-fluid">
        <div className="row">

          <aside className="col-md-3 col-lg-2 bg-light vh-100">
            <Sidebar />
          </aside>

          <section className="col-md-9 col-lg-10 p-4">
            <Dashboard />
          </section>

        </div>
      </main>

      <address className="text-center p-3 bg-dark text-white">
        Guilherme Lourenço Guimarães - Sistemas Web - Disciplina do Prof. Fernando - 2026
      </address>
    </>
  )
}

export default App