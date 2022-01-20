import NewTaskForm from './components/NewTaskForm'
import TasksContainer from './components/TasksContainer'
import Title from './components/Title'

function App() {
  return (
    <main className="mt-4 text-center max-w-3xl mx-auto flex flex-col gap-6">
      <Title title="Todo-List" />
      <NewTaskForm />
      <TasksContainer />
    </main>
  )
}

export default App
