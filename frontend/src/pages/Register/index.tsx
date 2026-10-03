import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Card from "../../components/ui/Card";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

import { register } from "../../api/auth";

export default function Register() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleRegister() {
    try {
      setLoading(true);
      setError("");

      await register({
        full_name: fullName,
        email,
        password,
      });

      navigate("/login");

    } catch {
      setError("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950">

      <Card>

        <div className="flex w-[420px] flex-col gap-5">

          <h1 className="text-4xl font-bold text-white">
            Create Account
          </h1>

          <p className="text-slate-400">
            Create your OmniRAG AI account
          </p>

          <Input
            label="Full Name"
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />

          <Input
            label="Email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            label="Password"
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && (
            <p className="text-red-400">
              {error}
            </p>
          )}

          <Button
            loading={loading}
            onClick={handleRegister}
          >
            Create Account
          </Button>

          <button
            type="button"
            onClick={() => navigate("/login")}
            className="text-sm text-slate-400 hover:text-white"
          >
            Already have an account? Login
          </button>

        </div>

      </Card>

    </main>
  );
}