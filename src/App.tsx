import { useState } from 'react';
import './App.css'
import { Card } from './components/card/card';
import { CreateModal } from './components/card/create-modal/create-modal';
import { useProdutoData } from './hooks/useProdutoData';


function App() {
const {data} = useProdutoData(); 
const [isModalOpen, setIsModalOpen]= useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }

  return (
    
      <div className="container">
        <h1>Catalogo</h1>
        <div className="Card-grid">
            {data?.map(produtoData => 
            <Card 
            price={produtoData.price} 
            title={produtoData.title} 
            description={produtoData.description} 
            image={produtoData.image}
            />
            )}
            
        </div>
        {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}
        <button onClick={handleOpenModal}>novo</button>
      </div>
  )
}

export default App
