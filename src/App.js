import Navbar from './components/navbar/navbar.component';
import './App.scss';
import BigImage from './components/assets/teaseimg.jpg';
import { Card } from './components/card/card.component';
import { Showcase } from './components/showcase/showcase.component';
import { StatsCard } from './components/stats-card/stats-card.component';
import { Footer } from './components/footer/footer.component';
const opinionsList = [{
  id:'1',
  name:'Robert Robertson',
  info: 'A person should have his roots deep in a great moving current a moving stream of conscious direction which will keep him on course sailing steadily toward the destination hes chosen regardless of the economic and social winds that blows first this way and then that on the surface'
  },
  {
    id:'2',
    name:'Juansito Teto',
    info: 'in such a life theres no great hurry no frantic running about no doubt or confusion instead each day he moves a little way along his course steadily unrelentingly'
  },
  {
    id:'3',
    name: 'Eliana Yanez',
    info:'and above all he has the wonderful calm knowledge of his destination and knows that each day finds him closing the distance that still separates him from it'
  },
  {
    id:'4',
    name: 'Earl Nightingale',
    info:'sometimes in his life as in all lives there are storms which tend to throw him off course obstacles which for a time may delay but soon hes right back on course again moving ahead'
  }


]
function App() {
  return (
    <div>
      <Navbar />
      <div className="cta-container">
        <div className='front-banner'>
          <span className='big-title'>
            You’ve never made a website this fast before. Really.
          </span>
            <img className="big-image" src={BigImage} alt="FrontIMage"/>
          
        </div>
      </div>
        <div className='bottom-big-border'></div>
      <h1 className='opinion-title'>Here's what our clients have to say!</h1>
      <div className='opinion-board'>
        
        {
          opinionsList.map((object) => {
            return(
            <Card key={object.id} monster={object}/>
            )
          })
        }
      </div>
        <div className='showcase-top-border'></div>
      <Showcase/>
        <h2 className='stats-title'>Here's what our statistics say about us.</h2>
      <div className='stats-container'>
        <StatsCard
         statistic='1.3M' 
         name='Downloads' 
         text='Most people are really satisfied with our template, we let that speak for ourselves, that way you can trust us. '
         />
        <StatsCard
         statistic='1.3M' 
         name='Downloads' 
         text='Most people are really satisfied with our template, we let that speak for ourselves, that way you can trust us. '
         />

        <StatsCard
         statistic='1.3M' 
         name='Downloads' 
         text='Most people are really satisfied with our template, we let that speak for ourselves, that way you can trust us. '
         />

        <StatsCard
         statistic='1.3M' 
         name='Downloads' 
         text='Most people are really satisfied with our template, we let that speak for ourselves, that way you can trust us. '
         />


      </div>
      <Footer/>
    </div>
  );
}

export default App;
