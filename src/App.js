import Sidebar from "./components/Sidebar"
import img1 from './assets/logo.svg'
import InvoiceBody from "./components/InvoiceBody";
import EditCard from "./components/EditCard";
import NewInvoice from "./components/NewInvoice";

function App() {
  return (
   <div className="background">
      
     <Sidebar img={img1} />
     <InvoiceBody  />
     {/* <EditCard />
     <NewInvoice /> */}


    </div>
  );
}

export default App;
