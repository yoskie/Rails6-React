import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'

import ProductList from './ProductContainer'
import ProductDetail from './ProductDetailContainer'



const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path='/' component={ProductList}/>
        <Route path='/products/:id' component={ProductDetail} />

        <Route render={() => (
          <div className="container">
            <div className="row">
              <div className="card col-md8 offset-md-4 form-header-style">
                <h1 className="text-center m-4">404: Not Fount</h1>
                <p className="text-center m-4">
                  The resource you are looking for could not be found
                </p>
              </div>
            </div>
          </div>
        )} />
      </Switch>
      <Footer />
    </React.Fragment>
  </BrowserRouter>

)

export default App
