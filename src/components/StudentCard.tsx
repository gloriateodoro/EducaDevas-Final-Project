import React from 'react';

interface Aluna {
  nome: string;
  hobby: string;
  fotoUrl: string;
}

const StudentCard: React.FC<Aluna> = ({ nome, hobby, fotoUrl}) => (
  <div className="flex items-center space-x-4">
    <div className="w-12 h-12 overflow-hidden rounded-full">
    <img src={fotoUrl} alt={nome} className="object-cover w-full h-full" />
    </div>
    <div>
      <h3 className="text-lg font-semibold">{nome}</h3>
      <p className="text-gray-600">{hobby}</p>
    </div>
  </div>
);

export default StudentCard;
