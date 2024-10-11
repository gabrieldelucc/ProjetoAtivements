import React, { useEffect, useState } from "react";
import Header from "../../Components/Header";
import { FormAtivement} from "../../Components/Forms";
import Tabs from "../../Components/Tabs";
import Table from "../../Components/Table";

const Painel = () => {
    const [update, setUpdate] = useState({})
    const [selectedPlace, setSelectedPlace] = useState("");
    const [places, setPlaces] = useState([]);
    const [listAtivements, setListAtivements] = useState([])

    //Buscar os locais cadastrados
    const getPlaces = () => {
        fetch("http://localhost:3000/locais")
            .then(response => response.json())
            .then(response => {
                setPlaces(response);

                if (response[0]) {
                    setSelectedPlace(response[0].id)
                }

            }).catch(() => {
                alert("Erro inesperado, não foi possível obter os locais dos ativos")
            })
    }

    useEffect(() => {
        if (selectedPlace === "")
            getPlaces();
    }, [])

    useEffect(() => {
        FilterAtivements(selectedPlace)
    }, [selectedPlace])

    const FilterAtivements = (local) => {
        fetch("http://localhost:3000/ativos?local=" + local)
            .then(response => response.json())
            .then(response => {
                setListAtivements(response)
            })
            .catch(() => {

                alert("Erro")

            })

    }

    return (
        <div className="w-10/12 my-0 mx-auto">

            <Header />

            {/* formulário para criação de ativos  */}
            <FormAtivement places={places} setPlaces={setPlaces} list={listAtivements} setList={setListAtivements} update={update} setUpdate={setUpdate} />

            {/* Tabs - listagem de locais de ativos  */}
            <Tabs places={places} setSelectedPlace={setSelectedPlace} selectedPlace={selectedPlace} />

            {/* Listagem dos ativos cadastrados  */}
            <Table  places={places} selectedPlace={selectedPlace} list={listAtivements.filter(x => x.local === selectedPlace)} setUpdate={setUpdate} setList={setListAtivements} />
        </div>
    )
}

export default Painel; 