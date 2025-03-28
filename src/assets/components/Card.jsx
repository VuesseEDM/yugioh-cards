
import '../../style/card.css'
function MyCard({ src , onClick}) {
  return (
    <div className="card">
      <img src={src} loading="lazy" alt='Card Image' onClick={onClick}/>
    </div>
  );
}

export default MyCard;
