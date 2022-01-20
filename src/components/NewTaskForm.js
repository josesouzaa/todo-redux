import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNewTask } from '../store/tasks'

export default function NewTaskForm() {
  const [title, setTitle] = useState('')
  const { error } = useSelector((state) => state.tasks)
  const dispatch = useDispatch()

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(addNewTask(title))
    setTitle('')
  }

  return (
    <>
      <form
        className="w-full flex justify-center"
        type="SUBMIT"
        onSubmit={handleSubmit}
      >
        <input
          className="rounded-l-sm text-zinc-800 px-2 w-full"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <button
          className="bg-emerald-600 hover:bg-emerald-700 transition p-2 font-bold radius rounded-r-sm"
          type="submit"
        >
          Adicionar
        </button>
      </form>
      {error && <span className="text-red-700">{error}</span>}
    </>
  )
}
