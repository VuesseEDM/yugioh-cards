import {useState,useEffect} from 'react'
import '../../style/card.css';
import MyCard from './Card';
import Loader from './Loader';

import { useNavigate } from 'react-router-dom';

function LoadCards () {

  const [cards,setCards] = useState([]);
  const [query,setQuery] = useState("");
  const [levelCard,setLevelCard] = useState("");
  const [attributeCard,setAttributeCard] = useState("");
  const [typeCard,setTypeCard] = useState("");
  const [frameRate,setFrameRate] = useState("");
  const [isLoading,setIsLoading] = useState(true);
  const [isError,setIsError] = useState(false);


  const navigate = useNavigate(); // Hook per la navigazione

  useEffect(() => {

    fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php")
    .then((response) => response.json())
    .then((data) => {
      setCards(data.data)
      setIsLoading(false);
    })
    .catch((err) => {
      setIsError(err);
      setIsLoading(false)
    })
  } , [])

  const filteredList = cards.filter((card) => {
     
    //filtra per nome
    const isNameMatch = query 
    ? card.name.toLowerCase().includes(query.toLowerCase())
    : true
    //filtra per tipo
    const isTypeMatch = typeCard
    ? card.type.toLowerCase().includes(typeCard.toLowerCase())
    : true
    //filtra per attributo
    const isAttributeMatch = attributeCard
    ? card.race.toLowerCase().includes(attributeCard.toLowerCase())
    : true
    const isLevelMatch = levelCard
    ? card.level === parseInt(levelCard)
    : true;
    //filtra per copertina carta
    const isFrameMatch = frameRate
    ? card.frameType.toLowerCase().includes(frameRate.toLowerCase())
    : true;

    return isNameMatch && isTypeMatch && isAttributeMatch && isLevelMatch && isFrameMatch
  })

  if(isLoading) return <Loader/>
  if(isError) return <h1>Error 404</h1>

  
  const handleCardClick = (id) => {
    console.log(`Navigating to /card/${id}`);
    navigate(`/card/${id}`); // Naviga alla pagina dei dettagli della carta
  };

  return (
    <>
    <div>

      <h1 className='title'>Database Cards</h1>

    <div className="box-input">
      <input 
      type="text" 
      placeholder='search by name'
      value={query}
      onChange={(event) => setQuery(event.target.value)}/>

     

      <select value={typeCard} onChange={(event) => setTypeCard(event.target.value)}>

        <optgroup label='Main Deck Types'>
        <option value="">All types</option>
        <option value="Effect Monster">Effect Monster</option>
        <option value="Flip Effect Monster">Flip Effect Monster</option>
        <option value="Flip Tuner Effect Monster">Flip Tuner Effect Monster</option>
        <option value="Gemini Monster">Gemini Monster</option>
        <option value="Normal Monster">Normal Monster</option>
        <option value="Normal Tuner Monster">Normal Tuner Monster</option>
        <option value="Pendulum Effect Monster">Pendulum Effect Monster</option>
        <option value="Pendulum Effect Ritual Monster">Pendulum Effect Ritual Monster</option>
        <option value="Pendulum Flip Effect Monster">Pendulum Flip Effect Monster</option>
        <option value="Pendulum Normal Monster">Pendulum Normal Monster</option>
        <option value="Pendulum Tuner Effect Monster">Pendulum Tuner Effect Monster</option>
        <option value="Ritual Effect Monster">Ritual Effect Monster</option>
        <option value="Ritual Monster">Ritual Monster</option>
        <option value="Spell Card">Spell Card</option>
        <option value="Trap Card">Trap Card</option>
        <option value="Spirit Monster">Spirit Monster</option>
        <option value="Toon Monster">Toon Monster</option>
        <option value="Tuner Monster">Tuner Monster</option>
        <option value="Union Effect Monster">Union Effect Monster</option>
        </optgroup>

        <optgroup label='Extra Deck Types'>
        <option value="Fusion Monster">Fusion Monster</option>
        <option value="Link Monster">Link Monster</option>
        <option value="Pendulum Effect Fusion Monster">Pendulum Effect Fusion Monster</option>
        <option value="Synchro Monster">Synchro Monster</option>
        <option value="Synchro Pendulum Effect Monster">Synchro Pendulum Effect Monster</option>
        <option value="Synchro Tuner Monster">Synchro Tuner Monster</option>
        <option value="XYZ Monster">XYZ Monster</option>
        <option value="XYZ Pendulum Effect Monster">XYZ Pendulum Effect Monster</option>
        </optgroup>

        <optgroup label='Other Types'>
        <option value="Skill Card">Skill Card</option>
        <option value="Token">Token</option>
        </optgroup>

      </select>

     
      <select value={attributeCard} onChange={(event) => setAttributeCard(event.target.value)}>
  <option value="">All Attributes</option>
  <optgroup label="Monster Cards">
    <option value="Aqua">Aqua</option>
    <option value="Beast">Beast</option>
    <option value="Beast-Warrior">Beast-Warrior</option>
    <option value="Creator-God">Creator-God</option>
    <option value="Cyberse">Cyberse</option>
    <option value="Dinosaur">Dinosaur</option>
    <option value="Divine-Beast">Divine-Beast</option>
    <option value="Dragon">Dragon</option>
    <option value="Fairy">Fairy</option>
    <option value="Fiend">Fiend</option>
    <option value="Fish">Fish</option>
    <option value="Insect">Insect</option>
    <option value="Machine">Machine</option>
    <option value="Plant">Plant</option>
    <option value="Psychic">Psychic</option>
    <option value="Pyro">Pyro</option>
    <option value="Reptile">Reptile</option>
    <option value="Rock">Rock</option>
    <option value="Sea Serpent">Sea Serpent</option>
    <option value="Spellcaster">Spellcaster</option>
    <option value="Thunder">Thunder</option>
    <option value="Warrior">Warrior</option>
    <option value="Winged Beast">Winged Beast</option>
    <option value="Wyrm">Wyrm</option>
    <option value="Zombie">Zombie</option>
  </optgroup>

  <optgroup label="Spell Cards">
    <option value="Normal">Normal</option>
    <option value="Field">Field</option>
    <option value="Equip">Equip</option>
    <option value="Continuous">Continuous</option>
    <option value="Quick-Play">Quick-Play</option>
    <option value="Ritual">Ritual</option>
  </optgroup>

  <optgroup label="Trap Cards">
    <option value="Normal">Normal</option>
    <option value="Continuous">Continuous</option>
    <option value="Counter">Counter</option>
  </optgroup>
</select>


<select value={frameRate} onChange={(event) => setFrameRate(event.target.value)}>
  <option value="">All Frames Rates</option>
<option value="normal">Normal</option>
  <option value="effect">Effect</option>
  <option value="ritual">Ritual</option>
  <option value="fusion">Fusion</option>
  <option value="synchro">Synchro</option>
  <option value="xyz">XYZ</option>
  <option value="link">Link</option>
  <option value="normal_pendulum">Normal Pendulum</option>
  <option value="effect_pendulum">Effect Pendulum</option>
  <option value="ritual_pendulum">Ritual Pendulum</option>
  <option value="fusion_pendulum">Fusion Pendulum</option>
  <option value="synchro_pendulum">Synchro Pendulum</option>
  <option value="xyz_pendulum">XYZ Pendulum</option>
  <option value="spell">Spell</option>
  <option value="trap">Trap</option>
  <option value="token">Token</option>
  <option value="skill">Skill</option>
</select>


      <input
      type="number"
      placeholder='select level'
      value={levelCard}
      onChange={(event) => setLevelCard(event.target.value)}/>

</div>

    </div>

    <div className="box">
      {filteredList.map((card) => (
        <MyCard key={card.id} src={card.card_images[0].image_url} onClick={() => handleCardClick(card.id)}/>
      ))}
    </div>
    </>
  )
}
export default LoadCards