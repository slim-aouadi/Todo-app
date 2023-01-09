import React from 'react'

const ErrorMessage: React.FC<{ message: string }> = ({ message }) => (
  <div
    className="bg-red-100 border border-red-400 text-red-700 rounded relative mb-3 text-xs"
    role="alert"
  >
    <strong className="font-bold">Error:</strong>
    <span className="block sm:inline">{message}</span>
  </div>
)

export default ErrorMessage
