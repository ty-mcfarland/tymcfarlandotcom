import * as firebase from 'firebase/app'
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import { HeaderComponent } from 'tmc-component-library'
import * as React from 'react'
import * as ReactDOM from 'react-dom'

class AppComponent extends React.Component {
    constructor(props: any) {
        super(props)
    }
    public render() {
        return(
            <HeaderComponent text="This is a header" />
        )
    }
}

ReactDOM.render(<AppComponent />, document.getElementById('root'))