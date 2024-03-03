import 'modern-normalize';
import { createGlobalStyle } from 'styled-components';

export const MainStyles = createGlobalStyle`


html {
  margin: 0;
   background-color: #f7f7f7;
 
}

 body {
  margin: 0;

}


ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

input:focus  {
    outline: none;
}


  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colorMainText};
    border-radius: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colorMainText};
    border-radius: 12px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.colorMainText};
  }

`;
