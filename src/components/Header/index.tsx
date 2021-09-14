import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./style";

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="handle money" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          New transaction
        </button>
      </Content>
    </Container>
  );
}
