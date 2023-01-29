import React from 'react'
import { Configuration, OpenAIApi} from "openai"
import * as ReactBootStrap from 'react-bootstrap'
import logo from './images/OpenAI_Logo.svg'
function App() {
  const [img_arr, setImgArr] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  
  const generateImage = async () => {
    setLoading(true)
    setImgArr([])
    const response = await openai.createImage({
      prompt: document.getElementById('search').value,
      n: Number(document.getElementById('num-of-images').value),
      size: document.getElementById('resolution').value,
    }
    );
    setImgArr(response.data.data)
    setLoading(false)
  }
  const image = img_arr.map(e => {
    return (
      <img src={e.url}/>
    )
  })
  return (
    <div className='app'>
        <img src={logo} className="logo"/>
      <div>
      <input className="image-search" id='search' placeholder='Generate Image'></input>
      <button className='generate-button' onClick={generateImage}>Generate
      {loading ? <ReactBootStrap.Spinner animation="border" role="status" className='spinner' size='sm'></ReactBootStrap.Spinner>: <></>}
      </button>
      </div>
      <div className="parameters">
      <select id="num-of-images">
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
        <option value={6}>6</option>
        <option value={7}>7</option>
        <option value={8}>8</option>
        <option value={9}>9</option>
      </select>
      <select id="resolution">
      <option value={'1024x1024'}>1024x1024</option>
      <option value={'512x512'}>512x512</option>
      <option value={'256x256'}>256x256</option>
      </select>
      </div>
      <div className='image-div'>
        {image}
      </div>
    </div>
  );
}

export default App;
