
import Header from "./components/header/Header";

import { useState } from 'react'
import Share from "./components/share/Share";
import Profile from "./pages/home/profile/Profile";

function App() {
  const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <div className="App">

      <Header  handleOpen = {handleOpen} />
     <Share  open={open}  handleClose={handleClose}/>
      
       <Profile />


    </div>
  );
}

export default App;
