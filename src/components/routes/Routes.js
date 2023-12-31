import React from 'react';
import Dashboard from '../dashboard/Dashboard';
import Chatbody from '../chats/Chatbody';
import { Route, Routes } from "react-router-dom";
import './routesstyle.css';
import Nav from '../nav/Nav';
import PerfilUser from '../perfiluser/Perfiluser';
import Enviomasivo from '../masivo/Enviomasivo';
import MenuHamburguesa from '../menuhamburguesa/MenuHamburguesa';
import EditClient from '../editclient/editarcliente';

import AdminView from '../adminmodules/Aminmode';
import Castores from '../cotizaciones/Castores';
function Routeschmpi({ user, onLogout, nombreUsuario }) {




    return (
        <div className="container">
            <div className="barralateral menuweb">
                <Nav />
            </div>
            <div className="contenido-principal">
                <div className='menuweb'>
                </div>

                <div className='menumovil'>   <MenuHamburguesa /></div>


                <Routes>
                    <Route path="/" element={<Dashboard user={user} onLogout={onLogout} nombreUsuario={nombreUsuario} />} />
                    <Route path="/ChatWathsapp" element={<Chatbody chatType="WA" />} />
                    <Route path="/ChatFacebook" element={<Chatbody chatType="FB" />} />

                    <Route path="/ChatInstgram" element={<Chatbody chatType="IG" />} />
                    <Route path="/ChatWeb" element={<Chatbody chatType="WEB" />} />

                    <Route path='/PerfilUser' element={<PerfilUser user={user} onLogout={onLogout} nombreUsuario={nombreUsuario} />} />
                    <Route path='/CampanaMasiva' element={<Enviomasivo />} />
                    <Route path="/EditarCliente" element={<EditClient user={user} onLogout={onLogout} nombreUsuario={nombreUsuario}  />} />
                    <Route path="/Adminmodule" element={<AdminView user={user} onLogout={onLogout} nombreUsuario={nombreUsuario}  />} />

                    <Route path="/Castores" element={<Castores user={user} onLogout={onLogout} nombreUsuario={nombreUsuario}  />} />

                </Routes>
            </div>
        </div>
    );
}

export default Routeschmpi;