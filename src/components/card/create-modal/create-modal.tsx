import { useEffect, useState } from "react";

import { useProdutoDataMutate } from "../../../hooks/useFoodDataMutate";
import { ProdutoData } from "../../../interface/ProdutoData";

import "./modal.css";

interface InputProps {
    label: string,
    value: string | number,
    updateValue(value: any): void
}   

interface ModalProps {
    closeModal(): void
}

const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)}></input>
        </>
    )
}


export function CreateModal({ closeModal }: ModalProps){
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const {mutate,isSuccess, isLoading} = useProdutoDataMutate();

    const submit = () => {
        const produtoData: ProdutoData = {
            title, 
            price,
            image,
            description
        }
        mutate(produtoData)
    }

    useEffect(() => {
        if(!isSuccess) return 
        closeModal();
    }, [isSuccess])


    return (
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Cadastre um novo item no Catalogo</h2>
                <form className="input-container">
                    <Input label="title" value={title} updateValue={setTitle}/>
                    <Input label="price" value={price} updateValue={setPrice}/>
                    <Input label="description" value={description} updateValue={setDescription}/>
                    <Input label="image" value={image} updateValue={setImage}/>
                    
                </form>
                <button onClick={submit} className="btn-secondary">
                    {isLoading ? 'postando...' : 'postar'}
                </button>
            </div>
        </div>
    )
}