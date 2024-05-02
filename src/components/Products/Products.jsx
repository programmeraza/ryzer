import React, { useEffect, useState } from 'react'
import './Products.scss'
import axios from 'axios';
import Mouse from '../Mouse/Mouse';
import Keyboards from '../Keybords/Keyboards';
import Laptop from '../Laptop/Laptop';
import Headsets from '../Headsets/Headsets';
import Streaming from '../Streaming/Streaming';
import Chairs from '../Chairs/Chairs';
import Console from '../Console/Console';
import Mobile from '../Mobilee/Mobile';
import Gear from '../Gear/Gear';
import Loader from '../Loader/Loader';

const Products = () => {
  const [data, setData] = useState({
    mice: [],
    laptop: [],
    keyboard: [],
    headsets: [],
    streaming: [],
    chairs: [],
    console: [],
    mobile: [],
    gear: []
  });
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const { data } = await axios.get("https://razer-api.onrender.com/devices")
    setData((prev) => {
      return {
        ...prev,
        mice: data.filter((product) => product.category === "MICE"),
        laptop: data.filter((product) => product.category === "Laptop"),
        keyboard: data.filter((product) => product.category === "Keyboards"),
        headsets: data.filter((product) => product.category === "Headsets"),
        streaming: data.filter((product) => product.category === "Streaming"),
        chairs: data.filter((product) => product.category === "Chairs"),
        console: data.filter((product) => product.category === "Console"),
        mobile: data.filter((product) => product.category === "Mobile"),
        gear: data.filter((product) => product.category === "Gear"),
      }
    })
  }
  if (!data?.mice?.length) return <Loader />
  console.log(data?.mice)
  return (
    <div>
      <Mouse mice={data.mice} />
      <Keyboards keyboard={data.keyboard} />
      <Laptop laptop={data.laptop} />
      <Headsets headsets={data.headsets} />
      <Streaming streaming={data.streaming} />
      <Chairs chairs={data.chairs} />
      <Console console={data.console} />
      <Mobile mobile={data.mobile} />
      <Gear gear={data.gear} />
    </div>
  )
}

export default Products