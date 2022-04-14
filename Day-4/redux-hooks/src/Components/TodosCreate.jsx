import { useReducer, useState } from "react";
import { v4 as uuid } from "uuid";
import { getTodosData } from "../Redux/Todos/action";
import { useDispatch } from "react-redux";

const initState = {
  title: "",
  description: "",
  subtasks: [],
  status: "",
  tags: { official: false, personal: false, others: false },
  date: "",
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "UPDATE_TITLE":
      return { ...state, title: payload };
    case "UPDATE_DESCRIPTION":
      return { ...state, description: payload };
    case "UPDATE_STATUS":
      return { ...state, status: payload };
    case "UPDATE_TAGS":
      return { ...state, tags: { ...state.tags, ...payload } };
    case "CHANGE_DATE":
      return { ...state, date: payload };
    case "UPDATE_SUBTASKS":
      return { ...state, subtasks: [...state.subtasks, ...payload] };
    case "TOGGLE_SUBTASK":
      const subtasksAfterToggle = state.subtasks.map((e) =>
        e.id === payload.id ? { ...e, subtaskStatus: payload.status } : e
      );
      return { ...state, subtasks: subtasksAfterToggle };
    case "DELETE_SUBTASK":
      const subtasksAfterDeletion = state.subtasks.filter(
        (e) => e.id !== payload
      );
      return { ...state, subtasks: subtasksAfterDeletion };
    default:
      throw new Error("Please give proper action object");
  }
};

export const Todos = () => {
  const [state, dispatch] = useReducer(reducer, initState);
  const reduxDispatch = useDispatch();

  const [subtaskInputValue, setSubtaskInputValue] = useState("");

  const createNewTask = () => {
    const payload = { ...state };
    fetch(`http://localhost:8080/todos`, {
      method: "POST",
      body: JSON.stringify(payload),
      header: { "Content-Type": "application/json" },
    }).then(() => reduxDispatch(getTodosData()));
  };

  const { title, description, subtasks, status, tags, date } = state;
  const { official, personal, others } = tags;

  return (
    <div>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) =>
          dispatch({ type: "UPDATE_TITLE", payload: e.target.value })
        }
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) =>
          dispatch({ type: "UPDATE_DESCRIPTION", payload: e.target.value })
        }
      />
      <br />
      <br />
      <div>
        <label>
          <input
            type="radio"
            checked={status === "Todo"}
            onChange={(e) =>
              dispatch({ type: "UPDATE_STATUS", payload: "Todo" })
            }
          />
          Todo
        </label>
        <br />
        <label>
          <input
            type="radio"
            checked={status === "InProgress"}
            onChange={(e) =>
              dispatch({ type: "UPDATE_STATUS", payload: "InProgress" })
            }
          />
          In Progress
        </label>
        <br />
        <label>
          <input
            type="radio"
            checked={status === "Done"}
            onChange={(e) =>
              dispatch({ type: "UPDATE_STATUS", payload: "Done" })
            }
          />
          Done
        </label>
        <br />
      </div>
      <br />

      <div>
        <label>
          <input
            type="checkbox"
            checked={official}
            onChange={(e) => {
              dispatch({
                type: "UPDATE_TAGS",
                payload: { official: e.target.checked },
              });
            }}
          />
          OFFICIAL
        </label>
        <br />

        <label>
          <input
            type="checkbox"
            checked={personal}
            onChange={(e) => {
              dispatch({
                type: "UPDATE_TAGS",
                payload: { personal: e.target.checked },
              });
            }}
          />
          PERSONAL
        </label>
        <br />

        <label>
          <input
            type="checkbox"
            checked={others}
            onChange={(e) => {
              dispatch({
                type: "UPDATE_TAGS",
                payload: { others: e.target.checked },
              });
            }}
          />
          OTHERS
        </label>
        <br />
        <br />
        <br />
        <input
          type="date"
          value={date}
          onChange={(e) =>
            dispatch({ type: "CHANGE_DATE", payload: e.target.value })
          }
        />
        <br />
        <br />
        <br />
        <h1>CREATE SUBTASKS</h1>
        <input
          type="text"
          value={subtaskInputValue}
          onChange={(e) => setSubtaskInputValue(e.target.value)}
        />
        <button
          onClick={() => {
            const payload = {
              id: uuid(),
              subtaskTitle: subtaskInputValue,
              subtaskStatus: false,
            };
            dispatch({ type: "UPDATE_SUBTASKS", payload });
          }}
        >
          ADD SUBTASK
        </button>
        <div>
          {subtasks.map((subtask) => (
            <div key={subtask.id} style={{ display: "flex" }}>
              <label>
                <input
                  type="checkbox"
                  checked={subtask.subtaskStatus}
                  onChange={(e) =>
                    dispatch({
                      type: "TOGGLE_SUBTASK",
                      payload: { id: subtask.id, status: e.target.checked },
                    })
                  }
                />
                {subtask.subtaskTitle}
              </label>
              <button
                onClick={() =>
                  dispatch({ type: "DELETE_SUBTASK", payload: subtask.id })
                }
              >
                DELETE TASK
              </button>
            </div>
          ))}
        </div>
      </div>
      <button onClick={createNewTask}>CREATE TASK</button>
    </div>
  );
};
