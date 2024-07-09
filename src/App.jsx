import Child from "./Components/Child"
import Greeting from "./Components/Greeting"
import HelloWorld from "./Components/HelloWorld"
import SimpleForm from "./Components/SimpleForm"
import Toggle from "./Components/Toggle"
import Welcome from "./Components/Welcome"

function App() {
  

  return (
    <>
      <SimpleForm/>
      <Welcome />
      <Toggle />
      <Greeting name="Vegeta" />
      <HelloWorld />
      <Child name="Sadia" />
    </>
  )
}

export default App
