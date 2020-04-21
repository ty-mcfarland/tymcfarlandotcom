import * as firebase from 'firebase/app'
import "firebase/analytics";
import { HeaderComponent } from './components/Header'
// Add the Firebase products that you want to use
import "firebase/auth";
import * as React from 'react'
import * as ReactDOM from 'react-dom'
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