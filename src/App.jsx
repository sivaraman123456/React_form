import Header from "./components/Header.jsx";
import StateLogin from "./components/StateLogin.jsx";
// import Signup from "./components/Singup.jsx";
import Login  from './components/StateLogin.jsx'

function App() {
  return (
    <>
      <Header />
      <main>
        {/* <Login/>
         */}
        {/* <Signup /> */}
        <StateLogin/>
      </main>
    </>
  );
}

export default App;
