import Layout from "./global/layou";
import 'react-bootstrap'
import './style/style.css';
import './style/responsive480.css'
import Homepage from "./homepage";

function App() {
  return (
    <div className="App">
      <Layout>
<Homepage />
      </Layout>
    </div>
  );
}

export default App;
