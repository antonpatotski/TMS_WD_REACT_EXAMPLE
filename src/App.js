import {useEffect, useState} from "react";

import Menu from "./components/menu/menu";
import Tabs from "./components/tabs/tabs";
import Input from "./components/form/input/input";
import { TABS } from "./constants/tabs";
import TextArea from "./components/form/textArea/textArea";

import './App.scss';

const formDefaultValues = {
  name: { key: 'name', value: 'test1', label: 'Name' },
  msg: { key: 'msg', value: 'test1', label: 'Message' },
}

const user = {
  firstName: 'Antonio',
  lastName: 'Front-endas'
}

function App() {
  const [ activeTab, setActiveTab ] = useState(TABS[0]?.key);
  const [ formValues, setFormValues ] = useState(formDefaultValues);
  const [ posts, setPosts ] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const urlParams = new URLSearchParams({
          limit: 30, // count of elements on page
          offset: 1, // page number
        });
        const { results: postsResponse } = await fetch('https://studapi.teachmeskills.by//blog/posts?' + urlParams)
          .then(response => response.json())

        setPosts(postsResponse)
      } catch (e) {
        console.error(e);
      }
    }

    getPosts();
  }, []);

  const setNewValue = (key, value) => {
    setFormValues({
      ...formValues,// => input: 'test input',  textArea: 'text area',
      [key]: { ...formValues[key], value: value }
    })
  }

  return (
    <div className="App">
      <Menu user={user} />
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} tabs={TABS} />
      <Input value={formValues.name} label={formValues.name.label} onChange={setNewValue} />
      <TextArea value={formValues.msg} label={formValues.msg.label} onChange={setNewValue} />
      {/*<Posts>*/}
      {/*  */}
      {/*</Posts>*/}
    </div>
  );
}

// class App1 extends Component {
//   constructor(props) {
//     super(props);
//   }
//
//   state = {
//     activeTab: TABS[0]?.key
//   }
//   user = {
//     firstName: 'Antonio',
//     lastName: 'Front-endas'
//   }
//
//   updateKey = function (key) {
//     this.setState({
//       ...this.state,
//       activeTab: key
//     })
//   }
//
//   render() {
//     return (
//       <div className="App">
//         <Menu user={this.user} />
//         <Tabs activeTab={this.state.activeTab} setActiveTab={this.updateKey.bind(this)} tabs={TABS} />
//         { this.state.activeTab }
//       </div>
//     )
//   }
// }

export default App;
