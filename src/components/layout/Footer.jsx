import { FaRegCopyright } from "react-icons/fa6";

function Footer() {
  return (
    <div className="text-center">
      <FaRegCopyright/> {new Date().getFullYear()} Real Estate Marketplace
    </div>
  )
}

export default Footer;
