import { toast } from 'react-toastify';
import './App.css'

function App() {
  const handleclick = () => {
      toast.success('Hello, this is a success message')
      // We can use toast.error, toast.info, toast.warning as well.
  }

  return (
    <>
      <button onClick={handleclick}> Click Me</button>
    </>
  )
}

export default App
