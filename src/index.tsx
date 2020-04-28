import * as React from 'react'
import * as ReactDOM from 'react-dom'

import * as firebase from 'firebase/app'
import "firebase/analytics";
import "firebase/auth";

import { HeaderComponent } from './components/Header'

import './styles.scss'
class Resume extends React.Component {
    constructor(props: any) {
        super(props)
    }
    public render() {
        return(
           <HeaderComponent />
        )
    }
}

ReactDOM.render(<Resume />, document.getElementById('root'))