import Card from './Card';
   


export default function Cards(props) {
   
   return <>
      {props.characters.map((card) =>  <Card Onclose = {card.onClose} 

      name = {card.name} species = {card.species} gender = {card.gender} image = {card.image}  

     /> )}
   </>;  
}
