import React from 'react'

import { render } from 'react-dom'

//Import CSS - webpack handles it, so no need for link tag

import css from './styles/style.styl'

//import components
import Main from './components/Main'

render(<Main/>, document.getElementById('root'))
