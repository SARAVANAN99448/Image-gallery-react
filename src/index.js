import ReactDOM from 'react-dom/client';
import d1 from ".//assets/images/d1.jpg"
import d2 from ".//assets/images/d2.jpg"
import d3 from ".//assets/images/d3.jpg"
import d4 from ".//assets/images/d4.jpg"


const root = ReactDOM.createRoot(document.getElementById("root"))



function Dog(props){
  return(
  <div style={{width:"25%",textAlign:"center"}} >
    <img src={props.Puppy} alt="img" style={{width:"200px",height:"200px"}} />
    <h2>{props.dog}</h2>
  </div>
  
  )
}
var Person =[
  {dog:"Julie's Rabbit Ears",Puppy:d1},
  {dog:"The Innocent Look",Puppy:d2},
  {dog:"Big Eyed Buggy",Puppy:d3},
  {dog:"The Saint Doggo",Puppy:d4},
  {dog:"Big Eyed Buggy",Puppy:d3},
  {dog:"The Innocent Look",Puppy:d2},
  {dog:"The Saint Doggo",Puppy:d4},
  {dog:"Julie's Rabbit Ears",Puppy:d1},


]
root.render(<div  style={{display:"flex",flexBasis:"23%",flexWrap:"wrap",marginTop:"20px", backgroundColor:"#DEDEDE",paddingTop:"5%"}}>
  
  {
    Person.map(function(item){
      return <Dog dog={item.dog} Puppy={item.Puppy}></Dog>
    })
  }
 

  
</div>)

