import React from 'react'
import { Button } from '@projectmeb/ui'
//import { Button } from '@projectmeb/ui/components/atoms'
//import Button from '@projectmeb/ui/components/atoms/Button'

const App: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <Button>Click Me!</Button>
    </div>
  )
}

export default App

