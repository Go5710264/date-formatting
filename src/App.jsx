import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import PropTypes from 'prop-types';
import './App.css'

function DateTime(props) {
  return (
      <p className="date">{props.date}</p>
  )
}

function Video(props) {
  return (
      <div className="video">
          <iframe src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          <DateTime date={props.date} />
      </div>
  )
}

function VideoList(props) {
  return props.list.map(item => <Video key={uuidv4()} url={item.url} date={item.date} />);
}

function App() {
  const [list] = useState([
    {
        url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
        date: '2017-07-31 13:24:00'
    },
    {
        url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
        date: '2018-03-03 12:10:00'
    },
    {
        url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
        date: '2018-02-03 23:16:00'
    },
    {
        url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
        date: '2018-01-03 12:10:00'
    },
    {
        url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
        date: '2018-01-01 16:17:00'
    },
    {
        url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
        date: '2017-12-02 05:24:00'
    },
]);

return (
    <VideoList list={list} />
);
}

DateTime.propTypes = {
  date: PropTypes.string
}

Video.propTypes = {
  date: PropTypes.string,
  url: PropTypes.string
}

export default App
