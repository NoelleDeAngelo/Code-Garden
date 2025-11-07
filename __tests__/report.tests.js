import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Report from "@/app/components/Report";



  const mocTasks = {
    debt: [
      {
        id:1,
        title: "task1",
        createdAt: new Date(),
        isCompleted: true,
        completedAt: new Date(),
      },
      {
        id:2,
        title: "task2",
        createdAt: new Date(),
        isCompleted: false,
        completedAt: null,
      },
    ],
    learning: [
      {
        id:3,
        title: "task3",
        createdAt: new Date(),
        isCompleted: true,
        completedAt: new Date(),
      },
    ],
  };

test("selecting complete status only shows tasks marked completed", () => {
  render(<Report tasks={mocTasks } />)
  fireEvent.change(screen.getByRole("combobox", { name: "Status:" }), {
    target: { value: "complete" },
  });

    expect(screen.getByText("task1")).toBeInTheDocument();
    expect(screen.getByText("task3")).toBeInTheDocument();
    expect(screen.queryByText("task2")).not.toBeInTheDocument();
});

test("selecting incomplete status only shows tasks marked incomplete", () => {
  render(<Report tasks={mocTasks} />);
  fireEvent.change(screen.getByRole("combobox", { name: "Status:" }), {
    target: { value: "incomplete" },
  });

  expect(screen.getByText("task2")).toBeInTheDocument();
  expect(screen.queryByText("task1")).not.toBeInTheDocument();
  expect(screen.queryByText("task3")).not.toBeInTheDocument();
});
