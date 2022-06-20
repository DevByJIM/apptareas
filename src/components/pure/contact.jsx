import PropTypes from 'prop-types';
import { Contact } from "../../models/contact.class";


const ContactComponent = ({ contact }) => {

    return (
        <>
            <h2>
                NOMBRE: {contact.nombre}
            </h2>
            <h2>
                APELLIDO: {contact.apellido}
            </h2>
            <h3>
                EMAIL: {contact.email}
            </h3>
            <h3>
                Contacto {contact.conectado
                    ? 'En Linea'
                    : 'No Conectado'}
            </h3>
        </>
    )
}

ContactComponent.prototype = {
    contact: PropTypes.instanceOf(Contact)
};

export default ContactComponent