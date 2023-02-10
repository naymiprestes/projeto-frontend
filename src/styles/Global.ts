import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
:root{
  //primary colors
  --primary-color: #212529;
  --primary-focus-color: #15254F;
  --primary-2-color: #111C3D;
  --primary-3-color: #fff;
  --primary-4-color: #000;

  
  --box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
  --font-family-1: 'Source Sans Pro', sans-serif;
  --font-family-2: 'Montserrat', sans-serif;
}
*{
    margin:0px;
    padding: 0px;
    outline: 0px;
    box-sizing: border-box;   
}
body{
    background: var(--primary-color);
    color: var(--primary-3-color);
    -webkit-font-smoothing: antialiased;
    font-family: var(--font-family-1);
    width: 100%;
    overflow-x: hidden;
}
h1, h2, h3, h4, h5, h6, strong{
    font-weight: 600;
    font-size: 1.5rem;
} 
button{
    cursor: pointer;
    background-color: var(--primary-2-color);
    color: var(--primary-3-color);
    font-weight: 600;
    border-radius: 4px;
    border: none;

}
button:hover{
    background-color: var(--primary-focus-color);
    color: #FFFFFF;
    transition: 2ms;
}


button:focus{
    background-color: var(--primary-focus-color);
    color: #FFFFFF;
    transition: 2ms;
}


`;

export default Global;
