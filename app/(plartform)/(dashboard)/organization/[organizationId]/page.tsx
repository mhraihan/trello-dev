import prisma from "@/lib/db";
import Board from "./Board";
import Form from "./Form";

const OrganizationIdPage = async () => {
  const boards = await prisma.board.findMany();
  return (
    <div>
      <div className="flex flex-col space-y-4">
        <Form />
      </div>
      <div className="space-y-2 mt-4">
        {boards.map((board) => (
          <Board key={board.id} id={board.id} title={board.title} />
        ))}
      </div>
    </div>
  );
};

export default OrganizationIdPage;
