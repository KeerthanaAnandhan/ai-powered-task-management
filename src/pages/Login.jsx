import { useState } from "react";

export default function Login({ setRole }) {
  const [asAdmin, setAsAdmin] = useState(false);
  const submit = (e) => { e.preventDefault(); setRole(asAdmin ? "admin" : "user"); alert("Role set"); };
  return (
    <div className="max-w-md mx-auto p-6 mt-10 card rounded">
      <h2 className="text-2xl font-bold mb-4">Mock Login</h2>
      <form onSubmit={submit} className="space-y-3">
        <label className="flex items-center gap-2"><input type="checkbox" checked={asAdmin} onChange={e=>setAsAdmin(e.target.checked)} /> Login as Admin</label>
        <button className="w-full bg-gradient-to-r from-indigo-500 to-cyan-400 text-black px-4 py-2 rounded">Set Role</button>
      </form>
    </div>
  );
}
