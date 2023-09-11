import './App.css'
import {GlobalContex} from './context'
import { RouterProvider } from 'react-router-dom'
import {router} from './routers'


function App() {
const user = {
  username : 'Ari purnama'
}
  return (
    <div className="App">
      <GlobalContex.Provider value={user} >
        <RouterProvider router={router} />
      </GlobalContex.Provider>
    </div>
  )
}

export default App
{/* {post.map(blog => {
          return <div>{blog.title}</div> 
        })} */}