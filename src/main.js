import ReactDOM from 'react-dom'
import React from 'react'
import App from 'routes/App'

ReactDOM.render(<App/>,document.getElementById("app"))

//npx babel --watch src --out-dir dist --copy-files --presets react-app/prod