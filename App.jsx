import Header from './src/components/Header'
import { Outlet } from 'react-router-dom'
import { ThemeProvider } from './src/contexts/ThemeContext'
import './App.css'

const App = () => {
   return (
      <ThemeProvider>
        <Header />
        <Outlet />
      </ThemeProvider>
  )
}

export default App
