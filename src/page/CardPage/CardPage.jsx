import { useContext } from "react";
import { PopBrowse } from "../../components/Popups/PopBrowse/popBrowse";
import { DataCardContext } from "../../context/DataCardContext";
import { useParams } from "react-router-dom";

export const CardPage = () => {
  const { cards } = useContext(DataCardContext);
  const { id } = useParams();
  return (
    <>
      <PopBrowse cards={cards.filter((card) => card._id === id)} />
    </>
  );
};
