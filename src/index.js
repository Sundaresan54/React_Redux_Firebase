import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware,compose} from 'redux';
import RootReducer from './store/reducers/rootReducer'
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import fbConfig from './config/fbConfig';

const store = createStore(RootReducer,compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
    reactReduxFirebase(fbConfig,{useFirestoreForProfile:true, userProfile:'user', attachAuthIsReady:true}),
    reduxFirestore(fbConfig)

)
);
store.firebaseAuthIsReady.then(()=>{

    ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
    serviceWorker.unregister();
    
} )
