import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
const globalStyles = createGlobalStyle`
    ${reset};
    *{
        box-sizing:border-box;
    }    
`;

export default globalStyles;