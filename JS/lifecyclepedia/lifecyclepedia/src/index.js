import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';
import LifecyclopediaClassPage from './LifecyclopediaClassPage';
import LifecyclopediaClassFuncPage from './LifecyclopediaClassFuncPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>    
         <Header/>
         <div className="row">
            <div className="col-6">
            <span className="h1 text-warning text-center">Class Component</span>
            <LifecyclopediaClassPage/>
            </div>
            <div className="col-6">
            <span className="h1 text-warning text-center">Class Component</span>
            <LifecyclopediaClassFuncPage/>
            </div>
         </div>
    </div>
);
