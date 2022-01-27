import { Route } from "wouter"
import Home from "./pages/Home";
import "./App.css"
import { TravelcontextProvider } from "./context/TreavelContext";
import Form from "./pages/Form";
import Header from "./Components/Header";

function App() {
  return (
    <div>
      <section>
      <TravelcontextProvider>
        <Route component={Home} path="/" />
        <Route component={Form} path="/travel/:id" />
      </TravelcontextProvider>
      </section>
    </div>
  );
}

export default App;
