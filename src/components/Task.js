import { useDispatch } from 'react-redux'
import { completeTask, removeTask } from '../store/tasks'

export default function Task({ id, title, isComplete }) {
  const dispatch = useDispatch()

  const isCompleteStyle = isComplete === true ? 'line-through' : ''

  return (
    <div className="flex bg-slate-700 rounded-sm mx-4 md:mx-0 p-2 justify-between items-center">
      <h2 className={`text-xl ${isCompleteStyle}`}>{title}</h2>
      <div className="flex gap-2 items-center">
        <label>
          Completa?
          <input
            className="ml-2"
            type="checkbox"
            value={isComplete}
            checked={isComplete}
            onChange={() => dispatch(completeTask(id))}
          />
        </label>
        <button
          className="bg-red-600 hover:bg-red-700 transition p-1 rounded-sm font-bold"
          type="button"
          onClick={() => dispatch(removeTask(id))}
        >
          Excluir
        </button>
      </div>
    </div>
  )
}
