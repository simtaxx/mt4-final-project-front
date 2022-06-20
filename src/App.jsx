import Router from './router';

import Header from './components/header'
import Footer from './components/footer'
import Menu from './components/menu'

const App = () => {
  return (
    <div>
      <Header />
      <Menu />
      <Router />
      <Footer />
    </div>
  );
}

export default App
