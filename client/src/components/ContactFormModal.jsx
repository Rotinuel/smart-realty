import { useState} from 'react'

const ContactFormModal = ({ isOpen, onClose, onsubmit}) =>{
    const [ formData, setFormData ] = useState({
        name:'',
        email:'',
        message:''
    });

    const handleChange = (e) => {
        const {name, value } = e.target;
        setFormData({...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onsubmit(formData);
    };

    if(!isOpen) return null;

    return (
        <div style={StyleSheet.modalOverlay}>
            <div style={StyleSheet.modalContent}>
                <h2>Contact Us</h2>
                <form onSubmit={handleSubmit}>
                    <div style={StyleSheet.modalOverlay}>
                        
                    </div>
                </form>
            </div>
        </div>
    )
}