import React, { useState } from 'react';
import logo from '../img/SÍMBOLO/PNG/símbolo.png';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true); // Estado para controlar abertura

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`fixed right-0 top-0 ${isOpen ? 'w-64' : 'w-16'} h-full bg-gradient-to-b from-[#26236b] to-[#1b194a] shadow-2xl text-white rounded-xl flex flex-col items-center transition-all duration-300`}>
      {/* Botão de Minimizar/Abrir */}
      <button 
        className="absolute left-[-16px] top-4 w-8 h-8 bg-[#1b194a] text-white rounded-full flex items-center justify-center shadow-md z-10"
        onClick={toggleSidebar}
      >
        {isOpen ? '<' : '>'} {/* Alterna seta */}
      </button>

      {/* Conteúdo da Sidebar */}
      {isOpen && (
        <>
          <div className="flex flex-col items-center mt-8">
            <img 
              src={logo}
              alt="Coding" 
              className="w-16 h-16 object-contain mb-2"
            />
            <p className="text-lg font-semibold">Borderless Coding</p>
          </div>
          
          <div className="w-11/12 mt-8">
            <p className="text-sm mb-2 text-gray-300">Progress</p>
            <div className="w-full bg-gray-600 h-2 rounded-full">
              <div className="bg-[#4caf50] h-full rounded-full" style={{ width: '70%' }}></div>
            </div>
            <p className="text-right text-xs text-gray-400 mt-1">70%</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;