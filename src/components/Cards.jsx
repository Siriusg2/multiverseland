import Card from './Card';


export default function Cards(props) {
   
   return <div>
      {props.characters.map((card) =>  <Card Onclose = {card.onClose} 

      name = {card.name} species = {card.species} gender = {card.gender} image = {card.image}  

      onClose={() => window.alert("Emulamos que se cierra la card")}/> )}
   </div>;  
}
