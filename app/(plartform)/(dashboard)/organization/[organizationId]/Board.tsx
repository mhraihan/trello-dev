import deleteBoard from "@/actions/delete-board";
import { Button } from "@/components/ui/button";
import React from "react";
import { FormDelete } from "./form-delete";
interface BoardProps {
  id: string;
  title: string;
}
const Board = ({ id, title }: BoardProps) => {
  const deleteBoardWithId = deleteBoard.bind(null, id);

  return (
    <form action={deleteBoardWithId}>
      <div className="flex items-center space-x-3">
        <p>title: {title}</p>
        <FormDelete />
      </div>
    </form>
  );
};

export default Board;
