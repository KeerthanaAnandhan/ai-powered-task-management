import { useNavigate } from "react-router-dom";

export default function Navbar({ role, setRole }) {
  const navigate = useNavigate();

  // Only switch role when clicking the button, navigation is separate
  const handleRoleSwitch = () => {
    const newRole = role === "user" ? "admin" : "user";
    setRole(newRole);
    // Navigate automatically to the correct page
    navigate(newRole === "admin" ? "/admin" : "/");
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600
                    shadow-lg z-50 p-4 flex justify-between items-center text-white">
      <div className="flex items-center gap-2 font-bold text-xl">
        <span className="text-2xl">🚀</span> AI Task Manager
      </div>

      <div className="flex gap-4 items-center">
        {/* Navigation does NOT change role */}
        <button onClick={() => navigate("/")} className="hover:underline">Dashboard</button>
          {role === "admin" ? (
            <button onClick={() => navigate("/admin")} className="hover:underline">Admin</button>
          ) : (
            <span className="text-gray-300 cursor-not-allowed">Admin</span>
          )}
        <button
          className="px-3 py-1 rounded bg-white text-indigo-600 font-semibold hover:bg-gray-100"
          onClick={handleRoleSwitch}
        >
          Switch to {role === "user" ? "Admin" : "User"}
        </button>
      </div>
    </nav>
  );
}
