import react, {Component} from 'react'; 
import "./button.css"
function MeuButton() {
  const Clique = () => {

    const label = "Baixar CV !";
    // Substitua pela sua label
    alert(`A label desse botão é ${label}`);
  };

  return (
    <>  
        <button className="btn" onClick={Clique}>Clique aqui</button>
      
    </>
  );
}

export default MeuButton;


