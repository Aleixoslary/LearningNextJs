import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { ReactElement, cloneElement } from "react";

// Criando um componente chamado ActiveLinkProps que herdará tudo que um Link do Next possui e adiciona o children e o activeClassName;
interface ActiveLinkProps extends LinkProps {
  // Será a tag ancora
  children: ReactElement;
  //Será o nome da classe
  activeClassName: string;
}

export function ActiveLink({
  children,
  activeClassName,
  ...otherProps
}: ActiveLinkProps) {
  const { asPath } = useRouter();

  // Verificando se a rota é igual ao href se sim, atribui a class
  const className = asPath === otherProps.href ? activeClassName : "";

  // O cloneElement do React é uma função onde passamos dois parâmetros o elemento e a propriedade
  // Passando a propriedade className para o children (tag ancora)
  return <Link {...otherProps}>{cloneElement(children, { className })}</Link>;
}
