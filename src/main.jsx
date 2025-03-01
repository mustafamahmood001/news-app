import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import ApiNewsFetching from './Components/ApiNewsFetching'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ApiNewsFetching/>
  </StrictMode>,
)
