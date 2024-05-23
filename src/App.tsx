import { SnackbarProvider } from 'notistack'
import { lazy, Suspense } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import ButtonGradient from './assets/svg/ButtonGradient'
import Footer from './components/Footer'
import Header from './components/Header'
import { RoutesWithNotFound } from './utilities'
import ErrorBoundary from './utilities/ErrorBoundaries.utility'
import { SnackbarUtilitiesConfigurator } from './utilities/snackbarManager'


const HomePage = lazy(() => import('./pages/HomePage/HomePage'))
const CodePage = lazy(() => import('./pages/CodePage/CodePage'))
const Login = lazy(() => import('./pages/Auth/Login'))
const SignUp = lazy(() => import('./pages/Auth/SignUp'))

function App() {
  return (
    <>
      <SnackbarProvider>
        <SnackbarUtilitiesConfigurator />
        <Suspense fallback={
          <div className="flex items-center justify-center h-screen">
            <h1 className="text-3xl">Loading...</h1>
          </div>
        }>
          <BrowserRouter>
            <Header />
            <div className="h-dvh" >
              <ErrorBoundary fallbackComponent={<h2>Hubo un error</h2>}>
                <RoutesWithNotFound>

                  <Route path="/" element={<HomePage />} />
                  <Route path="/code" element={<CodePage />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<SignUp />} />

                </RoutesWithNotFound>
              </ErrorBoundary>
              <Footer />
              <ButtonGradient />
            </div>
          </BrowserRouter>
        </Suspense>
      </SnackbarProvider>
    </>
  )
}

export default App