import { useSelect } from "@nextui-org/react";


//show all data from redux store
const Facture = () => {
    const data = useSelect(state => state.data)
    console.log('====================================');
    console.log(data);
    console.log('====================================');
    return (
        <div>
            <h1>Facture</h1>
            <div>
                {data.map((item) => (
                    item.services.map((service) => (
                        <div>
                            <h3>{service.title}</h3>
                            <p>{service.price}</p>
                        </div>
                    ))
                ))}
            </div>
        </div>
    )
}

export default Facture;