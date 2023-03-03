
import './App.css';
import Row from './Components/Row';
import Banner from './Components/Banner';
import requests from './request';
import Navbar from './Components/Navbar';


function App() {
  return (
    <div className="app">
     <Navbar/>
     <Banner />

      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title="Trending now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Documentation" fetchUrl={requests.fetchDocumentaries} />
      


    </div>
  );
}

export default App;
