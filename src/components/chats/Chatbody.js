import React, { useState } from "react";
import Chatlist from '../chatlist/chatlist'
import Chatcontent from '../chatContent/chatcontent';
import './chatbodystyle.css';
import { useLocation } from 'react-router-dom';
import ChatVacio from "../chatContent/Chatvacio";


function Chatbody({ chatType }) {

  const idUser = localStorage.getItem('idAgente');
  const nombreAgente = localStorage.getItem('nombre');

  const location = useLocation();

  const {
    idcliente: routerIdUser,
    numero: routerNumero,
    botestado: routerBotestado,
    nameclient: routerNameclient,
    typechat: routerTypechat,
    idlinea:routeridlinea,
    idodoo:routerOdo
  } = location.state || {};

  
  console.log('el dato del dash',location.state);

  const [selectedId, setSelectedId] = useState(routerIdUser || null);
  const [numerselect, setNumerselect] = useState(routerNumero || null);
  const [boottas, setBoottas] = useState(routerBotestado || null);
  const [nameclientf, setNameclientf] = useState(routerNameclient || null);
  const [tipechat, settipechat] = useState(routerTypechat || null);
  const [iddlinea, setIddlinea] = useState(routeridlinea || null)
  const [idOdoochat, setIdOdooChat] = useState(routerOdo || null)
  const[namlineaname, setLineaname]=useState(null)




  const handleSelectChat = (id, numero, botestado2, nameclient2, tipochat, idlinea, idOdoo, linea) => {
    setSelectedId(id);
    setNumerselect(numero);
    setBoottas(botestado2);
    setNameclientf(nameclient2);
    settipechat(tipochat)
    setIddlinea(idlinea)
    setIdOdooChat(idOdoo)
    setLineaname(linea)
    console.log('LO QUE MANDO A CONTENT', id, numero, botestado2, nameclient2, tipochat, idlinea,idOdoo );
  };

  return (
    <div className='contentchats'>

      <div className='prtechats'>
        <Chatlist tipochat={chatType} onSelectChat={handleSelectChat} />
      </div>
      
      <div className="partechat">
        
        {selectedId ? <Chatcontent  typeclient={tipechat} sendiduser={selectedId} numerselect={numerselect} boottas={boottas} nameclientf={nameclientf} idagente={idUser} nameagente={nombreAgente} id_dlinea={iddlinea} id_odoo={idOdoochat} namelineac={namlineaname}/> : <ChatVacio />}

      </div>
    </div>
  );
}

export default Chatbody;