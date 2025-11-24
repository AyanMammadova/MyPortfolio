import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Main from './components/main/Main'

function App() {
  return (
    <>
     <BrowserRouter
    future={{
      v7_startTransition: true,
      v7_relativeSplatPath: true
    }}
  >
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Main/>}/>

        </Route>
      </Routes>
     </BrowserRouter>
     
    </>
  )
}

export default App
