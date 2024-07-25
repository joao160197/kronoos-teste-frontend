import { Input } from "../../components/ui/input"
import { Button } from "../../components/ui/button"
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp: React.FC = () => {

  const navigate = useNavigate();
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/main?name=${encodeURIComponent(name)}`);
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md bg-white border border-[#CCCCCC] rounded-[16px] p-6">
        <form onSubmit={handleSubmit}>
          <h1 className="text-black font-bold text-[22px] text-center mb-6 font-roboto leading-[26px]">Bem Vindo ao nosso Site!</h1>
          <div>
            <p className="text-[20px] font-roboto font-normal leading-[19px] mb-4">Coloque aqui o seu Nome</p>
            <Input 
              className="bg-white border border-[#777777] rounded-[8px] p-[9px] w-full text-[14px] mb-4" 
              placeholder="Nome" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
            />
            <Button 
              className="bg-blue-400 text-white rounded-lg cursor-pointer w-full h-[40px] text-[20px] leading-[20px] hover:bg-sky-200 duration-75" 
              type="submit" 
              variant="outline"
            >
              Entrar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
