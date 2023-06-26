import * as S from "./styles";

import { useSetRecoilState } from "recoil";
import { ModalState } from "../../pages/Main/UserCard";
import { MdCancel, MdEdit } from "react-icons/md";

interface Props {
  children: React.ReactElement | React.ReactElement[];
}

export const Modal = ({ children }: Props) => {
  const setIsModalOpen = useSetRecoilState(ModalState);

  const handleModalState = () => setIsModalOpen((prev) => !prev);

  return (
    <S.Background>
      <S.Container>
        <MdCancel onClick={handleModalState} />
        {children}
      </S.Container>
    </S.Background>
  );
};
