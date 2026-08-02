import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Card from "../../components/ui/Card";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

import { login } from "../../api/auth";
import { useAuthStore } from "../../store/authStore";

export default function Login() {
  const navigate = useNavigate();

  const setToken = useAuthStore(
    (state) => state.setToken
  );

  const [email, setEmail] = useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  async function handleLogin() {
    try {
      setLoading(true);

      setError("");

      const response = await login({
        email,
        password,
      });

      setToken(response.access_token);

      navigate("/dashboard");

    } catch  {

      setError(
        "Invalid email or password."
      );

    } finally {

      setLoading(false);

    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950">

      <Card>

        <div className="flex w-[420px] flex-col gap-5">

          <h1 className="text-4xl font-bold text-white">
            Welcome Back
          </h1>

          <p className="text-slate-400">
            Login to OmniRAG AI
          </p>

          <Input
            label="Email"
            placeholder="Enter email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <Input
            label="Password"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          {error && (
            <p className="text-red-400">
              {error}
            </p>
          )}

          <Button
            loading={loading}
            onClick={handleLogin}
          >
            Login
          </Button>

        </div>

      </Card>

    </main>
  );
}