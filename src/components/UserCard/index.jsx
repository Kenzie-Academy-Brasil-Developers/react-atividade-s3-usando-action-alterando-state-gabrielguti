import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../../store/modules/user/actions";
import { useState } from "react";

const UserCard = () => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const user = useSelector((state) => state.user);

  const handleAddUser = () => dispatch(changeName(userName));
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Novo usuário"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={handleAddUser}>Adicionar</button>
      </div>
      <div>{`User name: ${user.name}`}</div>
    </>
  );
};

export default UserCard;
