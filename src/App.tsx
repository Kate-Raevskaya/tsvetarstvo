import { Suspense } from "react"
import { ErrorBoundary } from "react-error-boundary"
import { Outlet } from "react-router-dom"

import "./App.css"
import { Footer } from "./components/Footer/Footer"
import { Navbar } from "./components/Navbar/Navbar"

const App = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div className="loading">Загрузка...</div>}>
        <ErrorBoundary fallback={<div>Упс:( Что-то пошло не так...</div>}>
          <Outlet />
        </ErrorBoundary>
      </Suspense>
      <Footer />
    </>
  )
}

export default App
