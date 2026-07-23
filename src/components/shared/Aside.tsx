import React from 'react'

const NavBar = () => {
  return (
    <div className="flex items-center justify-center gap-2 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-[0_12px_40px_rgba(52,40,21,0.08)] backdrop-blur">
    <header><img src="./sun.png" alt="sun" />
    <span className="text-xl text-[var(--accent)]">Soleil</span><span className="text-xl text-black">Mason</span></header>
    </div>
  )
}

export default NavBar
