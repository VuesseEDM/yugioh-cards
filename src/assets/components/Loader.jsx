import '../../style/loader.css'; // Importa il file di stile se necessario
import exodia from '../../../public/img/spin.webp'
function Loader() {


  return (
    <div className="loader">
    <img
    className='imgLoad'
    src={exodia}
    alt='Loading...'/>
      
    </div>
  );
}

export default Loader;
