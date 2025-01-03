declare module "*.svg" {
  import React from "react";  // Importa o React, necessário para JSX
  import { SvgProps } from "react-native-svg";  // Importa os tipos relacionados ao componente SVG do React Native
  const content: React.FC<SvgProps>;  // Define o tipo para o conteúdo importado como um componente funcional que recebe as propriedades do SVG
  export default content;  // Exporta o componente como padrão
}
