'use client'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div>
      <h2>Error loading headlines</h2>
      <a href="/">Return home</a>
    </div>
  )
}