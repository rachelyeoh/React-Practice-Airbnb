import Navbar from './components/Navbar/Navbar'
import './App.css';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Card from './components/Card'
import data from './data'

// import Card from './component/Card'
// import data from './data'
// export default function App() {
    // const cards = data.map(item => {
    //     return (
    //         <Card
    //             img={item.coverimg}
    //             rating={item.rating}
    //             reviewCount={item.reviewCount}
    //             title={item.title}
    //         />)
    // })
//     return (
//         <div>
//             <Navbar />
//             <Main />
//             <section className='card-list'>
//                 {cards}
//             </section>
//         </div>)
// }

function App() {
  const cards = data.map(item => {
        return (
            <Card
                img={item.coverimg}
                rating={item.rating}
                reviewCount={item.reviewCount}
                title={item.title}
            />)
    })
  return (
    <div className="App">
      <Navbar />
      <Main />
      <section className='card-list'>
        {cards}
      </section>
      <Footer />
    </div>
  );
}

export default App;
