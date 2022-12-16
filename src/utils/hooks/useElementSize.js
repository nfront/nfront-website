import { useState, useEffect } from 'react'

function useElementSize(ref) {
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  })

  useEffect(() => {
    const updateSize = () => {
      setSize({
        width: ref.current.offsetWidth,
        height: ref.current.offsetHeight,
      })
    }

    window.addEventListener("resize", updateSize)
    updateSize()

    return () => window.removeEventListener("resize", updateSize)
  }, [])

  return [size]
}

export default useElementSize;