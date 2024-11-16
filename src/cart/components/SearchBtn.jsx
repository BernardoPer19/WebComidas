import { useNavigate } from "react-router-dom";

export default function SearchBtn({ product }) {
  const navigate = useNavigate();

  const handleSearch = () => {
    // Guarda el producto en el localStorage (temporalmente)
    localStorage.setItem("selectedProduct", JSON.stringify(product));
    navigate(`/product/${product.idMeal || product.idDrink}`);
  };

  return (
    <div className="cursor-pointer" onClick={handleSearch}>
    <svg
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink" 
        x="0px"
        y="0px"
        width="18px"
        height="18px"
        viewBox="0 0 511.999 511.999"
        style={{ enableBackground: 'new 0 0 511.999 511.999' }}
        xmlSpace="preserve"
      >
        <path
          d="M496.131,435.698L374.855,332.551c-12.537-11.283-25.945-16.463-36.777-15.963C366.707,283.055,384,239.549,384,192
          C384,85.961,298.039,0,192,0C85.962,0,0,85.961,0,192s85.961,192,192,192c47.549,0,91.055-17.293,124.588-45.922
          c-0.5,10.831,4.68,24.238,15.963,36.775L435.697,496.13c17.662,19.623,46.512,21.277,64.109,3.678
          C517.406,482.209,515.754,453.359,496.131,435.698z M192,320c-70.692,0-128-57.309-128-128c0-70.692,57.308-128,128-128
          c70.691,0,128,57.308,128,128C320,262.691,262.693,320,192,320z"
        />
      </svg>
    </div>
  );
}
