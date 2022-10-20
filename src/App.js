import logo from './logo.svg';
import './App.scss';
import Users from './screen/Users';
import { Routes, Route } from "react-router-dom";
import Posts from './screen/Posts';
//import PostItem from './screen/PostItem';
function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Users />} />
        <Route path="post" element={<Posts />} >
          
          <Route path=":id"  element={<Posts />}/>
        </Route>
        <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
      </Routes>
      
    </div>
  );
}

export default App;
