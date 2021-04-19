import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { EpisodesProvider } from './state/context/episodes_context'
import { FilterProvider } from './state/context/filter_context'

ReactDOM.render(
  <React.StrictMode>
    <EpisodesProvider>
      <FilterProvider>
        <App />
      </FilterProvider>
    </EpisodesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);