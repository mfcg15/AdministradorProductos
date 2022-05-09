import {BrowserRouter, Route , Switch} from 'react-router-dom';
import NuevoProducto from './components/NuevoProducto';
import Producto from './components/Producto';
import TodosProductos from './components/TodosProductos';

const App = ()  => {
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={() => <TodosProductos/>}/>
          <Route path="/nuevo" render={() => <NuevoProducto/>}/>
          <Route path="/producto/:id" render={(routeProps) => <Producto {...routeProps}/>}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
