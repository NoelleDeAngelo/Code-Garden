import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Report from "@/app/components/Report";


test("selecting completed status filters tasks by completed", async () => {
  const mocTasks = {
    debt: [
      {
        title: "task1",
        createdAt: new Date(),
        isCompleted: true,
        completedAt: new Date(),
      },
      {
        title: "task2",
        createdAt: new Date(),
        isCompleted: false,
        completedAt: null,
      },
    ],
    learning: [
      {
        title: "task3",
        createdAt: new Date(),
        isCompleted: true,
        completedAt: new Date(),
      },
    ],
  };
  render(<Report tasks={mocTasks } />)
  fireEvent.change(screen.getByRole("combobox", { name: "Status:" }), {
    target: { value: "complete" },
  });

    expect(screen.getByText("task1")).toBeInTheDocument();
    expect(screen.getByText("task3")).toBeInTheDocument();
    expect(screen.queryByText("task2")).not.toBeInTheDocument();

});
