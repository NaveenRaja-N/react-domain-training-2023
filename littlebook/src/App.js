import { Provider, useDispatch, useSelector } from "react-redux";
import "./App.scss";
import Sidebar from "./container/sidebar/Sidebar";
import ContentContainer from "./container/contentContainer/ContentContainer";
import BlogDetails from "./container/blogDetails/BlogDetails";
import WarningModal from "./components/modal/WarningModal";
import { createContext, useEffect, useState } from "react";
import NewBlogs from "./components/newBlogs/NewBlogs";
import { retrieveUsers } from './service/userService';
export const ThemeContext = createContext();

function App() {
  const [loader, setLoader] = useState(true);
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme(currentTheme => currentTheme === 'light' ? 'dark' : 'light');
  }
  const [memberList, setMemberList] = new useState([]);
  const { warningModalStatus, addNewBlogActive, isDisplayMember} = useSelector(state => {
    return state.blogs;
  });

  const showMembers = async () => {
    const data = await retrieveUsers();
    setMemberList(data);
    setLoader(false);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="app" id={theme}>
        <Sidebar showMembers={showMembers} />
        <ContentContainer/>
        {warningModalStatus ? <WarningModal /> : ''}
        <BlogDetails />
        {addNewBlogActive || isDisplayMember ? <NewBlogs loader={loader} memberList={memberList} isDisplayMember={isDisplayMember} /> : ''}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
