import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Loader from './Loader';
import '../../style/cardDetails.css';

function CardDetails() {
  const { id } = useParams(); // Ottieni l'ID dalla URL
  const [card, setCard] = useState(null);
  const navigate = useNavigate(); // Hook per la navigazione

  useEffect(() => {
    fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${id}`)
      .then((response) => response.json())
      .then((data) => setCard(data.data[0]))
      .catch((error) => console.error('Error fetching card details:', error));
  }, [id]);

  if (!card) return <Loader />; // Mostra un loader mentre i dati sono in fase di caricamento

  // Funzione per tornare indietro
  const goBack = () => {
    navigate(-1); // Naviga alla pagina precedente
  };

  return (
    <div className="card-details">
      <button onClick={goBack} className="back-button">
        &larr; BACK
      </button>
      <img src={card.card_images[0].image_url} alt={card.name} />
      
      {/* Aggiungi altre informazioni che vuoi visualizzare */}
    </div>
  );
}

export default CardDetails;
