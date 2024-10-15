import {FaWhatsapp} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
        <a href="https://wa.me/+12035685549" target="_blank" rel="noopener noreferrer" className="text-green-500 text-6xl transition transform hover:scale-110 hover:text-green-600">
            <FaWhatsapp  />
        </a>
    </div>
  )
}

export default Footer